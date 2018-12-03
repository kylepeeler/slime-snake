import "phaser";

const SHOW_DEBUG = false;

const TINT_MAP = {
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
  purple: 0xaa00ff,
  yellow: 0xffff00
};


const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  pixelArt: true,
  canvasStyle: 'zoom: 200%',
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } //Top down game, no gravity
    }
  }
};

const game = new Phaser.Game(config);
let cursors;

// Runs once, loads up assets like images and audio
function preload() {
  this.load.image("dungeon-tiles", "../assets/tilesets/dungeon_tiles.png");
  this.load.tilemapTiledJSON("map", "../assets/tilemaps/level1.json");
  this.load.spritesheet("slime", "assets/spritesheets/slime.png", {
    frameWidth: 16,
    frameHeight: 16,
    endFrame: 15
  });
}

function makeAnimations(scene) {
  scene.anims.create({
    key: "slime_walk_down",
    frames: scene.anims.generateFrameNumbers("slime", {
      start: 0,
      end: 2,
      first: 0
    }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: "slime_walk_left",
    frames: scene.anims.generateFrameNumbers("slime", {
      start: 3,
      end: 5,
      first: 3
    }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: "slime_walk_right",
    frames: scene.anims.generateFrameNumbers("slime", {
      start: 6,
      end: 8,
      first: 6
    }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: "slime_walk_up",
    frames: scene.anims.generateFrameNumbers("slime", {
      start: 9,
      end: 11,
      first: 9
    }),
    frameRate: 10,
    repeat: -1
  });
}

function addSlime(scene, slimeColor = 'yellow', x = -25, y = -25) {
	let slime = scene.physics.add.sprite(
      x,
      y,
      "slime"
    );
    console.log('GOT ' + slimeColor);
    
    slime.setTint(TINT_MAP[slimeColor]);
    scene.followingSlimes.add(slime);
}

function staticSlimeCollision(movingSlime, staticSlime) {
  staticSlime.disableBody(true, true);
	addSlime(movingSlime.scene, staticSlime.color);
	return false;
}

// Runs once, after all assets in preload are loaded
function create() {
  makeAnimations(this);
  const map = this.make.tilemap({ key: "map" });
  const spawnPoint = map.findObject("points", obj => obj.name === "spawnpoint");
  
  // We're going to assume anything starting with "slime-..." is a spawn for a slime. determine color later
  const staticSlimes = map.filterObjects("points", obj => obj.name.startsWith("slime-"));
  this.staticSlimes = this.physics.add.group();
  
  console.log("spawnPoint");
  console.log(spawnPoint);
  staticSlimes.forEach(staticSlime => {
	// Split the name so we can get the color. name should look like: "slime-COLOR-ID" or "slime-COLOR" if unique
	const KEY_PARTS = staticSlime.name.split("-");
	if (KEY_PARTS.length < 2) {
		console.log("Error creating slime from spawn: " + staticSlime.name);
		console.log(staticSlime);
	}
	let tempSlime = this.physics.add.sprite(
      staticSlime.x,
      staticSlime.y,
      "slime"
    );
    console.log(KEY_PARTS[1], TINT_MAP[KEY_PARTS[1]]);
    tempSlime.setTint(TINT_MAP[KEY_PARTS[1]]);
    tempSlime.color = KEY_PARTS[1];
    tempSlime.anims.play("slime_walk_down", true);
    this.staticSlimes.add(tempSlime);
  });	  

  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  const tileset = map.addTilesetImage("dungeonv4", "dungeon-tiles");

  // Parameters: layer name (or index) from Tiled, tileset, x, y
  const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
  const wallLayer = map.createStaticLayer("wall", tileset, 0, 0);
  const waterLayer = map.createStaticLayer("water", tileset, 0, 0);
  const doorLayer = map.createStaticLayer("door", tileset, 0, 0);
  const objectsLayer = map.createStaticLayer("objects", tileset, 0, 0);

  // Enable collision for each tile layer
  wallLayer.setCollisionByProperty({ collide: true });
  waterLayer.setCollisionByProperty({ collide: true });
  doorLayer.setCollisionByProperty({ collide: true });
  objectsLayer.setCollisionByProperty({ collide: true });

  this.followingSlimes = this.physics.add.group();
  this.movingSlime = this.physics.add.sprite(
    spawnPoint.x,
    spawnPoint.y,
    "slime"
  );
  var tints = [TINT_MAP.red, TINT_MAP.blue, TINT_MAP.purple, TINT_MAP.yellow]
  for (let i = 0; i < 4; i++) {
    let slime = this.physics.add.sprite(
      spawnPoint.x - 10 - i * 8,
      spawnPoint.y,
      "slime"
    );
    slime.setTint(tints[i]);
    this.followingSlimes.add(slime);
  }
  
  this.slimePosIndexOffset = 0;
  this.slimePos = [];
  for (var i = 0; i < 1000; i++) {
    this.slimePos[i] = -50;
  }
  this.movingSlime.setTint(TINT_MAP.green);

  this.physics.add.collider(this.movingSlime, wallLayer);
  this.physics.add.collider(this.movingSlime, waterLayer);
  this.physics.add.collider(this.movingSlime, doorLayer);
  this.physics.add.collider(this.movingSlime, objectsLayer);

  if (SHOW_DEBUG) {
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    doorLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(255, 255, 255, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    wallLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(255, 0, 0, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    waterLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(0, 255, 0, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    objectsLayer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(0, 0, 255, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
  }

  // Phaser supports multiple cameras, but you can access the default camera like this:
  const camera = this.cameras.main;

  // Set up the arrows to control the camera
  cursors = this.input.keyboard.createCursorKeys();

  // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
  camera.startFollow(this.movingSlime);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}

// Runs once per frame for the duration of the scene
function update(time, delta) {
  window.gameObj = this;
  // to add slimes
  this.physics.collide(this.movingSlime, this.staticSlimes, staticSlimeCollision, staticSlimeCollision, this);
  this.slimePos[this.slimePosIndexOffset] = this.movingSlime.x;
  this.slimePos[this.slimePosIndexOffset + 1] = this.movingSlime.y;
  this.slimePosIndexOffset = this.slimePosIndexOffset - 2;
  if (this.slimePosIndexOffset < 0) this.slimePosIndexOffset = this.slimePosIndexOffset + 1000;
  for (var i = 0; i < this.followingSlimes.children.size; i++) {
    var idx = this.slimePosIndexOffset + (i + 1) * 30;
    idx = idx % 1000;
    this.followingSlimes.children.entries[i].x = this.slimePos[idx];
    this.followingSlimes.children.entries[i].y = this.slimePos[idx + 1];
  }
  // Apply the controls to the camera each update tick of the game
  //controls.update(delta);
  const speed = 200;

  // Stop any previous movement from the last frame
  this.movingSlime.body.setVelocity(0);

  // Horizontal movement
  if (cursors.left.isDown) {
    this.movingSlime.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    this.movingSlime.body.setVelocityX(speed);
  }

  // Vertical movement
  if (cursors.up.isDown) {
    this.movingSlime.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    this.movingSlime.body.setVelocityY(speed);
  }

  // Normalize and scale the velocity so that this.movingSlime can't move faster along a diagonal
  this.movingSlime.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    this.movingSlime.anims.play("slime_walk_left", true);
  } else if (cursors.right.isDown) {
    this.movingSlime.anims.play("slime_walk_right", true);
  } else if (cursors.up.isDown) {
    this.movingSlime.anims.play("slime_walk_up", true);
  } else if (cursors.down.isDown) {
    this.movingSlime.anims.play("slime_walk_down", true);
  } else {
    this.movingSlime.anims.play("slime_walk_down", true);
  }
  
  //top-down layering
  this.movingSlime.depth = this.movingSlime.y;
  this.staticSlimes.children.entries.forEach(staticSlime => staticSlime.depth = this.movingSlime.depth);
  // Layer the slimes so they are all over the proceding one
  this.followingSlimes.children.entries.forEach(function(slime, index) {
    slime.depth = this.movingSlime.depth - 0.1 * (index + 1);
  }, this);

  this.followingSlimes.children.entries.forEach(function(slime, index) {
    //console.log(slime.anims);
	let animDir = "";
    if (this.movingSlime.body.velocity.y > 0) {
      animDir = "down";
    } else if (this.movingSlime.body.velocity.x < 0) {
      animDir = "left";
    } else if (this.movingSlime.body.velocity.x > 0) {
      animDir = "right";
    } else if (this.movingSlime.body.velocity.y < 0) {
      animDir = "up";
    } else {
      animDir = "down";
    }
    let anim = "slime_walk_" + animDir;
    if (!slime.anims.isPlaying || anim !== slime.anims.currentAnim.key) {
      slime.play(anim);
    }
  }, this);
}

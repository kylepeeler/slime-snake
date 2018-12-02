import "phaser";

const SHOW_DEBUG = false;

const TINT_MAP = {
	red: 0xFF0000,
	green: 0x00FF00,
	blue: 0x0000FF,
	purple: 0xAA00FF
}

const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  pixelArt: true,
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
let cursors, movingSlime;

// Runs once, loads up assets like images and audio
function preload() {
  this.load.image("dungeon-tiles", "../assets/tilesets/dungeon_tiles.png");
  this.load.tilemapTiledJSON("map", "../assets/tilemaps/level1.json");
  this.load.spritesheet(
    "slime",
    "assets/spritesheets/slime.png",
    {
      frameWidth: 16,
      frameHeight: 16,
      endFrame: 15
    }
  );
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

// Runs once, after all assets in preload are loaded
function create() {
  makeAnimations(this);
  const map = this.make.tilemap({ key: "map" });
  const spawnPoint = map.findObject("points", obj => obj.name === "spawnpoint");

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

  movingSlime = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "slime");
  movingSlime.setTint(TINT_MAP.purple)
  console.log(movingSlime);
  this.physics.add.collider(movingSlime, wallLayer);
  this.physics.add.collider(movingSlime, waterLayer);
  this.physics.add.collider(movingSlime, doorLayer);
  this.physics.add.collider(movingSlime, objectsLayer);

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
  camera.startFollow(movingSlime);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}

function update(time, delta) {
  // Runs once per frame for the duration of the scene
  // Apply the controls to the camera each update tick of the game
  //controls.update(delta);
  const speed = 100;

  // Stop any previous movement from the last frame
  movingSlime.body.setVelocity(0);

  // Horizontal movement
  if (cursors.left.isDown) {
    movingSlime.body.setVelocityX(-100);
  } else if (cursors.right.isDown) {
    movingSlime.body.setVelocityX(100);
  }

  // Vertical movement
  if (cursors.up.isDown) {
    movingSlime.body.setVelocityY(-100);
  } else if (cursors.down.isDown) {
    movingSlime.body.setVelocityY(100);
  }

  // Normalize and scale the velocity so that movingSlime can't move faster along a diagonal
  movingSlime.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    movingSlime.anims.play("slime_walk_left", true);
  } else if (cursors.right.isDown) {
    movingSlime.anims.play("slime_walk_right", true);
  } else if (cursors.up.isDown) {
    movingSlime.anims.play("slime_walk_up", true);
  } else if (cursors.down.isDown) {
    movingSlime.anims.play("slime_walk_down", true);
  } else {
    movingSlime.anims.stop();
  }
}

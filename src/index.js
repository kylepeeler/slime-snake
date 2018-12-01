import 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game',
    });
  }

	preload ()
	{
		// Load the map tileset image
		this.load.image('spaceship', 'assets/spaceship.png');
		// Parse the json file to generate an actual map
		this.load.tilemapTiledJSON('map', 'assets/maps/example_spaceship.json');
		
		// Load slime spritesheet
		this.load.spritesheet(
		  'slime',
		  'assets/slime.png',
		  { frameWidth: 16, frameHeight: 16, endFrame: 15 },
		);
		
		// Have to load the TiledPhysics plugin
		this.load.scenePlugin({
			key: 'TiledPhysics',
			url: 'assets/plugins/TiledPhysics.js',
		});
	}

	create ()
	{
		const map = this.make.tilemap({ key: 'map' });
		const tiles = map.addTilesetImage('spaceship', 'spaceship');

		const zero = map.createStaticLayer('zero', tiles, 0, 0);
		const one = map.createStaticLayer('one', tiles, 0, 0);
		makeAnimations(this);
		
		this.movingSlime = this.add.sprite(80, 80);
		this.movingSlime.play('slime_walk_down');

		const two = map.createDynamicLayer('two', tiles, 0, 0);
		two.depth = two.height + 1;

		// enable layers
		const layerZero = this.physics.world.enable(zero);
		const layerOne = this.physics.world.enable(one);
		this.physics.world.enable(two);
		
		// enable bodies
		const movingSlime = this.physics.world.enable(this.movingSlime);
		this.movingSlime.body.setOffset(4, 8);

		// enable colliders and modifiers
		
    this.physics.add.collider(movingSlime, [layerZero, layerOne]);
    this.physics.add.force(movingSlime, [layerZero, layerOne]);
	
	this.physics.add.inertia(movingSlime, layerOne);

		this.switch = false;

		// camera
		this.cameras.main.startFollow(this.movingSlime);
		this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
		
		this.keys = {
		  up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
		  left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
		  right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
		  down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
		};
	}

  update(time, delta) {
    // bodies
    if (this.movingSlime.body.velocity.x ** 2 < 2) this.movingSlime.body.velocity.x = 0;
    if (this.movingSlime.body.velocity.y ** 2 < 2) this.movingSlime.body.velocity.y = 0;

    const speed = 50;
	console.log(this.movingSlime.body.isOnTile);
    if (this.movingSlime.body.isOnTile ||
       (this.movingSlime.body.velocity.x === 0 && this.movingSlime.body.velocity.y === 0)) {
      if (this.keys.down.isDown) {
        this.movingSlime.body.setVelocity(0, speed);
      } else if (this.keys.left.isDown) {
        this.movingSlime.body.setVelocity(-speed, 0);
      } else if (this.keys.right.isDown) {
        this.movingSlime.body.setVelocity(speed, 0);
      } else if (this.keys.up.isDown) {
        this.movingSlime.body.setVelocity(0, -speed);
      }
    }

    // animations
    let animDir = '';
    if (this.movingSlime.body.velocity.y > 0) {
      animDir = 'down';
    } else if (this.movingSlime.body.velocity.x < 0) {
      animDir = 'left';
    } else if (this.movingSlime.body.velocity.x > 0) {
      animDir = 'right';
    } else if (this.movingSlime.body.velocity.y < 0) {
      animDir = 'up';
    } else {
      animDir = 'down';
    }
    let anim = 'slime_walk_' + animDir;
    if (anim !== this.movingSlime.anims.currentAnim.key) {
      this.movingSlime.play(anim);
    }

    // top-down layering
    this.movingSlime.depth = this.movingSlime.y;
  }
}

/* TODO: pull this out to its own file */
function makeAnimations(scene) {
 scene.anims.create({
    key: 'slime_walk_down',
    frames: scene.anims.generateFrameNumbers('slime', { start: 0, end: 2, first: 0 }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: 'slime_walk_left',
    frames: scene.anims.generateFrameNumbers('slime', { start: 3, end: 5, first: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: 'slime_walk_right',
    frames: scene.anims.generateFrameNumbers('slime', { start: 6, end: 8, first: 6 }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: 'slime_walk_up',
    frames: scene.anims.generateFrameNumbers('slime', { start: 9, end: 11, first: 9 }),
    frameRate: 10,
    repeat: -1,
  });
}

const config = {
  type: Phaser.WEBGL,
  parent: 'content',
  width: 320,
  height: 240,
  scaleMode: 0, // Phaser.ScaleManager.EXACT_FIT,
  pixelArt: true,
  zoom: 4,
  antialias: false,
  physics: {
    tiled: {
      tileHeight: 8,
      tileWidth: 8,
      debug: true,
    }
  },
  scene: [
    Game,
  ],
};

var game = new Phaser.Game(config);

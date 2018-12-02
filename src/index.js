import 'phaser';

const DEBUG_COLLISIONS = false;

const config = {
    type: Phaser.AUTO,
    width: 320,
		height: 240,
		pixelArt: true,
    scene: {
        preload: preload,
				create: create,
				update: update
    }
};

const game = new Phaser.Game(config);
let controls;

function preload ()
{
	this.load.image('dungeon-tiles', '../assets/tilesets/dungeon_tiles.png');
	this.load.tilemapTiledJSON("map", '../assets/tilemaps/level1.json')
   // Runs once, loads up assets like images and audio
}

// Runs once, after all assets in preload are loaded
function create ()
{
	const map = this.make.tilemap({key: "map"});

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
	wallLayer.setCollisionByProperty({ collide: true })
	waterLayer.setCollisionByProperty({ collide: true })
	doorLayer.setCollisionByProperty({ collide: true })
	objectsLayer.setCollisionByProperty({ collide: true })

	if (DEBUG_COLLISIONS){
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
	const cursors = this.input.keyboard.createCursorKeys();
	controls = new Phaser.Cameras.Controls.FixedKeyControl({
		camera: camera,
		left: cursors.left,
		right: cursors.right,
		up: cursors.up,
		down: cursors.down,
		speed: 0.5
	});

	// Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
	camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

}

function update(time, delta){
	// Runs once per frame for the duration of the scene
	// Apply the controls to the camera each update tick of the game
	controls.update(delta);
}

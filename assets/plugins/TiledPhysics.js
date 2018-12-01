(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TiledPhysics", [], factory);
	else if(typeof exports === 'object')
		exports["TiledPhysics"] = factory();
	else
		root["TiledPhysics"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adjacent = __webpack_require__(6);

Object.defineProperty(exports, 'adjacent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_adjacent).default;
  }
});

var _const = __webpack_require__(7);

Object.defineProperty(exports, 'C', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_const).default;
  }
});

var _direction = __webpack_require__(8);

Object.defineProperty(exports, 'direction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_direction).default;
  }
});

var _down = __webpack_require__(9);

Object.defineProperty(exports, 'down', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_down).default;
  }
});

var _left = __webpack_require__(10);

Object.defineProperty(exports, 'left', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_left).default;
  }
});

var _right = __webpack_require__(11);

Object.defineProperty(exports, 'right', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_right).default;
  }
});

var _up = __webpack_require__(12);

Object.defineProperty(exports, 'up', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_up).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOverlapX = __webpack_require__(18);

Object.defineProperty(exports, 'getOverlapX', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getOverlapX).default;
  }
});

var _getOverlapY = __webpack_require__(19);

Object.defineProperty(exports, 'getOverlapY', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getOverlapY).default;
  }
});

var _separateX = __webpack_require__(20);

Object.defineProperty(exports, 'separateX', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_separateX).default;
  }
});

var _separateY = __webpack_require__(21);

Object.defineProperty(exports, 'separateY', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_separateY).default;
  }
});

var _intersects = __webpack_require__(22);

Object.defineProperty(exports, 'intersects', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intersects).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @classdesc
 * [description]
 *
 * @class Body
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Tilemap} tilemap - [description]
 * @param {Phaser.GameObjects.GameObject} gameObject - [description]
 */
var Body = function () {
  function Body(world, gameObject) {
    _classCallCheck(this, Body);

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#world
     * @type {Physics.Tiled.World}
     * @since 0.1.0
     */
    this.world = world;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#gameObject
     * @type
     * @since 0.1.0
     */
    this.gameObject = gameObject;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#enable
     * @type
     * @since 0.1.0
     */
    this.enable = true;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#offset
     * @type
     * @since 0.1.0
     */
    this.offset = new Phaser.Math.Vector2();

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#position
     * @type
     * @since 0.1.0
     */
    this.position = new Phaser.Math.Vector2(gameObject.x, gameObject.y);

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#prev
     * @type
     * @since 0.1.0
     */
    this.prev = new Phaser.Math.Vector2(gameObject.x, gameObject.y);

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#tile
     * @type
     * @since 0.1.0
     */
    this.tile = new Phaser.Math.Vector2(Math.floor(this.position.x / this.world.tilesize.x), Math.floor(this.position.y / this.world.tilesize.y));

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#width
     * @type
     * @since 0.1.0
     */
    this.width = this.world.tilesize.x;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#height
     * @type
     * @since 0.1.0
     */
    this.height = this.world.tilesize.y;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#velocity
     * @type
     * @since 0.1.0
     */
    this.velocity = new Phaser.Math.Vector2();

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#newVelocity
     * @type
     * @since 0.1.0
     */
    this.newVelocity = new Phaser.Math.Vector2();

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#acceleration
     * @type {Phaser.Math.Vector2}
     * @since 0.1.0
     */
    this.acceleration = new Phaser.Math.Vector2();

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#bounce
     * @type {Phaser.Math.Vector2}
     * @since 0.1.0
     */
    this.bounce = new Phaser.Math.Vector2();

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#friction
     * @type {Phaser.Math.Vector2}
     * @since 0.1.0
     */
    this.friction = new Phaser.Math.Vector2(1, 1);

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#mass
     * @type {Phaser.Math.Vector2}
     * @since 0.1.0
     */
    this.mass = 1;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#facing
     * @type
     * @since 0.1.0
     */
    this.facing = _index.C.DOWN;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#immovable
     * @type {boolean}
     * @default false
     * @since 0.1.0
     */
    this.immovable = false;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#moves
     * @type {boolean}
     * @default true
     * @since 0.1.0
     */
    this.moves = true;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#dirty
     * @type {boolean}
     * @default false
     * @since 0.1.0
     */
    this.dirty = false;

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#isOnTile
     * @type
     * @since 0.1.0
     */
    this.isOnTile = true;
  }

  /**
   * [description]
   *
   * @method Physics.Tiled.Body#update
   * @since 0.1.0
   *
   * @param {number} delta - [description]
   */


  _createClass(Body, [{
    key: 'update',
    value: function update(delta) {
      this.dirty = true;

      this.isOnTile = false;

      if (this.moves) {
        this.velocity.x += this.acceleration.x * delta;
        this.velocity.y += this.acceleration.y * delta;

        this.newVelocity.x = this.velocity.x * delta;
        this.newVelocity.y = this.velocity.y * delta;

        var next = {};
        next.x = this.position.x + this.newVelocity.x;
        next.y = this.position.y + this.newVelocity.y;

        // make sure that the body goes through all the tiles along its path
        var twidth = this.world.tilesize.x;
        if (Math.floor(next.x / twidth) > Math.floor(this.position.x / twidth)) {
          // the body moved one tile right
          this.tile.x = Math.floor(next.x / twidth);
          this.position.x = this.tile.x * twidth;
          this.isOnTile = true;
        } else if (Math.ceil(next.x / twidth) < Math.ceil(this.position.x / twidth)) {
          // the body moved one tile left
          this.tile.x = Math.ceil(next.x / twidth);
          this.position.x = this.tile.x * twidth;
          this.isOnTile = true;
        } else {
          // the body is moving between two tiles
          this.position.x = next.x;
        }

        var theight = this.world.tilesize.x;
        if (Math.floor(next.y / theight) > Math.floor(this.position.y / theight)) {
          // the body moved one tile down
          this.tile.y = Math.floor(next.y / theight);
          this.position.y = this.tile.y * theight;
          this.isOnTile = true;
        } else if (Math.ceil(next.y / theight) < Math.ceil(this.position.y / theight)) {
          // the body moved one tile up
          this.tile.y = Math.ceil(next.y / theight);
          this.position.y = this.tile.y * theight;
          this.isOnTile = true;
        } else {
          // the body is moving between two tiles
          this.position.y = next.y;
        }

        // update facing direction
        if (this.velocity.x !== 0 || this.velocity.y !== 0) {
          this.facing = (0, _index.direction)(this.velocity.x, this.velocity.y);
        }
      }
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Body#postUpdate
     * @since 0.1.0
     */

  }, {
    key: 'postUpdate',
    value: function postUpdate() {
      //  Only allow postUpdate to be called once per frame
      if (!this.enable || !this.dirty) {
        return;
      }

      this.dirty = false;

      this.gameObject.x = this.position.x + this.gameObject.width / 2 - this.offset.x;
      this.gameObject.y = this.position.y + this.gameObject.height / 2 - this.offset.y;

      this.prev.x = this.position.x;
      this.prev.y = this.position.y;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @return
     */

  }, {
    key: 'heading',
    value: function heading() {
      if (this.velocity.x !== 0 || this.velocity.y !== 0) {
        this.facing = (0, _index.direction)(this.velocity.x, this.velocity.y);
      }
      return this.facing;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setOffset',
    value: function setOffset(x, y) {
      this.offset.set(x, y);
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} width - [description]
     * @param {number} height - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     */

  }, {
    key: 'reset',
    value: function reset(x, y) {
      this.stop();
      this.gameObject.setPosition(x, y);
      this.gameObject.getTopLeft(this.position);
      this.prev.copy(this.position);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.velocity.set(0, 0);
      this.acceleration.set(0, 0);
      return this;
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Body#deltaAbsX
     * @since 0.1.0
     *
     * @return {number} [description]
     */

  }, {
    key: 'deltaAbsX',
    value: function deltaAbsX() {
      return this.deltaX() > 0 ? this.deltaX() : -this.deltaX();
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Body#deltaAbsY
     * @since 0.1.0
     *
     * @return {number} [description]
     */

  }, {
    key: 'deltaAbsY',
    value: function deltaAbsY() {
      return this.deltaY() > 0 ? this.deltaY() : -this.deltaY();
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Body#deltaX
     * @since 0.1.0
     *
     * @return {number} [description]
     */

  }, {
    key: 'deltaX',
    value: function deltaX() {
      return this.position.x - this.prev.x;
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Body#deltaY
     * @since 0.1.0
     *
     * @return {number} [description]
     */

  }, {
    key: 'deltaY',
    value: function deltaY() {
      return this.position.y - this.prev.y;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.enable = false;
      this.world.pendingDestroy.set(this);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setVelocity',
    value: function setVelocity(x, y) {
      this.velocity.set(x, y);
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} value - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setVelocityX',
    value: function setVelocityX(value) {
      this.velocity.x = value;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} value - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setVelocityY',
    value: function setVelocityY(value) {
      this.velocity.y = value;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} x - [description]
     * @param {number} y - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setAcceleration',
    value: function setAcceleration(x, y) {
      this.acceleration.set(x, y);
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} value - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setAccelerationX',
    value: function setAccelerationX(value) {
      this.acceleration.x = value;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} value - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setAccelerationY',
    value: function setAccelerationY(value) {
      this.acceleration.y = value;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {number} value - [description]
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'setImmovable',
    value: function setImmovable(value) {
      this.immovable = value;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'lineUp',
    value: function lineUp() {
      this.position.x = this.world.tilesize.x * this.tile.x;
      this.position.y = this.world.tilesize.y * this.tile.y;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'lineUpX',
    value: function lineUpX() {
      this.position.x = this.world.tilesize.x * this.tile.x;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @return {Physics.Tiled.Body} This Body object.
     */

  }, {
    key: 'lineUpY',
    value: function lineUpY() {
      this.position.y = this.world.tilesize.y * this.tile.y;
      return this;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#x
     * @type {number}
     * @since 0.1.0
     */

  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#x
     * @type {number}
     * @since 0.1.0
     */
    ,
    set: function set(value) {
      this.position.x = value;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#y
     * @type {number}
     * @since 0.1.0
     */

  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#y
     * @type {number}
     * @since 0.1.0
     */
    ,
    set: function set(value) {
      this.position.y = value;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#left
     * @type {number}
     * @readOnly
     * @since 0.1.0
     */

  }, {
    key: 'left',
    get: function get() {
      return this.position.x;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#right
     * @type {number}
     * @readOnly
     * @since 0.1.0
     */

  }, {
    key: 'right',
    get: function get() {
      return this.position.x + this.width;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#top
     * @type {number}
     * @readOnly
     * @since 0.1.0
     */

  }, {
    key: 'top',
    get: function get() {
      return this.position.y;
    }

    /**
     * [description]
     *
     * @name Physics.Tiled.Body#bottom
     * @type {number}
     * @readOnly
     * @since 0.1.0
     */

  }, {
    key: 'bottom',
    get: function get() {
      return this.position.y + this.height;
    }
  }]);

  return Body;
}();

exports.default = Body;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author
 * @copyright
 * @license
 */

/**
 * @classdesc
 * [description]
 *
 * @class Layer
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Tilemap} tilemap - [description]
 */
var Layer = function () {
  function Layer(tilemap) {
    _classCallCheck(this, Layer);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.tilemap = tilemap;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.data = [];

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.tileset = new Phaser.Structs.Map();

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.undefinedId = -1;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.undefinedProps = {};
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   *
   * @param i - [description]
   * @param j - [description]
   */


  _createClass(Layer, [{
    key: "tileAt",
    value: function tileAt(i, j) {
      if (!this.data[i] || !this.data[i][j]) {
        return this.undefinedId;
      }
      return this.data[i][j];
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param i - [description]
     * @param j - [description]
     */

  }, {
    key: "propertiesOf",
    value: function propertiesOf(i, j) {
      return this.tileset.get(this.tileAt(i, j)) || this.undefinedProps;
    }
  }]);

  return Layer;
}();

exports.default = Layer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _World = __webpack_require__(5);

var _World2 = _interopRequireDefault(_World);

var _Factory = __webpack_require__(23);

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @classdesc
 * [description]
 *
 * @class TiledPhysics
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
var TiledPhysics = function () {
  function TiledPhysics(scene) {
    _classCallCheck(this, TiledPhysics);

    /**
     * [description]
     *
     * @name Physics.Tiled.TiledPhysics#
     * @type
     * @since 0.1.0
     */
    Phaser.Physics.TiledPhysics = this;

    /**
     * [description]
     *
     * @name Physics.Tiled.TiledPhysics#scene
     * @type {Phaser.Scene}
     * @since 0.1.0
     */
    this.scene = scene;
    scene.physics = this;

    /**
     * [description]
     *
     * @name Physics.Tiled.TiledPhysics#world
     * @type
     * @since 0.1.0
     */
    this.world = undefined;

    /**
     * [description]
     *
     * @name .Physics.Tiled.TiledPhysics#world
     * @type
     * @since 0.1.0
     */
    this.add = undefined;

    /**
     * [description]
     *
     * @name Physics.Tiled.TiledPhysics#systems
     * @type
     * @since 0.1.0
     */
    this.systems = scene.sys;

    scene.sys.events.once('boot', this.boot, this);
  }

  /**
   * This method is called automatically, only once, when the Scene is first created.
   * Do not invoke it directly.
   *
   * @method Phaser.Physics.Tiled.TiledPhysics#boot
   * @private
   * @since 0.1.0
   */


  _createClass(TiledPhysics, [{
    key: 'boot',
    value: function boot() {
      if (!this.world) {
        this.world = new _World2.default(this.scene, this.systems.game.config.physics.tiled);
        this.add = new _Factory2.default(this.world);
      }

      var eventEmitter = this.systems.events;

      eventEmitter.on('update', this.world.update, this.world);
      eventEmitter.on('postupdate', this.world.postUpdate, this.world);
      eventEmitter.once('shutdown', this.shutdown, this);
      eventEmitter.once('destroy', this.destroy, this);
    }

    /**
     *
     * @method Phaser.Physics.Tiled.TiledPhysics#shutdown
     * @private
     * @since 0.1.0
     */

  }, {
    key: 'shutdown',
    value: function shutdown() {}

    /**
     *
     * @method Phaser.Physics.Tiled.TiledPhysics#destroy
     * @private
     * @since 0.1.0
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.shutdown();
      this.scene.sys.events.off('start', this.start, this);
      this.scene = undefined;
    }
  }]);

  return TiledPhysics;
}();

/**
 * Static function called by the PluginFile Loader.
 *
 * @method
 * @private
 * @since 0.1.0
 */


TiledPhysics.register = function (PluginManager) {
  PluginManager.register('TiledPhysics', TiledPhysics, 'TiledPhysics');
};

module.exports = TiledPhysics;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Body = __webpack_require__(2);

var _Body2 = _interopRequireDefault(_Body);

var _Tilemap = __webpack_require__(13);

var _Tilemap2 = _interopRequireDefault(_Tilemap);

var _Layer = __webpack_require__(3);

var _Layer2 = _interopRequireDefault(_Layer);

var _Collider = __webpack_require__(17);

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @classdesc
 * [description]
 *
 * @class World
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Phaser.Scene} scene - [description]
 * @param {WorldConfig} config - [description]
 */
var World = function () {
  function World(scene, config) {
    _classCallCheck(this, World);

    if (!config) config = {};
    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.scene = scene;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.bodies = new Phaser.Structs.Set();

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.tilemap = new _Tilemap2.default(this);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.tilesize = new Phaser.Math.Vector2(config.tileWidth, config.tileHeight);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.pendingDestroy = new Phaser.Structs.Set();

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.colliders = new Phaser.Structs.ProcessQueue();

    /**
     * [description]
     *
     * @name Phaser.Physics.Arcade.World#isPaused
     * @type {boolean}
     * @default false
     * @since 0.1.0
     */
    this.isPaused = false;
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   *
   * @param {Phaser.GameObjects.GameObject} object - [description]
   */


  _createClass(World, [{
    key: 'enable',
    value: function enable(object) {
      var layer = new _Layer2.default(this.tilemap);
      var fst = {};
      var props = {};
      var key = -1;

      switch (object.type) {
        case 'Sprite':
          // give a physical body to the sprite
          object.body = new _Body2.default(this, object);
          this.bodies.set(object.body);
          return object.body;
        case 'StaticTilemapLayer':
          // layer data
          layer.data = [];
          for (var x = 0; x < object.layer.width; x += 1) {
            layer.data[x] = [];
            for (var y = 0; y < object.layer.height; y += 1) {
              layer.data[x][y] = object.layer.data[y][x].index;
            }
          }
          // tiles' properties
          props = Object.keys(object.tileset.tileProperties);
          for (var p in props) {
            fst = object.tileset.firstgid;
            key = Number(props[p]) + Number(fst);
            layer.tileset.set(key, object.tileset.tileProperties[props[p]]);
          }
          this.tilemap.layers.set(layer);
          return layer;
        default:
      }
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param {Phaser.GameObjects.GameObject} object - [description]
     */

  }, {
    key: 'disable',
    value: function disable(object) {
      object.enable = false;
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.World#pause
     * @since 0.1.0
     *
     * @return {Physics.Tiled.World} This World object.
     */

  }, {
    key: 'pause',
    value: function pause() {
      this.isPaused = true;
      return this;
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.World#resume
     * @since 0.1.0
     *
     * @return {Physics.Tiled.World} This World object.
     */

  }, {
    key: 'resume',
    value: function resume() {
      this.isPaused = false;
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param collider - [description]
     *
     * @return
     */

  }, {
    key: 'addCollider',
    value: function addCollider(body1, body2) {
      var collider = new _Collider2.default(this, body1, body2);
      this.colliders.add(collider);
      return collider;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param
     *
     * @return
     */

  }, {
    key: 'removeCollider',
    value: function removeCollider(collider) {
      this.colliders.remove(collider);
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param
     * @param
     */

  }, {
    key: 'update',
    value: function update(time, delta) {
      var _this = this;

      if (this.isPaused || this.bodies.size === 0) {
        return;
      }

      this.delta = delta / 1000;

      this.bodies.each(function (body) {
        if (!body.enable) {
          return;
        }
        _this.tilemap.modify(body);
        body.update(_this.delta);
      });

      this.colliders.update().forEach(function (collider) {
        if (collider.active) collider.update();
      });
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     */

  }, {
    key: 'postUpdate',
    value: function postUpdate() {
      this.bodies.each(function (body) {
        if (body.enable) body.postUpdate();
      });
    }
  }]);

  return World;
}();

exports.default = World;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

/**
  * Returns the coordinates of the tile next to the one in input, in the direction specified.
  *
  * @method
  * @since 0.1.0
  *
  * @param tx - horizontal coordinate of the tile.
  * @param ty - vertical coordinate of the tile.
  * @param dir - direction of the desired tile.
  *
  * @return { x, y } - the coordinates of the tile adjacent in the specified direction or an empty
  *                    item in the case of a wrong direction parameter.
  */
function adjacent(tx, ty, dir) {
  switch (dir) {
    case _index.C.DOWN:
      return (0, _index.down)(tx, ty);
    case _index.C.LEFT:
      return (0, _index.left)(tx, ty);
    case _index.C.RIGHT:
      return (0, _index.right)(tx, ty);
    case _index.C.UP:
      return (0, _index.up)(tx, ty);
    case _index.C.DOWN_LEFT:
      return (0, _index.down)((0, _index.left)(tx, ty).tx, (0, _index.left)(tx, ty).ty);
    case _index.C.DOWN_RIGHT:
      return (0, _index.down)((0, _index.right)(tx, ty).tx, (0, _index.right)(tx, ty).ty);
    case _index.C.UP_LEFT:
      return (0, _index.up)((0, _index.left)(tx, ty).tx, (0, _index.left)(tx, ty).ty);
    case _index.C.UP_RIGHT:
      return (0, _index.up)((0, _index.right)(tx, ty).tx, (0, _index.right)(tx, ty).ty);
    default:
      return {};
  }
} /**
   * @author
   * @copyright
   * @license
   */

exports.default = adjacent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author
 * @copyright
 * @license
 */

/**
 * Utils consts.
 *
 * @ignore
 */
var C = {
  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  DOWN: 0,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  LEFT: 1,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  RIGHT: 2,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  UP: 3,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  DOWN_LEFT: 4,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  DOWN_RIGHT: 6,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  UP_LEFT: 7,

  /**
   * [description]
   *
   * @name
   * @readOnly
   * @type {number}
   * @since 0.1.0
   */
  UP_RIGHT: 8
};

exports.default = C;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

/**
  * Returns the normal direction in which the vector is pointing.
  *
  * @method
  * @since 0.1.0
  *
  * @param x - horizontal direction.
  * @param y - vertical direction.
  *
  * @return c - the 'compass' direction the vector is pointing.
  *
  */
function direction(x, y) {
  if (y > 0 && x === 0) {
    return _index.C.DOWN;
  } else if (x < 0 && y === 0) {
    return _index.C.LEFT;
  } else if (x > 0 && y === 0) {
    return _index.C.RIGHT;
  } else if (y < 0 && x === 0) {
    return _index.C.UP;
  } else if (x < 0 && y > 0) {
    return _index.C.DOWN_LEFT;
  } else if (x > 0 && y > 0) {
    return _index.C.DOWN_RIGHT;
  } else if (x < 0 && y < 0) {
    return _index.C.UP_LEFT;
  } else if (x > 0 && y < 0) {
    return _index.C.UP_RIGHT;
  }
  return -1;
} /**
   * @author
   * @copyright
   * @license
   */

exports.default = direction;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author
 * @copyright
 * @license
 */

/**
  * [description]
  *
  * @method
  * @since 0.1.0
  *
  * @param tx - [description]
  * @param ty - [description]
  *
  */
function down(tx, ty) {
  return {
    tx: tx,
    ty: ty + 1
  };
}

exports.default = down;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author
 * @copyright
 * @license
 */

/**
  * [description]
  *
  * @method
  * @since 0.1.0
  *
  * @param tx - [description]
  * @param ty - [description]
  *
  */
function left(tx, ty) {
  return {
    tx: tx - 1,
    ty: ty
  };
}

exports.default = left;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author
 * @copyright
 * @license
 */

/**
  * [description]
  *
  * @method
  * @since 0.1.0
  *
  * @param tx - [description]
  * @param ty - [description]
  *
  */
function right(tx, ty) {
  return {
    tx: tx + 1,
    ty: ty
  };
}

exports.default = right;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author
 * @copyright
 * @license
 */

/**
  * [description]
  *
  * @method
  * @since 0.1.0
  *
  * @param tx - [description]
  * @param ty - [description]
  *
  */
function up(tx, ty) {
  return {
    tx: tx,
    ty: ty - 1
  };
}

exports.default = up;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// modifiers


var _Collision = __webpack_require__(14);

var _Collision2 = _interopRequireDefault(_Collision);

var _Force = __webpack_require__(15);

var _Force2 = _interopRequireDefault(_Force);

var _Inertia = __webpack_require__(16);

var _Inertia2 = _interopRequireDefault(_Inertia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @classdesc
 * [description]
 *
 * @class Tilemap
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.World} world - [description]
 */
var Tilemap = function () {
  function Tilemap(world) {
    _classCallCheck(this, Tilemap);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.world = world;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.layers = new Phaser.Structs.Set();

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.modifiers = new Phaser.Structs.ProcessQueue();
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   *
   * @param modifier - [description]
   */


  _createClass(Tilemap, [{
    key: 'addModifier',
    value: function addModifier(modifier) {
      this.modifiers.add(modifier);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param
     *
     * @return
     */

  }, {
    key: 'removeModifier',
    value: function removeModifier(modifier) {
      this.modifiers.remove(modifier);
      return this;
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param body - [description]
     * @param layers - [description]
     */

  }, {
    key: 'addCollision',
    value: function addCollision(body, layers) {
      this.modifiers.add(new _Collision2.default(body, layers));
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param body - [description]
     * @param layers - [description]
     */

  }, {
    key: 'addForce',
    value: function addForce(body, layers) {
      this.modifiers.add(new _Force2.default(body, layers));
      this.modify(body);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param body - [description]
     * @param layers - [description]
     */

  }, {
    key: 'addInertia',
    value: function addInertia(body, layers) {
      this.modifiers.add(new _Inertia2.default(body, layers));
      this.modify(body);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param body - [description]
     */

  }, {
    key: 'modify',
    value: function modify(body) {
      // compute modifiers
      this.modifiers.update().forEach(function (modifier) {
        if (modifier.body === body) modifier.execute();
      });
    }
  }]);

  return Tilemap;
}();

exports.default = Tilemap;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {object} Tile
 *
 * @property {boolean} [inCollideDown] - [description]
 * @property {boolean} [inCollideLeft] - [description]
 * @property {boolean} [inCollideRight] - [description]
 * @property {boolean} [inCollideUp] - [description]
 * @property {boolean} [outCollideDown] - [description]
 * @property {boolean} [outCollideLeft] - [description]
 * @property {boolean} [outCollideRight] - [description]
 * @property {boolean} [outCollideUp] - [description]
 * @property {boolean} [collide] - [description]
 */

/**
 * @classdesc
 * [description]
 *
 * @class Collision
 * @extends
 * @memberOf Physics.Tiled.Modifiers
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body - [description]
 * @param {Phaser.Tiled.Layer} layers - [description]
 */
var Collision = function () {
  function Collision(body, layers) {
    _classCallCheck(this, Collision);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.body = body;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.layers = layers;
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   */


  _createClass(Collision, [{
    key: 'execute',
    value: function execute() {
      var tileFrom = { tx: this.body.tile.x, ty: this.body.tile.y };
      var tileTo = (0, _index.adjacent)(this.body.tile.x, this.body.tile.y, this.body.heading());

      for (var i = 0; i < this.layers.length; i++) {
        var tileFromProps = this.layers[i].propertiesOf(tileFrom.tx, tileFrom.ty);
        var tileToProps = this.layers[i].propertiesOf(tileTo.tx, tileTo.ty);

        if (tileFrom.ty === tileTo.ty - 1) {
          // move down
          if (tileFromProps.inCollideDown || tileToProps.outCollideUp || tileToProps.collide) {
            if (this.body.velocity.y > 0) {
              this.body.velocity.y = 0;
            }
            if (this.body.acceleration.y > 0) {
              this.body.acceleration.y = 0;
            }
          }
        } else if (tileFrom.ty === tileTo.ty + 1) {
          // move up
          if (tileFromProps.inCollideUp || tileToProps.outCollideDown || tileToProps.collide) {
            if (this.body.velocity.y < 0) {
              this.body.velocity.y = 0;
            }
            if (this.body.acceleration.y < 0) {
              this.body.acceleration.y = 0;
            }
          }
        }

        if (tileFrom.tx === tileTo.tx + 1) {
          // move left
          if (tileFromProps.inCollideLeft || tileToProps.outCollideRight || tileToProps.collide) {
            if (this.body.velocity.x < 0) {
              this.body.velocity.x = 0;
            }
            if (this.body.acceleration.x < 0) {
              this.body.acceleration.x = 0;
            }
          }
        } else if (tileFrom.tx === tileTo.tx - 1) {
          // move right
          if (tileFromProps.inCollideRight || tileToProps.outCollideLeft || tileToProps.collide) {
            if (this.body.velocity.x > 0) {
              this.body.velocity.x = 0;
            }
            if (this.body.acceleration.x > 0) {
              this.body.acceleration.x = 0;
            }
          }
        }
      }
    }
  }]);

  return Collision;
}();

exports.default = Collision;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {object} Tile
 *
 * @property {float} [forceX] - [description]
 * @property {float} [forceY] - [description]
 */

/**
 * @classdesc
 * [description]
 *
 * @class Force
 * @extends
 * @memberOf Physics.Tiled.Modifiers
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body - [description]
 * @param {Phaser.Tiled.Layer} layers - [description]
 */
var Force = function () {
  function Force(body, layers) {
    _classCallCheck(this, Force);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.body = body;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.layers = layers;
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   */


  _createClass(Force, [{
    key: 'execute',
    value: function execute() {
      if (this.body.isOnTile) {
        var tile = { tx: this.body.tile.x, ty: this.body.tile.y };
        var forceX = 0;
        var forceY = 0;

        this.layers.forEach(function (layer) {
          var props = layer.propertiesOf(tile.tx, tile.ty);
          if (props) {
            forceX += props.forceX ? props.forceX : 0;
            forceY += props.forceY ? props.forceY : 0;
          }
        });

        this.body.acceleration.x = forceX;
        this.body.acceleration.y = forceY;
      }
    }
  }]);

  return Force;
}();

exports.default = Force;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author
 * @copyright
 * @license
 */

/**
 * @typedef {object} Tile
 *
 * @property {float} [inertia] - [description]
 */

/**
 * @classdesc
 * [description]
 *
 * @class Inertia
 * @extends
 * @memberOf Physics.Tiled.Modifiers
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body - [description]
 * @param {Phaser.Tiled.Layer} layers - [description]
 */
var Inertia = function () {
  function Inertia(body, layers) {
    _classCallCheck(this, Inertia);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.body = body;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.layers = layers;
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   */


  _createClass(Inertia, [{
    key: "execute",
    value: function execute() {
      if (this.body.isOnTile) {
        for (var i = 0; i < this.layers.length; i++) {
          var tile = { tx: this.body.tile.x, ty: this.body.tile.y };
          var props = this.layers[i].propertiesOf(tile.tx, tile.ty);

          if (!props.inertia) {
            props.inertia = 0;
          }
          this.body.velocity.x = props.inertia * this.body.velocity.x;
          this.body.velocity.y = props.inertia * this.body.velocity.y;
          this.body.acceleration.x = props.inertia * this.body.acceleration.x;
          this.body.acceleration.y = props.inertia * this.body.acceleration.y;

          this.body.sliding = props.friction > 0;
        }
      }
    }
  }]);

  return Inertia;
}();

exports.default = Inertia;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _index = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collider = function () {
  function Collider(world, body1, body2) {
    _classCallCheck(this, Collider);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.world = world;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.body1 = body1;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.body2 = body2;

    /**
     * [description]
     *
     * @name
     * @type {boolean}
     * @default true
     * @since 0.1.0
     */
    this.active = true;
  }

  _createClass(Collider, [{
    key: 'update',
    value: function update() {
      if (this.body1.deltaX() !== 0) {
        if ((0, _index.intersects)(this.body1, this.body2)) {
          (0, _index.separateX)(this.body1, this.body2, false, 0);

          //  Are they still intersecting? Let's do the other axis then
          if ((0, _index.intersects)(this.body1, this.body2)) {
            (0, _index.separateY)(this.body1, this.body2, false, 0);
          }
        }
      } else if ((0, _index.intersects)(this.body1, this.body2)) {
        (0, _index.separateY)(this.body1, this.body2, false, 0);

        //  Are they still intersecting? Let's do the other axis then
        if ((0, _index.intersects)(this.body1, this.body2)) {
          (0, _index.separateX)(this.body1, this.body2, false, 0);
        }
      }
    }

    /**
     * [description]
     *
     * @method Physics.Tiled.Collider#destroy
     * @since 0.1.0
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.world.removeCollider(this);

      this.active = false;

      this.world = null;

      this.object1 = null;
      this.object2 = null;
    }
  }]);

  return Collider;
}();

exports.default = Collider;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOverlapX;
/**
 * @author
 * @copyright
 * @license
 */

/**
 * [description]
 *
 * @function Physics.Tiled.getOverlapX
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body1 - [description]
 * @param {Physics.Tiled.Body} body2 - [description]
 * @param {boolean} overlapOnly - [description]
 * @param {number} bias - [description]
 *
 * @return {number} [description]
 */
function getOverlapX(body1, body2, overlapOnly, bias) {
  var overlap = 0;
  var maxOverlap = body1.deltaAbsX() + body2.deltaAbsX() + bias;

  if (body1.deltaX() === 0 && body2.deltaX() === 0) {
    //  They overlap but neither of them are moving
  } else if (body1.deltaX() > body2.deltaX()) {
    //  Body1 is moving right and / or Body2 is moving left
    overlap = body1.right - body2.x;

    if (overlap > maxOverlap && !overlapOnly) {
      overlap = 0;
    }
  } else if (body1.deltaX() < body2.deltaX()) {
    //  Body1 is moving left and/or Body2 is moving right
    overlap = body1.x - body2.width - body2.x;

    if (-overlap > maxOverlap && !overlapOnly) {
      overlap = 0;
    }
  }

  return overlap;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOverlapY;
/**
 * @author
 * @copyright
 * @license
 */

/**
 * [description]
 *
 * @function Physics.Tiled.getOverlapY
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body1 - [description]
 * @param {Physics.Tiled.Body} body2 - [description]
 * @param {boolean} overlapOnly - [description]
 * @param {number} bias - [description]
 *
 * @return {number} [description]
 */
function getOverlapY(body1, body2, overlapOnly, bias) {
  var overlap = 0;
  var maxOverlap = body1.deltaAbsY() + body2.deltaAbsY() + bias;

  if (body1.deltaY() === 0 && body2.deltaY() === 0) {
    //  They overlap but neither of them are moving
  } else if (body1.deltaY() > body2.deltaY()) {
    //  Body1 is moving down and/or Body2 is moving up
    overlap = body1.bottom - body2.y;

    if (overlap > maxOverlap && !overlapOnly) {
      overlap = 0;
    }
  } else if (body1.deltaY() < body2.deltaY()) {
    //  Body1 is moving up and/or Body2 is moving down
    overlap = body1.y - body2.bottom;

    if (-overlap > maxOverlap && !overlapOnly) {
      overlap = 0;
    }
  }

  return overlap;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = separateX;

var _index = __webpack_require__(1);

/**
 * [description]
 *
 * @function Physics.Tiled.separateX
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body1 - [description]
 * @param {Physics.Tiled.Body} body2 - [description]
 * @param {boolean} overlapOnly - [description]
 * @param {number} bias - [description]
 *
 * @return {boolean} [description]
 */
function separateX(body1, body2, overlapOnly, bias) {
  var overlap = (0, _index.getOverlapX)(body1, body2, overlapOnly, bias);

  //  Can't separate two immovable bodies
  if (overlapOnly || overlap === 0 || body1.immovable && body2.immovable) {
    //  return true if there was some overlap, otherwise false
    return overlap !== 0;
  }

  //  Adjust their positions and velocities accordingly (if there was any overlap)
  var v1 = body1.velocity.x;
  var v2 = body2.velocity.x;

  if (!body1.immovable && !body2.immovable) {
    overlap *= 0.5;

    body1.x -= overlap;
    body2.x += overlap;

    var nv1 = Math.sqrt(v2 * v2 * body2.mass / body1.mass) * (v2 > 0 ? 1 : -1);
    var nv2 = Math.sqrt(v1 * v1 * body1.mass / body2.mass) * (v1 > 0 ? 1 : -1);
    var avg = (nv1 + nv2) * 0.5;

    nv1 -= avg;
    nv2 -= avg;

    body1.velocity.x = avg + nv1 * body1.bounce.x;
    body2.velocity.x = avg + nv2 * body2.bounce.x;
  } else if (!body1.immovable) {
    body1.x -= overlap;
    body1.velocity.x = v2 - v1 * body1.bounce.x;

    //  This is special case code that handles things like vertically moving platforms you can ride
    if (body2.moves) {
      body1.y += (body2.y - body2.prev.y) * body2.friction.y;
    }
  } else {
    body2.x += overlap;
    body2.velocity.x = v1 - v2 * body2.bounce.x;

    //  This is special case code that handles things like vertically moving platforms you can ride
    if (body1.moves) {
      body2.y += (body1.y - body1.prev.y) * body1.friction.y;
    }
  }

  //  If we got this far then there WAS overlap, and separation is complete, so return true
  return true;
} /**
   * @author
   * @copyright
   * @license
   */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = separateY;

var _index = __webpack_require__(1);

/**
 * [description]
 *
 * @function Physics.Tiled.separateY
 * @since 0.1.0
 *
 * @param {Physics.Tiled.Body} body1 - [description]
 * @param {Physics.Tiled.Body} body2 - [description]
 * @param {boolean} overlapOnly - [description]
 * @param {number} bias - [description]
 *
 * @return {boolean} [description]
 */
function separateY(body1, body2, overlapOnly, bias) {
  var overlap = (0, _index.getOverlapY)(body1, body2, overlapOnly, bias);

  //  Can't separate two immovable bodies
  if (overlapOnly || overlap === 0 || body1.immovable && body2.immovable) {
    //  return true if there was some overlap, otherwise false
    return overlap !== 0;
  }

  //  Adjust their positions and velocities accordingly (if there was any overlap)
  var v1 = body1.velocity.y;
  var v2 = body2.velocity.y;

  if (!body1.immovable && !body2.immovable) {
    overlap *= 0.5;

    body1.y -= overlap;
    body2.y += overlap;

    var nv1 = Math.sqrt(v2 * v2 * body2.mass / body1.mass) * (v2 > 0 ? 1 : -1);
    var nv2 = Math.sqrt(v1 * v1 * body1.mass / body2.mass) * (v1 > 0 ? 1 : -1);
    var avg = (nv1 + nv2) * 0.5;

    nv1 -= avg;
    nv2 -= avg;

    body1.velocity.y = avg + nv1 * body1.bounce.y;
    body2.velocity.y = avg + nv2 * body2.bounce.y;
  } else if (!body1.immovable) {
    body1.y -= overlap;
    body1.velocity.y = v2 - v1 * body1.bounce.y;

    //  This is special case code that handles things like horizontal moving platforms you can ride
    if (body2.moves) {
      body1.x += (body2.x - body2.prev.x) * body2.friction.x;
    }
  } else {
    body2.y += overlap;
    body2.velocity.y = v1 - v2 * body2.bounce.y;

    //  This is special case code that handles things like horizontal moving platforms you can ride
    if (body1.moves) {
      body2.x += (body1.x - body1.prev.x) * body1.friction.x;
    }
  }

  //  If we got this far then there WAS overlap, and separation is complete, so return true
  return true;
} /**
   * @author
   * @copyright
   * @license
   */

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersects;
/**
 * @author
 * @copyright
 * @license
 */

/**
 * [description]
 *
 * @function Physics.Tiled.intersects
 * @since 3.0.0
 *
 * @param {Physics.Tiled.Body} body1 - [description]
 * @param {Physics.Tiled.Body} body2 - [description]
 *
 * @return {boolean} [description]
 */
function intersects(body1, body2) {
  //  Rect vs. Rect
  if (body1.right <= body2.position.x) {
    return false;
  }

  if (body1.bottom <= body2.position.y) {
    return false;
  }

  if (body1.position.x >= body2.right) {
    return false;
  }

  if (body1.position.y >= body2.bottom) {
    return false;
  }

  return true;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Layer = __webpack_require__(3);

var _Layer2 = _interopRequireDefault(_Layer);

var _Body = __webpack_require__(2);

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @classdesc
 * [description]
 *
 * @class Factory
 * @extends
 * @memberOf Physics.Tiled
 * @constructor
 * @since 0.1.0
 *
 * @param {Physics.Tiled.World} world - [description]
 */
var Factory = function () {
  function Factory(world) {
    _classCallCheck(this, Factory);

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.world = world;

    /**
     * [description]
     *
     * @name
     * @type
     * @since 0.1.0
     */
    this.tilemap = world.tilemap;
  }

  /**
   * [description]
   *
   * @method
   * @since 0.1.0
   *
   * @param modifier - [description]
   */


  _createClass(Factory, [{
    key: 'modifier',
    value: function modifier(_modifier) {
      this.tilemap.addModifier(_modifier);
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param object1 - [description]
     * @param object2 - [description]
     */

  }, {
    key: 'collider',
    value: function collider(object1, object2) {
      var object1isArray = Array.isArray(object1);
      var object2isArray = Array.isArray(object2);

      if (!object1isArray && !object2isArray) {
        if (object1 instanceof _Body2.default) {
          if (object2 instanceof _Layer2.default) {
            this.tilemap.addCollision(object1, [object2]);
          } else if (object2 instanceof _Body2.default) {
            this.world.addCollider(object1, object2);
          }
        }
      } else if (!object1isArray && object2isArray) {
        if (object2[0] instanceof _Layer2.default) {
          this.tilemap.addCollision(object1, object2);
        } else {
          for (var i = 0; i < object2.length; i++) {
            if (object1 instanceof _Body2.default && object2[i] instanceof _Body2.default) {
              this.world.addCollider(object1, object2[i]);
            }
          }
        }
      } else if (object1isArray && !object2isArray) {
        if (object2[0] instanceof _Layer2.default) {
          for (var _i = 0; _i < object1.length; _i++) {
            this.tilemap.addCollision(object1[_i], [object2]);
          }
        } else {
          for (var _i2 = 0; _i2 < object1.length; _i2++) {
            this.world.addCollider(object1[_i2], object2);
          }
        }
      } else {
        for (var _i3 = 0; _i3 < object1.length; _i3++) {
          if (object2[0] instanceof _Layer2.default) {
            for (var _i4 = 0; _i4 < object1.length; _i4++) {
              this.tilemap.addCollision(object1[_i4], object2);
            }
          } else {
            for (var j = 0; j < object2.length; j++) {
              if (object1[_i3] instanceof _Body2.default && object2[j] instanceof _Body2.default) {
                this.world.addCollider(object1[_i3], object2[j]);
              }
            }
          }
        }
      }
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param object1 - [description]
     * @param object2 - [description]
     */

  }, {
    key: 'force',
    value: function force(object1, object2) {
      var object1isArray = Array.isArray(object1);
      var object2isArray = Array.isArray(object2);

      if (!object1isArray && !object2isArray) {
        if (object1 instanceof _Body2.default && object2 instanceof _Layer2.default) {
          this.tilemap.addForce(object1, [object2]);
        }
      } else if (!object1isArray && object2isArray) {
        if (object1 instanceof _Body2.default) {
          this.tilemap.addForce(object1, object2);
        }
      } else if (object1isArray && !object2isArray) {
        for (var i = 0; i < object1.length; i++) {
          if (object1[i] instanceof _Body2.default && object2 instanceof _Layer2.default) {
            this.tilemap.addForce(object1[i], [object2]);
          }
        }
      } else {
        for (var _i5 = 0; _i5 < object1.length; _i5++) {
          if (object1[_i5] instanceof _Body2.default) {
            this.tilemap.addForce(object1[_i5], object2);
          }
        }
      }
    }

    /**
     * [description]
     *
     * @method
     * @since 0.1.0
     *
     * @param object1 - [description]
     * @param object2 - [description]
     */

  }, {
    key: 'inertia',
    value: function inertia(object1, object2) {
      var object1isArray = Array.isArray(object1);
      var object2isArray = Array.isArray(object2);

      if (!object1isArray && !object2isArray) {
        if (object1 instanceof _Body2.default && object2 instanceof _Layer2.default) {
          this.tilemap.addInertia(object1, [object2]);
        }
      } else if (!object1isArray && object2isArray) {
        if (object1 instanceof _Body2.default) {
          this.tilemap.addInertia(object1, object2);
        }
      } else if (object1isArray && !object2isArray) {
        for (var i = 0; i < object1.length; i++) {
          if (object1[i] instanceof _Body2.default) {
            this.tilemap.addInertia(object1[i], [object2]);
          }
        }
      } else {
        for (var _i6 = 0; _i6 < object1.length; _i6++) {
          if (object1[_i6] instanceof _Body2.default) {
            this.tilemap.addInertia(object1[_i6], object2);
          }
        }
      }
    }
  }]);

  return Factory;
}();

exports.default = Factory;

/***/ })
/******/ ]);
});
export default function makeAnimations(scene) {  
  /** 
   * slime - movement
   */
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
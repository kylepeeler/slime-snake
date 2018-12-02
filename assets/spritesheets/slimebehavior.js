preload(){
    // Load slime spritesheet
		this.load.spritesheet(
		  'slime',
		  'assets/slime.png',
		  { frameWidth: 16, frameHeight: 16, endFrame: 15 },
		);
}

create(){
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

    

    makeAnimations(this)
}
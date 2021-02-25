const game = new Phaser.Game(1000, 640, Phaser.CANVAS, 'game', {
  preload,
  create,
  update,
});

function create() {
  var x  = 0;
  for (var clip = 1; clip < 7; clip++) {
    var item = game.add.sprite(x, y, 'sheet'+clip);
    if(clip==3) {y+=item.height;x=0;}
    var anim = item.animations.add('clip'+clip, frames, 10, true);
    //anim.play();
    anims.push(item);
    // frame+=framecount[clip];
     x+=item.width;
 }
}

function update() {}

const game = new Phaser.Game(1200,752, Phaser.CANVAS, 'game', {
  preload,
  create,
});

function create() {
  var x  = 0;
  for (var clip = 1; clip < 6; clip++) {
    var item = game.add.sprite(x, y, 'sheet'+clip);
    item.animations.add('run');
    item.animations.play('run', 15, true);
    if(clip==3) {y+=item.height;x=0;}
    else
    x+=item.width;
 }
}


const game = new Phaser.Game(1000, 640, Phaser.CANVAS, 'game', {
  preload,
  create,
});

function create() {
  var x  = 0;
  for (var clip = 1; clip < 7; clip++) {
    var item = game.add.sprite(x, y, 'sheet'+clip);
    item.animations.add('run');
    item.animations.play('run', 15, true);
    if(clip==3) {y+=item.height;x=0;}
    x+=item.width;
 }
}


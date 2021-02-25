function preload() {
this.load.path = '../assets/images/';
for (let index = 1; index < 7; index++) {
  console.log('sheet'+index+'.png');
  this.load.spritesheet('sheet'+index,'sheet'+index+'.png',365,360);
}
}

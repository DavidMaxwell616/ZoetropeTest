function preload() {
this.load.path = '../assets/images/';

for (let index = 1; index <6; index++) {
  this.load.spritesheet('sheet'+index,'sheet'+index+'.png',400,376);
}
}

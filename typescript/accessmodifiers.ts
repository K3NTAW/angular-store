
class Pointmod {

  constructor(private _x: number, private _y: number){
  }

  draw() {
    console.log('X: ' + this.x + 'Y: ' +  this.y);
  }

  get x() {
    return this.x;
  }

  set x(value) {
    if (value < 0)
    throw new Error('value cannot be assigned');

    this.x = value
  }
  
  get y() {
    return this.y;
  }

  set y(value) {
    if (value < 0)
    throw new Error('value cannot be assigned');

    this.y = value
  }
}
let pointmod = new Point();
let x = point.x
point.draw()
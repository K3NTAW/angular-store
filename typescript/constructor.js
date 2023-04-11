var Pointcon = /** @class */ (function () {
    function Pointcon(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointcon.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Pointcon.prototype.getDistance = function (another) {
    };
    return Pointcon;
}());
var point = new Point();
point.draw();

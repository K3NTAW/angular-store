var Pointmod = /** @class */ (function () {
    function Pointmod(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Pointmod.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Object.defineProperty(Pointmod.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be assigned');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pointmod.prototype, "y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be assigned');
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pointmod;
}());
var pointmod = new Point();
var x = point.x;
point.draw();

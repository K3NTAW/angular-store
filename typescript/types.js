var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [true, 1, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var ColorPurple = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Green;

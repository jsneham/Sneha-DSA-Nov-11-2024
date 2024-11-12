var findColor = function (array) {
    array.forEach(function (color) {
        if (color === 'white') {
            console.log('found it');
        }
    });
};
var findColor2 = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var color = array_1[_i];
        if (color === 'white') {
            console.log('found it');
        }
    }
};
var colorArray = ['red', 'pink', 'white'];
findColor(colorArray);
findColor2(colorArray);

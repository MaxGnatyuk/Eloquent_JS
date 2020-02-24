var size = 8;
var stroke = '';

for (var count = 1; count <= size; ++count) {
    if (count % 2 != 0) {
        for (var i = 1; i <= size; ++i) {
            if (i % 2 != 0) {
                stroke += ' ';
            } else {
                stroke += '#';
            }
        }
        console.log(stroke);
        var stroke = '';
    } if (count % 2 == 0) {
        for (var j = 1; j <= size; ++j) {
            if (j % 2 != 0) {
                stroke += '#';
            } else {
                stroke += ' ';
            }
        }
        console.log(stroke);
        var stroke = '';
    }
}
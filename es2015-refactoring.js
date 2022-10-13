// Ioana Alex Mititean
// 10/13/22
// Exercise 10.3.6: Arrow Functions

// ES5 Map Callback
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
    }

// ES2015 Arrow Functions Shorthand
const arrowDouble = (arr) => arr.map((val) => val * 2);

// ES5 squareAndFindEvens
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

// ES2015 squareAndFindEvens
const arrowSquareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => num ** 2);
    return squares.filter((square) => square % 2 === 0);
}

/*

The file for the hasmap , arrays and others
*/
var array_testing = /** @class */ (function () {
    function array_testing() {
    }
    array_testing.prototype.array_manipulation = function (nums) {
        nums.sort(function (a, b) { return a - b; });
        return nums;
    };
    ;
    return array_testing;
}());
var array_test = new array_testing();
console.log(array_test.array_manipulation([1, 2, 9, 0, 6, 8]));

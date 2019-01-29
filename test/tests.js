const test = QUnit.test;

function fizzBuzz(number) {
    return number;
}

test('returns fizz if number is divisible by 3', function(assert) {
    const inputNumber = 3;
    const expected = 'Fizz';
    const result = fizzBuzz(inputNumber);
    assert.equal(result, expected);
});

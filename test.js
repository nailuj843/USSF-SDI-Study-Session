// console.log('hello world')

// variable types

// string
var string = 'this is a string'
var string = "this is a string"
// number
var number = 5
// array
var arrayOfNumbers = [1, 2, 3, 4, 5]
var arrayOfStrings = ['one', 'two', 'three', 'four', 'five']
var arrayOfArrays = [['one', 2], [3, 'four']]
var arrayOfObjects = [{ number: 1, name: 'julian' }, { number: 4, name: 'ian' }]
//var arrayOfComplexObjects = [{ array: [1, 2, 3], name: 'julian' }, { array: [4, 5, 6], name: 'ian' }]
var newObject = { key: 'value', key2: 3 }



function generateOutput(object) {
    // console.log(`the user was ${object.name} and their password is ${object.password} `)
    console.log('this user was ' + object.name + ' and their password is ' + object.password)
}

// generateOutput(object)

var arrayOfComplexObjects = [{ array: [1, 2, 3], name: 'julian' },
{ array: [4, 5, 6], name: 'ian' }]

for (var x = 0; x < arrayOfComplexObjects.length; x++) {
    // console.log(arrayOfComplexObjects[x].name + '   ' + arrayOfComplexObjects[x].array[1])
}

string.includes('lace')



var object = { name: 'julian', password: 'asfd' }
// console.log(Object.keys(object))

var somevariable = 20

if (somevariable === 20) {
    // console.log('my variable is equal to 20')
}

let newArray = [1, 2, 3]
let otherArray = newArray
new newArray[2] = 4
// [1,2,4]

// boolean operators
// || OR
// && AND
// < LESS-THAN
// > GREATER-THAN
// === STRICTLY-EQUALS
// !== NOT-STRICTLY-EQUALS
// ! NOT



console.log('this is the first line \n this is the second line')


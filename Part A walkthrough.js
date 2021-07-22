// Welcome to the fashion industry!

// You've been asked to write some inventory-management functions for Shoe Depot Inc. 
// You'll be working with their catalog, an inventory of items from various high-fashion designers.

// Here are the fashion inventory facts:

// The inventory is stored in an array that always resembles the following example
// Each designer has a lineup of shoes
// Each shoe has a name and a price
// It looks like this:

var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];
// Write a function that will take in this currentInventory array as its argument.
// Your function should access all the shoes across each designer and return them 
// out in a "flat list" in the format specified below. Note that a "flat list" 
// refers to a string where each new line is separated by the newline symbol. 
// Also note that a "flat list" does not end with a newline symbol.

// output should look like this
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100

var output = `${currentInventory[0].name}, ${currentInventory[0].shoes[0].name}, ${currentInventory[0].shoes[0].price}`

//console.log(output)

function renderInventory(inventory) {
    const output = ''
    var designer = ''

    //loop over the designers
    for (var x = 0; x < inventory.length; x++) {
        designer = inventory[x].name

        // loop over the shoes
        for (var y = 0; y < inventory[x].shoes.length; y++) {
            // var shoe = inventory[x].shoes[y].name
            // console.log(shoe)

            output += designer + ', '

            output += inventory[x].shoes[y].name + ', '
            output += inventory[x].shoes[y].price

            output += '\n'
        }
    }


    // take off that last '\n'
    output = output.slice(0, output.length - 1)

    return output
}

console.log(output)
console.log(renderInventory(currentInventory))

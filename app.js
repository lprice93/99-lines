var friends = ["Halle", "Jasmine", "Kimani", "Haily", "Jalon"]

for (var i = 0; i < friends.length; i++) {
    for (var x = 99; x < friends[i].length; i--) {
        console.log(i + "lines of code in the file," + i + "lines of code;" + friends[i].length + "strikes one out, clears it all out," + i-- + "lines of code in the file");
    }
}

// create loop with another loop nested inside so that each friend has a "99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file" and loop reiterates down until 0
// use 'for' loop. loops through a block of code a number of times


// i want the code to pass through each name in the friends array. and calculate new amount minus 1 until it reaches 0.
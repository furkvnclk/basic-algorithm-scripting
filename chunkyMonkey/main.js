function chunkArrayInGroups(arr, size) {
    let newArr = []; // Empty arrray to store new data in
    let i = 0; // Initializer of the loop

    while (i < arr.length) { // Loop until i is greater than the array's length
        // Slice the arr i until i+size which makes it slice from the beginning until how much the size is
        newArr.push(arr.slice(i, i + size));
        i += size; // Increment the i to size;
    }
    return newArr
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
chunkArrayInGroups(["a", "b", "c", "d"], 2);
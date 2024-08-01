// Optional Exercise: Javascript Logic
// What Is The Challenge?
// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer.
// First, start off by reading this article

// Question 1:
// Clean the room function:
// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function answer(input) {
    const nums = input.filter(item => typeof item === 'number');
    const strngs = input.filter(item => typeof item === 'string');
    
    function organize(arr) {
        if (arr.length === 0) return [];
        
        arr.sort((a, b) => a - b);
        
        let result = [];
        let Group = [arr[0]];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                Group.push(arr[i]);
            } else {
                result.push(Group);
                Group = [arr[i]];
            }
        }
        
        result.push(Group);
        return result;
    }
    
    const xNums = organize(nums);
    const xStrngs = organize(strngs.map(str => parseInt(str)).filter(num => !isNaN(num))).map(group => group.map(num => num.toString()));
    
    return [...xNums, ...xStrngs];
}

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, '1', '2', '3', '2'];
console.log(answer(input));



// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

function findPair(arr, targetnum) {
    const seen = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = targetnum - num;

        if (seen[complement] !== undefined) {
            return [complement, num];
        }

        seen[num] = true;
    }

    return null;
}

console.log(findPair([1, 2, 3], 4)); 
console.log(findPair([10, 15, 3, 7], 17)); 
console.log(findPair([5, 1, 2, 7, 3], 10));



// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function colors(color) {
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');

        if (hex.length === 4) {
            hex = hex.split('').map(function (hex) {
                return hex + hex;
            }).join('');
        }

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function rgbToHex(rgb) {
        let result = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!result) {
            throw new Error('not rgb');
        }

        let r = parseInt(result[1], 10).toString(16).padStart(2, '0');
        let g = parseInt(result[2], 10).toString(16).padStart(2, '0');
        let b = parseInt(result[3], 10).toString(16).padStart(2, '0');

        return `#${r}${g}${b}`;
    }

    if (color.startsWith('#')) {
        return hexToRgb(color);
    } else if (color.startsWith('rgb')) {
        return rgbToHex(color);
    } else {
        throw new Error('Wrong hex/rgb');
    }
}

console.log(colors('#ff5733')); 
console.log(colors('rgb(255, 87, 51)')); 

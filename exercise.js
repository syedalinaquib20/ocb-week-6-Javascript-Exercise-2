const marks = [80, 99, 57, 40, 88, 39]

// Calculate the average
let sum = 0;
marks.forEach((number) => {
    sum = sum + number;
})
console.log("Total: ", sum);
console.log("Number: ", marks.length);
console.log("Average: ", (sum/marks.length).toFixed(2));

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------");

// Sort the marks in descending order
console.log(marks);
marks.sort((a,b) => b-a);
console.log("Sorted: ", marks);
console.log("Highest marks: ", marks[0]);

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------");

// A = 80 --> 100
// B = 70 --> 79
// C = 40 --> 69
// F = less than 40
// Get a grade for every marks
// 1.
console.log("Marks: ", marks);
const grade = marks.map((number) => {
    if(number >= 80) {
        return 'A'
    } else if(number >=70 && number<=79) {
        return 'B'
    } else if(number >=40 && number<=69) {
        return 'C'
    } else {
        return 'F'
    }  
}); 
console.log("Grade: ", grade);
console.log("----------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------");

// 2.
let grade2 = [];
marks.forEach(number => {
    switch (true) {
        case number >= 80:
        grade2.push('A')
        break

        case number >= 70 && number <= 79: 
        grade2.push('B')
        break

        case number >=40 && number <= 69: 
        grade2.push('C')
        break

        default: 
        grade2.push('F')
        break

    }
});
console.log("Grade: ", grade2);

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------------------");

// Genrate a random password
const words ='abcdefghijklmnopqrstuvwxyz'
const number = '01234567890'
const symbol = '~!@#$%^&*()_+'

const combinedCharacter = words + number + symbol;
console.log("Combined Password: ", combinedCharacter);
console.log("Total characters: ", combinedCharacter.length);

function randomChar(combinedCharacter) {
    const randomIndex = Math.floor(Math.random() * combinedCharacter.length);
    return combinedCharacter[randomIndex];
}

function passwordGenerator(length, includeNumber=true, includeSymbol=true) {
    let combinedCharacter = words;
    if (includeNumber) {
        combinedCharacter = combinedCharacter + number;
    }

    if (includeSymbol) {
        combinedCharacter = combinedCharacter + symbol;
    }

    let password = ''; 
    for (let index = 0; index < length; index++) {
        password = password + randomChar(combinedCharacter);
    }

    return password; 
}

console.log("Random password: ", passwordGenerator(10, true, true));


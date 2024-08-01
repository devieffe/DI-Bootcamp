// Stars
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:


function displayWordsInFrame() {
    const userInput = "Hello world\nin a\nframe";
    const words = userInput.split("\n").map(word => word.trim());
    const maxLength = Math.max(...words.map(word => word.length));
    const topBottomBorder = "*".repeat(maxLength + 4);
    console.log(topBottomBorder);

    words.forEach(word => {
        const padding = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${padding} *`);
    });
    console.log(topBottomBorder);
}

displayWordsInFrame();

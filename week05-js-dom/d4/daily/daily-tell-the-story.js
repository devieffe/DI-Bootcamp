// // tell the story
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
// In this exercise you work with the HTML code presented below.
// Follow these steps :
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Challenge: Mad Libs</title>
//  </head>
//  <body>
//     <h1>Mad Libs</h1>
//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button">Lib it!</button>
//     </form>
//     <p>Generated story: 
//     <span id="story"></span>
//     </p>
//     <script src="..."></script>
//  </body>
// </html>


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('libform');
    const storyElement = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');

    const stories = [
        'Someday, a <adjective> <noun> named <person> visited <place> to <verb>.',
        'In a <place> far away, <person> decided to <verb> with a <adjective> <noun>.',
        'On a glorois day, <person> and their <adjective> <noun> went to <place> to <verb>.',
    ];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (!noun || !adjective || !person || !verb || !place) {
            alert('All fields are required.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * stories.length);
        let story = stories[randomIndex];
        story = story.replace('<noun>', noun)
                     .replace('<adjective>', adjective)
                     .replace('<person>', person)
                     .replace('<verb>', verb)
                     .replace('<place>', place);

        storyElement.textContent = story;
    });

    shuffleButton.addEventListener('click', function () {
        const currentStory = storyElement.textContent;

        let newStory = currentStory;
        while (newStory === currentStory) {
            const randomIndex = Math.floor(Math.random() * stories.length);
            newStory = stories[randomIndex]
                        .replace('<noun>', document.getElementById('noun').value.trim())
                        .replace('<adjective>', document.getElementById('adjective').value.trim())
                        .replace('<person>', document.getElementById('person').value.trim())
                        .replace('<verb>', document.getElementById('verb').value.trim())
                        .replace('<place>', document.getElementById('place').value.trim());
        }

        storyElement.textContent = newStory;
    });
});

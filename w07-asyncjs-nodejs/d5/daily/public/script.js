document.addEventListener('DOMContentLoaded', () => {
    const emojiElement = document.getElementById('emoji');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    const correctNameInput = document.getElementById('correctName');
    const guessForm = document.getElementById('guessForm');
  
    async function loadGame() {
      try {
        const response = await fetch('/');
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        emojiElement.textContent = data.emoji;
        optionsElement.innerHTML = data.options.map(option => `<button type="button" class="option">${option}</button>`).join('');
        correctNameInput.value = data.options[0]; 
      } catch (error) {
        console.error('Error loading game data:', error);
        feedbackElement.textContent = 'Failed to load game data.';
      }
    }
  
    function handleOptionClick(event) {
      if (event.target.classList.contains('option')) {
        guessForm.elements.guess.value = event.target.textContent;
        guessForm.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    }
  
    guessForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(guessForm);
      try {
        const response = await fetch('/guess', {
          method: 'POST',
          body: JSON.stringify({
            guess: formData.get('guess'),
            correctName: correctNameInput.value
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('Network response was not ok.');
        const result = await response.json();
        feedbackElement.textContent = result.message;
        scoreElement.textContent = `Score: ${result.score}`;
        loadGame();
      } catch (error) {
        console.error('Error submitting guess:', error);
        feedbackElement.textContent = 'Failed to submit guess.';
      }
    });
  
    optionsElement.addEventListener('click', handleOptionClick);
  
    loadGame();
  });
  
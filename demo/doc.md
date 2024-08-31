# Mind Sparks Documentation

## Overview

**Mind Sparks** is an interactive quiz platform designed to engage users with different quiz topics. The website offers a clean and modern user interface that is both responsive and visually appealing. This documentation provides a detailed overview of the structure, styles, and scripts used in the project.

## Structure

### HTML Structure

- **Head Section**: 
  - Includes meta tags for character encoding and viewport settings.
  - The title of the webpage is set to "Mind Sparks."
  - Links to external stylesheets, including custom CSS (`index.css`) and Bootstrap for responsive design.

- **Body Section**:
  - **Main Container**: Uses a full-width container (`container-fluid`) to center content vertically and horizontally.
  - **Title and Topic Selection**: Displays the main title "Mind Sparks" and offers three buttons for different quiz topics: Spaces, Inventions & Inventors, and Programming.
  - **Modals**: Three modals are defined, one for each quiz topic. Each modal includes a header, a body with a brief description, and a footer with a link to start the quiz.
  - **Audio Element**: An audio element is included to play a click sound when any button is clicked.
  - **Scripts**: External JavaScript libraries (Bootstrap) are linked, and a custom script is used to handle the click sound.

### Modal Dialogs
- **Spaces Modal**: 
  - Title: "Spaces Quiz"
  - Description: Brief introduction to the space-related quiz.
  - Footer: Button linking to `space.html` to start the quiz.

- **Inventions Modal**:
  - Title: "Inventions & Inventors Quiz"
  - Description: Brief introduction to the quiz on famous inventions and inventors.
  - Footer: Button linking to `invention.html` to start the quiz.

- **Programming Modal**:
  - Title: "Programming Quiz"
  - Description: Brief introduction to the programming quiz.
  - Footer: Button linking to `pro.html` to start the quiz.

## Styles

### General Styles
- **Body and HTML**: 
  - The page has a light gray background.
  - Font family is set to 'Robot' for consistent styling.

- **Main Container**:
  - A full-width container with a background image that covers the entire area.
  - The background image has a subtle animation effect that moves it continuously.
  - Content is centered both vertically and horizontally.

### Inner Content Box
- **Box Style**:
  - Translucent white background with rounded corners.
  - Text is centered, and the box includes padding for a spacious feel.
  - The box has a subtle shadow for depth and a fade-in animation effect.

### Title Styles
- **Main Title**:
  - Semi-transparent dark blue background with white text.
  - The title is bold, large, and has rounded corners.
  - A hover effect slightly enlarges the title and changes the background color.

### Button Styles
- **Custom Buttons**:
  - Translucent dark background with white text.
  - Buttons are styled with padding, rounded corners, and a subtle shadow.
  - Hover effects slightly enlarge the buttons and deepen the shadow.

### Modal Styles
- **Modal Content**:
  - Dark background with white text and rounded corners.
  - Modal content is animated to slide in from the bottom.

### Responsive Design
- **Tablet Adjustments**:
  - Padding and font sizes are reduced for smaller screens.
  - Buttons and titles adjust in size to maintain readability.

- **Mobile Adjustments**:
  - Further reduction in padding and font sizes for the smallest screens.
  - Responsive design ensures that the content remains accessible and visually appealing on all devices.

## Scripts

### Audio Feedback
- **Click Sound**:
  - An audio element is used to provide feedback when any button is clicked.
  - The script resets the audio playback to the beginning before playing, ensuring the sound is consistent with each click.

### Event Listeners
- **Button Click Events**:
  - Event listeners are added to all buttons to trigger the click sound when clicked, enhancing user interaction.



## Variables

- **questions**: An array of question objects with possible answers and the correct answer.
- **maxQuestions**: The total number of questions in the quiz.
- **timerDuration**: Time limit (in seconds) for each question.
- **currentQuestionIndex**: Tracks the index of the current question.
- **score**: Stores the user's score.
- **questionCounter**: Counts the number of questions asked.
- **availableQuestions**: List of questions that haven't been asked yet.
- **acceptingAnswers**: Boolean to control answer selection.
- **timeLeft**: Tracks the remaining time for the current question.

## Functions

### `startQuiz()`
- Initializes the quiz, hides the start screen, displays the quiz container, and begins with the first question.

### `getNewQuestion()`
- Selects a new question randomly from the pool, updates the UI, and starts the question timer.

### `startTimer()`
- Starts the countdown timer for each question.

### `selectAnswer(e)`
- Handles user's answer selection, checks if the answer is correct, updates the score, and provides feedback.

### `submitAnswer()`
- Confirms the user's answer, shows feedback, and prepares for the next question.

### `endQuiz()`
- Ends the quiz and displays the user's final score.



## Conclusion

The **Mind Sparks** platform is designed with a focus on user experience, offering a clean and responsive interface that works well across devices. The combination of engaging visuals, smooth animations, and interactive elements creates an enjoyable quiz-taking experience for users.

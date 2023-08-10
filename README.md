# Tic Tac Toe Game

This project is a simple implementation of the classic Tic Tac Toe game using React. Players can take turns marking empty squares on a grid with their respective symbols ('X' and 'O') and the first player to get three of their symbols in a row, column, or diagonal wins the game.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rishabh6306/Tik-Tak-Toe.git
   cd Tic-Tac-Toe ```

2. Install dependencies:
``` npm install ````

3. Run the application:
`` npm run dev  ``

4. Open your web browser and navigate to http://localhost:5173 to play the Tic Tac Toe game.

### Game Rules
 1. Players take turns clicking on empty squares to place their symbols.
2. The first player to get three of their symbols in a row (horizontal, vertical, or diagonal) wins the game.
3. If no player achieves three symbols in a row and all squares are occupied, the game ends in a tie.

### Folder Structure
The project follows the following folder structure:
tic-tac-toe-game/
├── src/
│   ├── Components/
│   │   ├── Card/
│   │   │   ├── Card.js
│   │   │   ├── Card.css
│   │   │   └── Icon/
│   │   │       ├── Icon.js
│   │   │       └── Icon.css
│   │   ├── Grid/
│   │   │   ├── Grid.js
│   │   │   └── Grid.css
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── README.md
└── ...


## Screenshots

Here are a screenshot of Game:

![Screenshot 1](./public/tik%20tak%20toe%20game.png)

### Acknowledgments
This project was created using React, a JavaScript library for building user interfaces. It showcases the use of components, state management, and user interactions.
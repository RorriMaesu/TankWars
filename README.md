# Tank Wars

A classic multiplayer Tank Wars game built with React and Firebase.

## Features

- Real-time multiplayer gameplay
- User authentication
- Game lobby system
- Tank movement and shooting mechanics
- Health and damage system

## Technologies Used

- React
- Firebase (Authentication, Realtime Database)
- Vite
- GitHub Pages for hosting

## Setup Instructions

1. Clone the repository
   ```
   git clone https://github.com/RorriMaesu/TankWars.git
   cd TankWars
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up Firebase
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Authentication (Email/Password and Anonymous)
   - Enable Realtime Database
   - Update the Firebase configuration in `src/firebase.js` with your project details

4. Run the development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   ```

6. Deploy to GitHub Pages
   ```
   npm run deploy
   ```

## Game Controls

- Move: WASD or Arrow Keys
- Shoot: Space Bar

## License

MIT

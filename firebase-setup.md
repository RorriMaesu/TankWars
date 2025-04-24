# Firebase Setup Guide for Tank Wars

Follow these steps to set up Firebase for your Tank Wars game:

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the prompts to create a new project
3. Give your project a name (e.g., "Tank Wars")
4. Enable Google Analytics if you want (optional)
5. Click "Create project"

## 2. Set Up Authentication

1. In the Firebase Console, select your project
2. Click on "Authentication" in the left sidebar
3. Click on "Get started"
4. Enable the following sign-in methods:
   - Email/Password
   - Anonymous
5. Save your changes

## 3. Set Up Realtime Database

1. In the Firebase Console, select your project
2. Click on "Realtime Database" in the left sidebar
3. Click on "Create database"
4. Choose a location for your database (usually the closest to your users)
5. Start in test mode (we'll update the rules later)
6. Click "Enable"

## 4. Set Up Security Rules

1. In the Realtime Database section, click on the "Rules" tab
2. Replace the default rules with the following:

```json
{
  "rules": {
    "games": {
      ".read": "auth != null",
      ".write": "auth != null",
      "$gameId": {
        ".read": "auth != null",
        ".write": "auth != null",
        "players": {
          "$playerId": {
            ".write": "auth != null && auth.uid === $playerId"
          }
        }
      }
    }
  }
}
```

3. Click "Publish"

## 5. Register Your Web App

1. In the Firebase Console, click on the gear icon next to "Project Overview"
2. Click on "Project settings"
3. Scroll down to "Your apps" and click on the web icon (</>) to add a web app
4. Register your app with a nickname (e.g., "Tank Wars Web")
5. Click "Register app"
6. Copy the Firebase configuration object

## 6. Update Your Firebase Configuration

1. Open the `src/firebase.js` file in your project
2. Replace the placeholder configuration with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 7. Deploy to GitHub Pages

1. Create a new repository on GitHub named "TankWars"
2. Initialize Git in your local project folder:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/RorriMaesu/TankWars.git
   git push -u origin main
   ```

3. GitHub Actions will automatically deploy your app to GitHub Pages when you push to the main branch

## 8. Test Your Game

1. Run the development server locally:
   ```
   npm run dev
   ```

2. Open your browser to the local development URL (usually http://localhost:5173/)
3. Test the authentication and multiplayer functionality

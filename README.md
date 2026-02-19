# Hello, Mobile! 👋

This is a basic mobile app built with React Native and [Expo](https://expo.dev).

## Get started
### Prerequisites
- Node.js (LTS)
- JDK 17
- for native Android development:
  - Android Studio
  - Android SDK
  - Android SDK Platform
  - SDK Build-Tools
  - Android Emulator
- for iOS development
  - Xcode
  - Watchman (`brew install watchman`)
- Expo CLI

### Setup
1. Clone the repo.
   ```bash
   git clone https://github.com/ahliesantiago/hello-mobile.git
   cd hello-mobile
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the app
   ```bash
   npx expo start
   ```

In the output, you'll find a list of options to open the app in a [development build](https://docs.expo.dev/develop/development-builds/introduction/):
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/) (`a` / `npx expo run:android`)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/) (`i` / `npx expo run:ios`)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo (`s`)

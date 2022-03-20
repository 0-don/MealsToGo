<p align="center">
  <a href="https://github.com/Don-Cryptus/MealsToGo">
    <img src="assets/icon%403x.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Meals To Go</h3>

  <p align="center">
    Search for Restaurants in any Location
    <br />
    <br />
    <img src="assets/mealstogo.webp" alt="Logo" width="200" >
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Don-Cryptus/MealsToGo/releases/latest">Try it out</a>
    ·
    <a href="https://github.com/Don-Cryptus/MealsToGo/issues">Report Bug</a>
    ·
    <a href="https://github.com/Don-Cryptus/MealsToGo/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-development">Getting Started Development</a>
      <ul>
        <li><a href="#prerequisites-development">Prerequisites Development</a></li>
        <li><a href="#installation-development">Installation Development</a></li>
      </ul>
    </li>
        <li>
      <a href="#getting-started-production">Getting Started Production</a>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

This Project will be something between epal.gg or battlebuddy.gg

## Built With

- Server

  - [firebase-functions](https://www.npmjs.com/package/firebase-functions)
  - [stripe](https://www.npmjs.com/package/stripe)
  - [typescript](https://www.npmjs.com/package/typescript)
  - [@googlemaps/google-maps-services-js](https://www.npmjs.com/package/@googlemaps/google-maps-services-js)
  - [firebase-admin](https://www.npmjs.com/package/firebase-admin)

- App
  - [typescript](https://www.npmjs.com/package/typescript)
  - [react](https://www.npmjs.com/package/react)
  - [react-native](https://www.npmjs.com/package/react-native)
  - [styled-components](https://www.npmjs.com/package/styled-components)
  - [expo](https://www.npmjs.com/package/expo)
  - [firebase](https://www.npmjs.com/package/firebase)
  - [react-native-paper](https://www.npmjs.com/package/react-native-paper)
  - [@expo-google-fonts](https://www.npmjs.com/search?q=%40expo-google-fonts)
  - [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
  - [stripe-client](https://www.npmjs.com/package/stripe-client)
  - [react-native-maps](https://www.npmjs.com/package/react-native-maps)
  - [expo-camera](https://www.npmjs.com/package/expo-camera)
  - [@react-navigation](https://www.npmjs.com/search?q=%40react-navigation)

<!-- GETTING STARTED DEVELOPMENT  -->

# Getting Started Development

This is an example of setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Prerequisites Development

This project requires NodeJS (version 16 or later), Expo Cli, Yarn, Firebase Cli, Stripe, Android Studio and Google Cloud.

- Android Studio [emulator configuration](https://www.youtube.com/watch?v=x_lvdLil0Fk)
- Stripe [create Account](https://dashboard.stripe.com/register) and **copy live and test keys**

- Google Cloud [Account](https://cloud.google.com/) - **Enable: Places API, Geocoding API, Maps SDK for Android**

- node

  ```sh
  node -v
  v16.5.0
  ```

- important to install this packages globaly

  ```sh
  npm i yarn expo-cli firebase-tools -g
  ```

- login into your [expo account](https://expo.dev/signup)

  ```sh
  expo signin
  ```

- login into your [firebase account](https://firebase.google.com/) and create a web project to get the API keys and **enable functions**
  ```sh
  firebase login:ci
  ```

## Installation Development

- Clone the repo

  ```sh
  git clone https://github.com/Don-Cryptus/MealsToGo/ && cd MealsToGo && yarn && cd functions && yarn && cd..
  ```

### App Development

1. create `.env` environment file

   ```diff
   - Be sure too create `.env` file as explained in the `.env.example`
   ```

### Firebase Functions Development

2. create `./functions/.runtimeconfig.json` environment file like in the example

   ```bash
   cd functions
   firebase functions:config:set stripe.test="sk_test_yourStripePrivateTestKey"
   firebase functions:config:set stripe.live="sk_live_yourStripePrivateLiveKey"
   firebase functions:config:set google.key="your google cloud key"
   firebase functions:config:get > .runtimeconfig.json
   cd ..
   ```

3. start android emulator

   ```bash
   yarn android
   ```

4. start firebase functions in new terminal

   ```bash
   cd functions
   yarn serve
   ```

# Getting Started Production

This is an example of setting up your project on the web.
To get the local copy up and running on the web follow these simple example steps.

1. select you firebase project

   ```bash
   firebase use --add
   ```

2. deploy functions

   ```bash
   cd functions
   yarn deploy
   ```

3. package android apk

   ```bash
   cd ..
   expo build:android
   ```

<!-- USAGE EXAMPLES -->

# Usage

Download the app register & login and test out the app

<!-- ROADMAP -->

# Roadmap

See the [open issues](https://github.com/Don-Cryptus/MealsToGo/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

# Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

# License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

# Contact

Your Email - don.cryptus@gmail.com

Project Link: [https://github.com/Don-Cryptus/MealsToGo/](https://github.com/Don-Cryptus/echat/)

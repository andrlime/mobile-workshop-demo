# Step 0: Setting up
Welcome to the mobile workshop! In Step 0, you will set up your development environment. To get started, clone this repository. You can either
```sh
git clone https://github.com/andrlime/mobile-workshop-demo.git
```

or download the repository as a ZIP folder, and extract it somewhere. You won't need to worry about pushing code, so don't worry if you can't use `git clone`.

## Setting up Node.js
We are using a Node.js development environment, which means you have to install packages. To do this, you need `npm` or `yarn` installed on your computer. If you have `yarn` installed, you probably know how to complete this step, so simply run
```sh
yarn install
```
But, if you do not have `yarn` (we do not expect you to) installed, make sure you have `npm` installed. Run `npm -v` in a command line. If you see a version number, that means you have `npm`. You can go ahead and run
```sh
npm install
```

Otherwise, you need to install `npm`. To do so, run
```sh
curl -qL https://www.npmjs.com/install.sh | sh
```

and then run
```sh
npm install
```

once that is complete. For the rest of this tutorial, we will assume you are using `npm`.

## Running the App
To run the app, run
```sh
npm run start
```

in the folder with everything in it (the folder with `package.json`, specifically). You should see a QR code. Here, you will need to download the **Expo Go** app on your phone (both iOS and Android). Once you have this app, scan the QR code you see with your camera app.

When **Expo Go** opens, you will see some logs as your App builds. Eventually, you should see a screen that says
> Open up App.js to start working on your app!

Step 0 is now complete. To continue, run
```sh
git checkout Step1
```
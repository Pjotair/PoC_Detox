# PoC_Detox - General Info
This repository showcases automated testing for React Native applications using the Detox framework. It also serves as a quick-start guide for implementing Detox in your own projects.

Inside, you'll find:
- Step-by-step instructions for setting up your testing environment.
- A sample application with pre-written Detox tests.
- Guidance on running the automated tests.

This Proof of Concept aims to demonstrate the basics capabilities of Detox and provide a practical starting point for incorporating automated testing into your React Native development workflow.

The PoC presented here and the description of the environment configuration was done using `macOS Sonoma 14.7` other versions of the operating system may require a different approach or if you are working with Windows/Linux you will not run the simulator and tests for iOS.

The last successful launch was on September 27, 2024

## Table of Content
* [General Info](#poc_detox---general-info)
* [Set up Environement](#set-up-environment)
  * [Install Homebrew](#install-homebrew) 
  * [Install and Configure NVM](#install-and-configure-nvm) 
  * [Android Studio Emulator](#android-studio-emulator)
  * [iOS Simulator](#ios-simulator) 
  * [Detox Setup](#detox-setup) 
* [Run Test](#run-test) 
* [How to set up new project with Bare workflow](#how-to-set-up-new-project-with-bare-workflow)
* [Documentation references](#documentation-references)

## Set up Environment
Before you can preview your app, you'll need to build it as a standalone app on your machine, since the Expo Go wrapper app won't be available for this process (coworking with Detox).

As a result, it's essential to configure your local environment so that iOS or Android apps can be built directly on your computer. These apps need to be locally compiled before being sent to emulators for previewing.

To set this up, I recommend visiting [reactnative.dev](https://reactnative.dev) and following the instructions under "Environment Setup" to configure your development environment for local builds without relying on Expo Go. This setup is necessary whether you're using the React Native CLI or the Expo Bare Workflow.

**I provide simplified configuration instructions in this document.**

---
### Install Homebrew
If you don’t have Homebrew installed on your macOS, you can install it by pasting the following command in the terminal:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
[^ back to Table of Content](#table-of-content)

---

### Install and Configure NVM
Before installing any packages, it’s always a good idea to update Homebrew to the latest version and update the formula.
```zsh
brew update
```
After that, you can easily install NVM using the following command:
```zsh
brew install nvm
```
Now, configure the required environment variables. Edit the following configuration file in your home directory
```zsh
vim ~/.zshrc
```
Add the below lines to ~/.zprofile ( or ~/.bashrc for older macOS versions)
```txt
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```
Press [ESC] + `:wq` to save and close your file.

Next, load the environment variables to the current shell environment. From the next login, it will automatically loaded.

```zsh
source ~/.zshrc
```
Using NVM
First of all, see what Node versions are available to install. To see available versions, type:
```zsh
nvm ls-remote
```
Now, you can install any version listed in above output. You can also use aliases names like node for latest version, lts for latest LTS version, etc.
```zsh
nvm install node     ## Installing Latest version 
nvm install 20       ## Installing Node.js 20.X version
```
After installing you can verify what is installed with:
```zsh
nvm ls
```
If you have installed multiple versions on your system, you can set any version as the default version any time. To set the node 20 as default version, simply use:
```zsh
nvm alias default 20
```
Similarly, you can install other versions like Node 12, 16, 18, and 21 versions and switch between easily.

Conclusion
That’s it. You have successfully installed and configured NVM on your macOS system. This tutorial also guides you through the basic uses of NVM, including installing Node.js versions, switching between different Node.js versions, and setting a specific version as the default. Once installed, developers can easily switch between versions as per their project requirements

[^ back to Table of Content](#table-of-content)

---

### Android Studio Emulator
#### Install Watchman and JDK
Install Watchman using a tool such as Homebrew:
```zsh
brew install watchman
```
Install OpenJDK distribution called Azul Zulu using Homebrew. This distribution offers JDKs for both Apple Silicon and Intel Macs.

Run the following commands in a terminal:
```zsh
brew install --cask zulu@17
```
After you install the JDK, add the JAVA_HOME environment variable in ~/.bash_profile (or ~/.zshrc if you use Zsh):
```txt
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```
#### Set up Android Studio
Go to the documentation and follow the steps given there 
[-> go to set up Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/#set-up-android-studio)

When setting environment variables (Step 6), you will probably need to add more lines like here:
```txt
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
#### Set up an Android emulator
Go to the documentation and follow the steps given there
[-> go to set up an emulator](https://docs.expo.dev/workflow/android-studio-emulator/#set-up-an-emulator)


[^ back to Table of Content](#table-of-content)

---

### iOS Simulator
Go to the documentation and follow the steps given there
[-> go to set up iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)

Make sure you have downloaded and installed the iOS simulator Xcode > Settings > Components

Install CocoaPods

```zsh
sudo gem install cocoapods
```

When installing cocoapods, you may receive a message about the need to perform additional installations:
```zsh
sudo gem install drb -v 2.0.6
# or other version
```

```zsh
sudo gem install activesupport -v 6.1.7.8 
# or other version
```

[^ back to Table of Content](#table-of-content)

---

## Detox Setup
1. Install Detox

```zsh
npm install detox-cli --global
```

2. Install required tool by Detox to work with iOS simulators
```zsh
brew tap wix/brew
brew install applesimutils
```

3. Go to your project's root folder, i.e., where package.json is found, and run:
```zsh
npm install "jest@^29" --save-dev
```

4. Install Detox in your project
```zsh
npm install detox --save-dev
```

5. Initialize Detox in your project:
```zsh
detox init
```

**App configs**

**This repository contains already configured files for Detox, Follow the App Configs instructions, for your project or if you are configuring a fresh environment.**

Remember to install the dependencies
```zsh
npm i
```

Go to the documentation and follow the steps given there
[-> go to Detox documentation](https://wix.github.io/Detox/docs/introduction/project-setup#step-2-app-configs)

Run the configured android emulator

[^ back to Table of Content](#table-of-content)

---

## Run Test

1. Run the configured android emulator or iOS simulator.

**Android emulator** <br>
Run Android Studio, and that should have some more actions button. And in there you will find a Virtual Device Manager.
Click next, then choose an Android version that will run on this emulator. And here choose the API version, click next keep all the default settings here and click finish button. And now this will create such a new emulator. And then you can click the play button to launch this emulator. And this will now launch this emulator on your device.

**iOS simulator** <br>
This only works on macOS. Here in Xcode you wanna open this as well. Please start Xcode, you don't have to open a project. You just need to open Xcode, and then you should go to the preferences there. In the preferences make sure you go to locations and here under command line tools make sure you have a version selected here. By default no version is selected and you should do that then select a version here. Once this is done, you can close it.

2. Build the app
```zsh
detox build --configuration android.emu.debug
# or
detox build --configuration ios.sim.debug
```

3. Start your app with Metro
```zsh
npm run android
# or
npm run ios
```

**note**
>If an Error occurs while building the application (despite the earlier BUILD >SUCCESSFUL message), do the following
>>Error: EMFILE: too many open files, watch
>>    at FSEvent.FSWatcher._handle.onchange (node:internal/fs/watchers:207:21)
>1. Open terminal, and use command `ulimit -n 4096` (e.g., 4096, 8192, or even higher).
>2. You might need to run this command as root/administrator (e.g., `sudo ulimit -n 4096`).
>3. To make this change permanent, edit your shell configuration file (e.g., ~/.bashrc, ~/.zshrc) and add the same ulimit command. Finaly you need to reload your .zshrc file to apply the changes: `source ~/.zshrc`.


4. Split your terminal and use command to start testing:
```zsh
detox test --configuration android.emu.debug
# or
detox test --configuration ios.sim.debug
```

[^ back to Table of Content](#table-of-content)

---

## How to set up new project with Bare workflow
Let's create a new project using the bare workflow, selecting the "minimal" option from the bare workflow section at the bottom. In this workflow, you'll encounter some native code, such as Java or Kotlin for Android.

You may need to build the app locally and install it on emulators on your machine. That's why we previously set up the development environment for both iOS and Android.

Once your environment is configured, building and testing your app locally becomes straightforward. There are two scripts in the package.json file that you can use to build and test the app.
In this case, I'll run the command npm run android, which will build the Android version of the app and launch it on an Android emulator that I already have running. Once the build is complete, the app will be installed on the emulator.

Make sure to install `expo-cli`:
```zsh
sudo npm install -g expo-cli
```

1. Create new project
```zsh
expo init
```

2. Choose a template:
>  `minimal` bare and minimal, just the essentials to get you started

Remember to install the dependencies (inside the root directory in the project)
```zsh
npm i
```

[^ back to Table of Content](#table-of-content)

---

## Documentation references

* [Homebrew](https://brew.sh/)
* [Node.js](https://nodejs.org/en)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Detox](https://wix.github.io/Detox/)

[^ back to Table of Content](#table-of-content)

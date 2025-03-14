# About

Unofficial client for Microsoft's Xbox Cloud Gaming streaming service, providing a native Linux desktop experince and some additional features such as Discord rich presence.

## Disclaimer

This project and its contributors are not affiliated with Nvidia, nor it's GeForce NOW product. This repository does not contain any Nvidia / GeForce NOW software. It is simply an Electron wrapper that loads the official GFN web application page, just as it would in a regular web browser.

# Installation

[![Get it from the Snap Store](https://raw.githubusercontent.com/snapcore/snap-store-badges/master/EN/%5BEN%5D-snap-store-white.png)](https://snapcraft.io/geforcenow)


# Usage

  - [Troubleshooting](https://github.com/robstarmcdonald/xboxcloud/wiki/Troubleshooting)
  - [Gamepad controls are not detected](https://github.com/robstarmcdonald/xboxcloud/wiki/Troubleshooting#gamepad-controls-are-not-detected)
  - [Steam Deck controls are not detected](https://github.com/robstarmcdonald/xboxcloud/wiki/Troubleshooting#steam-deck-controls-are-not-detected)

# Building from source

## Requirements

You will need to install [npm](https://www.npmjs.com/), the Node.js package manager. On most distributions, the package is simply called `npm`.

## Cloning the source code

Once you have npm, clone the wrapper to a convenient location:

```bash
git clone https://github.com/robstarmcdonald/xboxcloud.git
```

## Building

```bash
npm install
npm start
```

On subsequent runs, `npm start` will be all that's required.

## Updating the source code

Simply pull the latest version of master and install any changed dependencies:

```bash
git checkout master
git pull
npm install
```

# Links
 - [Xbox Cloud Gaming](https://xbox.com/en-US/play)
 - [Basic usage](https://github.com/robstarmcdonald/xboxcloud/wiki/Basic-usage)
 - [Troubleshooting](https://github.com/robstarmcdonald/xboxcloud/wiki/Troubleshooting)

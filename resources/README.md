# Generate icons and splash screen

This folder follows the instructions in: [Splash Screen and Icons](https://capacitorjs.com/docs/guides/splash-screens-and-icons)

### Steps
- Create an icon and save it under `resources` as `icon.png`
- Repeat with a splash screen as `splash.png` (minimum size must be 1920*1920)
- Install Cordova plug-in `npm install -g cordova-res`
- Generate the assets: 
```
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```
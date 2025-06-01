import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.viewhub.monitoring',
  appName: 'ViewHub',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffff"
    },
    StatusBar: {
      style: "LIGHT"
    }
  },
  android: {
    allowMixedContent: true,
    backgroundColor: "#ffffff"
  },
  ios: {
    scheme: "ViewHub"
  }
};

export default config;
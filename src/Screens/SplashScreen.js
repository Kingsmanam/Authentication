import React from 'react';
import LottieView from 'lottie-react-native'
const SplashScreen = () => {
  return (
    <LottieView
        source={require('../Assets/76587-bouncing-shapes-loader-lottie-animation.json')}
        loop
        autoPlay
      />
  );
};
export default SplashScreen;

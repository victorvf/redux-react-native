import Reactrotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactrotron.configure({ host: '192.168.0.8' })
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
};

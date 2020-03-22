import Reactrotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
    const tron = Reactrotron.configure({ host: '192.168.0.8' })
        .use(reactotronRedux())
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}

import Reactrotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
    const tron = Reactrotron.configure({ host: '192.168.0.8' })
        .use(reactotronRedux())
        .use(reactotronSaga())
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}

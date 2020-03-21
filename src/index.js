import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';

import store from './store';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#141419" />
            <Provider store={store}>
                <Routes />
            </Provider>
        </>
    );
}

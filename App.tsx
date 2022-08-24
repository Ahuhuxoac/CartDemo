import React from 'react';
import { SafeAreaView } from 'react-native';
import Cart from './src/screen/Cart';
import { Provider } from 'react-redux';
import {store} from './src/redux/store'
export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}


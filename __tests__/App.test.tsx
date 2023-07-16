/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';



it('renders correctly', () => {
  let initialState = {}
  let mockReducer = createReducer(initialState, () => {})
  const mockStore = configureStore({
    reducer: { mockReducer }
  });

  renderer.create(
    <Provider store={mockStore}>
      <App />
    </Provider>
    );
});


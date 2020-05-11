import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from '../reducers/smurfReducer';
import SmurfList from '../components/SmurfList';
import SmurfForm from '../components/SmurfForm';
import AddSmurfForm from '../components/AddSmurfForm';
import thunk from 'redux-thunk';

import "./App.css";


const store = createStore(smurfReducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm />
        <AddSmurfForm />
        <SmurfList />
      </div>
    </Provider>
  );
}


export default App;

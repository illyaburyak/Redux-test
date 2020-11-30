import { createStore,  } from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from "./component/app";
import reducer from "./reducer/reducer";


const store = createStore(reducer);





ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {AppContainer} from 'react-hot-loader';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {getDocuments} from './reducer/documents/actions';


const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));


//upon application startup we won't to fire action to get inital queue.
store.dispatch(getDocuments());


require('./index.html');


const container = document.getElementById('app-container');

//AppContainer is purely used for hot module reloading.
//make sure the store is provided to the application by wrapping it with a Provider component given by redux
 ReactDOM.render(
 <AppContainer>
    <Provider store={store}>
        <App/>
    </Provider>
 </AppContainer>
 ,container
 )
//boiler plate code for hot module loading. Listens for changes of files and reloads them for you. Helps speed up development.
if ( module.hot){
    module.hot.accept('./components/App', () =>{
        ReactDOM.render(
        <AppContainer>
            <Provider store={store} >
                <App/>
            </Provider>
        </AppContainer>
        ,container

);  
    });
}
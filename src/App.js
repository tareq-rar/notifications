import React, {useEffect} from 'react';
import storeConfig from './store';
import {Provider} from 'react-redux';
import Router from './RouterConfig/Router';
import {PersistGate} from 'redux-persist/integration/react';
import TemeProvider from './components/HOC/MaterialUiThemeProvider';
import WithContextCustomHook from "./components/HOC/withContext";
const {store, persistor} = storeConfig();

function App(){
    useEffect(() => {
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    });
    return (
        <WithContextCustomHook>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <TemeProvider>
                        <Router />
                    </TemeProvider>
                </PersistGate>
            </Provider>
        </WithContextCustomHook>
    );
}

export default App;

{/*<WithContextCustomHook>*/}
{/*</WithContextCustomHook>*/}

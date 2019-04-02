import {createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStoreWithMiddleware(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
};

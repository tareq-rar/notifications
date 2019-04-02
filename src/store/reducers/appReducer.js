import {
    APP_LANGUAGE,
} from "../definitions";

const INIT_STATE = {
    language: "en",
    searchTerm: null,
    directPay: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case APP_LANGUAGE:
            return {...state, language: action.payload};
        default:
            return state;
    }
};

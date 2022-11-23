import { JSON_DATA } from "../action/jsonAction";


const INITIAL_VALUE = {
    DATA: []
}

export default jsonReducer = (state = INITIAL_VALUE, action) => {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
        case JSON_DATA:
            return {
                ...state,
                DATA : payload,
            }
        default:
            return state;
    }
};
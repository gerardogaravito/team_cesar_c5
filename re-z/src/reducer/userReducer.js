import { Switch } from "react-router";

const INITIAL_STATE = {
    usuarios: []
};

export default (state = INITIAL_STATE, action) => {
    Switch (action.type) {
        case 'traer_usuario':
            return { ...state, usuarios: action.payload }

            default: return state;
    }
}
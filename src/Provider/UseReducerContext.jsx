import { createContext, useContext, useReducer } from "react";
import ReducerActions from '../Common/actions';

// create ReducerContext
const ReducerContext = createContext();

export const useReducerContext = () => useContext(ReducerContext);

export default function UseReducerProvider({ children }) {
    const initialState = {
        count: 0,
        name: [],
    };

    // we have to define reducer fucntion first then only we can access it in useReducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case ReducerActions.INCREMENT:
                var count = state.count;
                return { ...state, count: state.count + 1 };

            case ReducerActions.DECREMENT:
                var count = state.count;
                if (count == 0) {
                    return state;
                }
                return { ...state, count: state.count - 1 };

            case ReducerActions.ADD_USER:
                var arr = state.name;
                arr.push(action.data);
                return { ...state, name: arr };
            // return { ...state, name: [...state.name, action.data] };

            case ReducerActions.REMOVE_USER:
                var arr = state.name;
                arr.splice(action.index, 1);
                return { ...state, name: arr };
            // return { ...state, name: state.name.filter((_, index) => index !== action.index) };

            case ReducerActions.RESET:
                return { count: 0, name: [] };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return <ReducerContext.Provider value={{ state, dispatch }}>
        {children}
    </ReducerContext.Provider>

}
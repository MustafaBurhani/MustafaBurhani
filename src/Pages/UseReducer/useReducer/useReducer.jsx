import React, { useState } from "react";
import { useReducerContext } from "../../../Provider/UseReducerContext";
import ReducerActions from "../../../Common/actions";
import ReducerChild from "../reducerChild/reducerChild";

const UseReducer = React.memo(() => {
    const { state, dispatch } = useReducerContext();
    const [inputValue, setInputValue] = useState('');

    const onInputSubmit = () => {
        dispatch({ type: ReducerActions.ADD_USER, data: inputValue });
        setInputValue('');
    }

    return <div className="text-center">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8">

                <h1>useReducer function practice</h1>

                <h2>{state.count}</h2>
                <div className="d-flex">
                    <button className="theme-button me-2" onClick={() => dispatch({ type: ReducerActions.INCREMENT })}>Increment</button>
                    <button className="theme-button me-2" onClick={() => dispatch({ type: ReducerActions.DECREMENT })}>Decrement</button>
                    <input type="text" placeholder="Enter username and hit enter"
                        className="add-item-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyUp={(e) => { if (e.key === "Enter") onInputSubmit(); }}
                    />
                    <button className="theme-button ms-2" onClick={() => dispatch({ type: ReducerActions.RESET })}>Reset All</button>
                </div>

                <ReducerChild />
            </div>
        </div>
    </div>

});
export default UseReducer;
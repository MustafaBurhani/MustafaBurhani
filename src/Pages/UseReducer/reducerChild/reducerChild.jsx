import React from "react";
import { useReducerContext } from "../../../Provider/UseReducerContext";
import ReducerActions from "../../../Common/actions";

const ReducerChild = React.memo(() => {
    const { state, dispatch } = useReducerContext();

    console.log('ReducerChild called \n mustafa');

    return <div className="text-center mt-5">
        <h1>Reducer Child</h1>
        <ul className="">
            {
                state.name &&
                state.name.map((item, index) => {
                    return <li className="mb-3" key={index}>
                        {item}
                        <button className="theme-button ms-3" onClick={() => dispatch({ type: ReducerActions.REMOVE_USER, index: index })}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                })}
        </ul>

    </div>
}
);

export default ReducerChild; // memo function will prevent unnecessary re-renders.
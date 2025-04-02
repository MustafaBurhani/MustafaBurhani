import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialData, addItem, removeItem, deleteAllItem } from "../../../store/slices/todoListSlice";

import '../admin.scss';

export default function TodoList() {
    console.log('TodoList called');
    const dispatch = useDispatch();
    const todoListData = useSelector((state) => state.todoList);
    const [nameValue, setNameValue] = useState('');

    useEffect(() => {
        var todosData = JSON.parse(window.localStorage.getItem('todoListData'));
        if (todosData) {
            dispatch(setInitialData(todosData));
        }

    }, [])

    const addNewItem = () => {
        if (nameValue != '') {
            dispatch(addItem(nameValue));
            setNameValue('');
        }
    }

    // Function to handle key down event
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addNewItem();
        }
    };

    return <div className="todo-list-table">
        <h1>Todo List</h1>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8">

                    <div className="add-item-wrapper">
                        <input
                            type="text"
                            name="name-input"
                            className="add-item-input"
                            placeholder="Enter item nane"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            onKeyDown={handleKeyDown} // Listen for key press

                        />
                        <button type="submit" className="theme-button ms-2 me-2" onClick={() => addNewItem()}>Add</button>
                        <button type="submit" className="theme-button" onClick={() => dispatch(deleteAllItem())}>Delete All</button>

                    </div>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="color-default-black">#</th>
                                <th className="color-default-black">Name</th>
                                <th className="color-default-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoListData != [] && todoListData != null &&

                                todoListData.map((item, index) => {
                                    return <tr key={`todo-list-${index}`}>
                                        <td className="color-default-black">{index + 1}</td>
                                        <td className="color-default-black">{item}</td>
                                        <td className="color-default-black">
                                            <button className="btn btn-danger" onClick={() => dispatch(removeItem(index))}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialData, addUser, deleteUser, deleteAllUser, updateUser } from "../../../store/slices/userSlice";

import '../admin.scss';

export default function UserList() {
    console.log('UserList called');
    const dispatch = useDispatch();
    const usersListData = useSelector((state) => state.users);
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');


    const [editNameValue, setEditNameValue] = useState('');
    const [editAgeValue, setEditAgeValue] = useState('');


    const [currentEditIndex, setCurrentEditindex] = useState(-1);

    useEffect(() => {
        var userdata = JSON.parse(window.localStorage.getItem('usersListData'));

        if (userdata) {
            dispatch(setInitialData(userdata));
        }

    }, [])

    const addNewUser = () => {
        if (nameValue != '' && ageValue != '') {
            dispatch(addUser({ name: nameValue, age: ageValue }));
            setNameValue('');
            setAgeValue('');
        }
    }

    // Function to handle key down event
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addNewUser();
        }
    };

    const handleEditUserDetail = (index, item) => {
        setEditNameValue(item.name);
        setEditAgeValue(item.age);
        setCurrentEditindex(index);
    }

    const updateUserDetail = () => {
        if (editNameValue != '' && editAgeValue != '') {
            dispatch(updateUser({ index: currentEditIndex, data: { name: editNameValue, age: editAgeValue } }))
            setEditNameValue('');
            setEditAgeValue('');
        }
        setCurrentEditindex(-1);
    }

    return <div className="todo-list-table">
        <h1>Users List</h1>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8">

                    <div className="add-item-wrapper">
                        <input
                            type="text"
                            name="name-input"
                            className="add-item-input me-2"
                            placeholder="Enter User name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            onKeyDown={handleKeyDown} // Listen for key press

                        />
                        <input
                            type="num"
                            name="age-input"
                            className="add-item-input"
                            placeholder="Enter user age"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                            onKeyDown={handleKeyDown} // Listen for key press

                        />
                        <button type="submit" className="theme-button ms-2 me-2" onClick={() => addNewUser()}>Add</button>
                        <button type="submit" className="theme-button" onClick={() => dispatch(deleteAllUser())}>Delete All</button>

                    </div>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="color-default-black">#</th>
                                <th className="color-default-black">Name</th>
                                <th className="color-default-black">Age</th>
                                <th className="color-default-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersListData != [] && usersListData != null &&

                                usersListData.map((item, index) => {
                                    return <tr key={`todo-list-${index}`}>
                                        <td className="color-default-black">{index + 1}</td>
                                        <td className="color-default-black">

                                            {
                                                currentEditIndex == index ?
                                                    <input
                                                        name="editName"
                                                        className="add-item-input"
                                                        placeholder="Enter user name"
                                                        value={editNameValue}
                                                        onChange={(e) => setEditNameValue(e.target.value)}
                                                    /> :
                                                    item.name
                                            }
                                        </td>


                                        <td className="color-default-black">{

                                            currentEditIndex == index ?
                                                <input
                                                    name="editAge"
                                                    className="add-item-input"
                                                    placeholder="Enter user age"
                                                    value={editAgeValue}
                                                    onChange={(e) => setEditAgeValue(e.target.value)}
                                                /> :
                                                item.age

                                        }</td>

                                        <td className="color-default-black">
                                            <button className="btn btn-danger me-2"
                                                // onClick={ () => dispatch(updateUser({ index: index, data: { name: 'Hawra', age: 19 } }))}
                                                onClick={() => {
                                                    currentEditIndex == index ?
                                                        updateUserDetail() :
                                                        handleEditUserDetail(index, item)

                                                }}
                                            >
                                                {
                                                    currentEditIndex == index ?
                                                        <i className="fa-solid fa-check"></i>
                                                        :

                                                        <i className="fa-solid fa-edit"></i>
                                                }
                                            </button>
                                            <button className="btn btn-danger" onClick={() => dispatch(deleteUser(index))}>
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
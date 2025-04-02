import TodoList from "./adminTools/todoList";
import UserList from "./adminTools/userList";
import './admin.scss';

export default function Admin() {
    return <div className="admin-wrapper">
        <TodoList />
        <UserList />
    </div>;
}
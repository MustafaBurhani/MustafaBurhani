import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import SideBar from './Components/sidebar/sidebar';

import Home from "./Pages/Home/home";
// import Admin from "./Pages/Admin/admin";
// import TodoList from './Pages/Admin/adminTools/todoList';
// import UserList from './Pages/Admin/adminTools/userList';
// import UseReducer from "./Pages/UseReducer/useReducer/useReducer";

// const Home = lazy(() => import('./Pages/Home/home'));
const Admin = lazy(() => import('./Pages/Admin/admin'));
const TodoList = lazy(() => import('./Pages/Admin/adminTools/todoList'));
const UserList = lazy(() => import('./Pages/Admin/adminTools/userList'));
const UseReducer = lazy(() => import('./Pages/UseReducer/useReducer/useReducer'));

import NoDataScreen from './Pages/NoDataScreen/noDataScreen'
import Loader from "./Components/Loader/Loader";

import { SideBarContext } from './Provider/SidebarContext';
import ThemeProvider from "./Provider/ThemeContext";
import UseReducerProvider from "./Provider/UseReducerContext";

import './App.scss';
import './media.scss';
import GlobalVariables from "./Common/globalVariables";

export default function App() {
  const [sideBarState, setsideBarState] = useState('close');


  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? GlobalVariables.initialTheme;
    const themeColor = localStorage.getItem("themeColor");

    document.body.classList.add(theme);
    document.documentElement.style.setProperty("--theme-color", themeColor ?? "#149ddd");
  }, []);

  const PrivateRoute = () => {
    // If user is already authenticated, redirect them to a dashboard or home page
    return GlobalVariables.isAdmin ?
      <Outlet /> :
      <Navigate to={'/'} /> // This will redirect to Home page and change the url to "/"
      // <Home />  // this will simply update the page to Home page without changing the url
      ;
  }

  return (
    // Theme Provider
    <ThemeProvider>

      {/* UseReducer Provider */}
      <SideBarContext.Provider value={{ sideBarState, setsideBarState }} >
        <UseReducerProvider>

          <div className="main-view">
            <BrowserRouter>
              <div className={`sidebar-area ${sideBarState == 'open' ? 'show' : ''}`}>
                <SideBar />
              </div>

              <div className="page-area">
                <Suspense fallback={<Loader />}>
                  <Routes>

                    {/* Public Routes */}
                    <Route index element={<Home />} />

                    {/* Private Routes only for admin access*/}
                    <Route element={<PrivateRoute />}>
                      <Route path={'/admin'} element={<Admin />} />
                      <Route path={'/admin/todolist'} element={<TodoList />} />
                      <Route path={'/admin/userList'} element={<UserList />} />
                      <Route path={'/admin/useReducer'} element={<UseReducer />} />
                    </Route>

                    <Route path={'*'} element={<NoDataScreen />} />
                  </Routes>
                </Suspense>
              </div>

            </BrowserRouter>
          </div>

        </UseReducerProvider>
      </SideBarContext.Provider>
      {/* UseReducer Provider */}

    </ThemeProvider>
    //Theme Provider
  )
}

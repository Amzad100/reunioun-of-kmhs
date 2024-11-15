import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home"; // Your Home (Batch List) page
import StudentDetail from "../pages/Home/Batch/StudentDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Developer from "../pages/Developer/Developer";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>, // Main layout for the website
        children: [
            {
                path: "/",
                element: <Home></Home>, // Home page where the student list will be shown
            },
            {
                path: "/student/:id", // Route for the individual student detail page
                element: <StudentDetail></StudentDetail>, // Component for showing student details
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "developer",
                element: <Developer></Developer>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },

        ],
    },
]);

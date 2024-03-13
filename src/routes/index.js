import { createBrowserRouter } from "react-router-dom";
import Home from "../app/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

export default router;
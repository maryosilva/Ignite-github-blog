import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Posts } from "./pages/Posts";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Blog />}/>
                <Route path="/posts" element={<Posts />}/>
            </Route>
        </Routes>
    )
}
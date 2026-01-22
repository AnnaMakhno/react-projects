import { BrowserRouter, Routes, Route } from "react-router-dom";
import courses from "./data/courses";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import SingleCours from "./components/SingleCours";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<MainLayout />}
                    >
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path="about"
                            element={<About />}
                        />
                        <Route
                            path="contacts"
                            element={<Contacts />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                        <Route
                            path="courses"
                            element={<Courses courses={courses} />}
                        ></Route>
                        <Route
                            path="courses/:slug"
                            element={<SingleCours courses={courses} />}
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

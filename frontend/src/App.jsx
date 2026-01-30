import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/ServicesPage"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const Gallery = lazy(() => import("./pages/GalleryPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const ProjectDetailMain = lazy(() => import("./components/projects/ProjectDetailMain"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (

        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projectdetail/:slug" element={<ProjectDetailMain />} />

            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />

        </Routes>

    );
}

export default App;

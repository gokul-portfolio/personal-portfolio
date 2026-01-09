import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Projects from "./pages/ProjectsPage";
import Gallery from "./pages/GalleryPage";
import Contact from "./pages/ContactPage";
import ProjectDetail from "./pages/ProjectDetailPage";
import NotFound from "./pages/NotFound";

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
                <Route path="/projectdetail" element={<ProjectDetail />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
        </Routes>

    );
}

export default App;

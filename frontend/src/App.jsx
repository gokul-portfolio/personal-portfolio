import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
      
          

            <Routes>
                {/* Public Layout */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
      
    );
}

export default App;

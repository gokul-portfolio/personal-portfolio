import { NavLink } from "react-router-dom";
import {
    HiHome,
    HiUser,
    HiBriefcase,
    HiPhotograph,
    HiMail
} from "react-icons/hi";

const FloatingMenu = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="floating-menu">
            <NavLink to="/" end>
                <HiHome />
                <span>Home</span>
            </NavLink>

            <NavLink to="/about">
                <HiUser />
                <span>About</span>
            </NavLink>

            <NavLink to="/projects">
                <HiBriefcase />
                <span>Work</span>
            </NavLink>

            <NavLink to="/skills">
                <HiPhotograph />
                <span>Gallery</span>
            </NavLink>

            <NavLink to="/contact">
                <HiMail />
                <span>Contact</span>
            </NavLink>
        </div>
    );
};

export default FloatingMenu;

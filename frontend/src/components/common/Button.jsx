import { NavLink } from "react-router-dom";

const Button = ({
    children,
    to,
    onClick,
    className = "",
    icon,
}) => {
    
    if (to) {
        return (
            <NavLink
                to={to}
                onClick={onClick}
                className={`get-started-btn ${className}`}
            >
                <span className="btn-text">{children}</span>
                {icon && <span className="btn-arrow">{icon}</span>}
            </NavLink>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`get-started-btn ${className}`}
        >
            <span className="btn-text">{children}</span>
            {icon && <span className="btn-arrow">{icon}</span>}
        </button>
    );
};

export default Button;

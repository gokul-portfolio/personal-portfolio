import { NavLink } from "react-router-dom";
import clickSoundFile from "../../assets/sounds/click.wav";

const Button = ({
    children,
    to,
    onClick,
    className = "",
    icon,
}) => {

    const playClickSound = () => {
        const audio = new Audio(clickSoundFile);
        audio.volume = 0.4;
        audio.play();
    };

    const handleClick = (e) => {
        playClickSound();
        if (onClick) onClick(e);
    };

    if (to) {
        return (
            <NavLink
                to={to}
                onClick={handleClick}
                className={`get-started-btn ${className}`}
            >
                <span className="btn-text">{children}</span>
                {icon && <span className="btn-arrow">{icon}</span>}
            </NavLink>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={`get-started-btn ${className}`}
        >
            <span className="btn-text">{children}</span>
            {icon && <span className="btn-arrow">{icon}</span>}
        </button>
    );
};

export default Button;

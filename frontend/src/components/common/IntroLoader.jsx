import { useEffect, useState } from "react";

const IntroLoader = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setReady(true);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="intro-loader">
            {!ready ? (
                <>
                    <h2 className="loader-title">LOADING</h2>
                    <div className="loader-bar">
                        <span style={{ width: `${progress}%` }} />
                    </div>
                    <p className="loader-percent">{progress}%</p>
                </>
            ) : (
                <button className="enter-btn" onClick={onEnter}>
                    ▶ Click to Enter
                </button>
            )}
        </div>
    );
};

export default IntroLoader;

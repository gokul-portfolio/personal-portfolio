import { useEffect } from "react";

const ResumeMain = () => {
  useEffect(() => {
    window.open("/resume.pdf", "_blank");
  }, []);

  return null;
};

export default ResumeMain;
import { useEffect } from "react";

const ResumeMain = () => {
  useEffect(() => {
    window.location.replace("/resume.pdf");
  }, []);

  return null;
};

export default ResumeMain;
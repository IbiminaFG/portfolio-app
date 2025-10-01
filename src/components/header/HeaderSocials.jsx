import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/ibimina-gogo-b43a6318a"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/IbiminaFG" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/loonetgf" rel="noreferrer" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;

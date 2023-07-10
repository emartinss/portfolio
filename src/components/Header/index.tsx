import logo from "../../assets/Group 2.svg";
import navbar from "../../assets/menus.png";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
       
        <img className="logoImg" src={logo} alt="logo" />
        <img className="navBar" src={navbar} alt="navbar" />

        <div className="div-navbar">
          <p className="project">Projetos</p>
          <p className="hability">Habilidades</p>
          <p className="contact">Contato</p>
        </div>
      </div>
    </StyledHeader>
  );
};

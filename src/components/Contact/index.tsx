import { StyledSkills } from "./style";
import linkedin from "../../assets/icons8-linkedin-48.png";
import email from "../../assets/icons8-email-48.png";
import gitHub from "../../assets/icons8-github-48.png";

export const Contact = () => {
  return (
    <StyledSkills>
      <h3>CONTATO</h3>
      <ul>
        <li>
          <img src={linkedin} alt="linkedinLogo" />
          <a href="https://www.linkedin.com/in/dev-eduardomartins/" target="blank">
            Linkedin
          </a>
        </li>
        <li>
          <img src={email} alt="emailLogo" />
          <p> Email: edumartinscmp@gmail.com</p>
        </li>
        <li>
          <img src={gitHub} alt="gitHubLogo" />
          <a href="https://github.com/emartinss" target="blank">
            GitHub
          </a>
        </li>
      </ul>
    </StyledSkills>
  );
};

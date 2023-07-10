import { StyledProjects } from "./style";
import kenzieBurger from "../../assets/burger.png";
import NuKenzie from "../../assets/NuKenzie.png";
import Barbers from "../../assets/Barbers.png";

export const ProjectsSection = () => {
  return (
    <>
      <h3>PROJETOS</h3>
      <StyledProjects>
        <ul>
          <li>
            <img className="imgProject" src={kenzieBurger} alt="" />
            <div className="div-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vero, aut!
              </p>
            </div>
            <div className="div-buttons">
              <a className="tagSite" href="https://kenzie-academy-brasil-developers-kenzie-burguer-v2-gmv1aliu3.vercel.app/" target="blank">
                Site
              </a>
              <a className="tagCode" href="https://kenzie-academy-brasil-developers-kenzie-burguer-v2-gmv1aliu3.vercel.app/" target="blank">
                Código
              </a>
            </div>
          </li>
          <li>
            <img className="imgProject" src={Barbers} alt="" />
            <div className="div-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vero, aut!
              </p>
            </div>
            <div className="div-buttons">
              <a className="tagSite" href="https://barbers-and-co.vercel.app/" target="blank">
                Site
              </a>
              <a href="">Código</a>
            </div>
          </li>
          <li>
            <img className="imgProject" src={NuKenzie} alt="" />
            <div className="div-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!</p>
            </div>
            <div className="div-buttons">
              <a className="tagSite" href="https://my-nu-kenzie-app.vercel.app/" target="blank">
                Site
              </a>
              <a href="">Código</a>
            </div>
          </li>
        </ul>
      </StyledProjects>
    </>
  );
};

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { ProjectsSection } from "./components/ProjectsSection";
import { Skills } from "./components/Skills";
import { GlobalStyles } from "./styles/global";
import { StyledMain } from "./styles/styledMain";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <div className="container">
          <Introduction />
          <ProjectsSection />
          <Skills />
          <Contact />
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;

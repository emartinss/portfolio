import { StyledIntroduction } from "./styles";

export const Introduction = () => {
  return (
    <StyledIntroduction>
      <p>Olá, meu nome é</p>
      <h2 className="name">Eduardo Martins</h2>
      <h2 className="job">E sou um dev Front-End</h2>
      <span>
        Tenho 19 anos e decidi seguir na programação por gostar desde cedo de tecnologia e de resolver desafios. Então a partir de 2022
        comecei a estudar programação e logo de cara me apaixonei pela área. Tenho muita vontade de aprendizado e conhecimento, tenho boa
        comunicação e facilidade para trabalhar em grupo, além de ser muito comprometido com tudo que me proponho a fazer. Convido vocês a
        conhecer um pouco mais sobre meus projetos através desse portfólio
      </span>

      <img
        src="https://instagram.fpoa11-2.fna.fbcdn.net/v/t51.2885-19/328503914_100182299659998_1207367714979540851_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpoa11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=e84sngyE538AX9B3y--&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD2j4EqKP4Gqnn28pbWk-h6MKc4t3O6PNUOT7FC_QTvog&oe=646318E4&_nc_sid=1527a3"
        alt="foto do autor"
      />
    </StyledIntroduction>
  );
};

// import { FaSquareGithub, FaLinkedinIn } from 'react-icons/fa6';
import TextCarousel from '../../components/Carousel';

import styles from './styles.module.css';

function Home() {
  return (
    <>
      <div className={ styles.homeWrapper }>
        <section className={ styles.homeInfo }>
          <div className={ styles.homeSubtitleWrapper }>
            <h2 className={ styles.homeSubtitle }>{'.euSou '}</h2>
            <h2>{'{'}</h2>
          </div>
          <div className={ styles.homeTitleWrapper }>
            <h1 className={ styles.homeTitle }>Eberton Arouxa</h1>
            <span className={ styles.homeTitleSpecialCharacter }>:</span>
          </div>
          <p className={ styles.homeDescription }>
            Desenvolvedor web front-end e designer gráfico.
            Estou unindo minha paixão pelo design com minhas habilidades em programação,
            ansioso por oportunidades que me permitam conceber
            interfaces web surpreendentes e eficazes.
          </p>
          <h2>{'}'}</h2>
          {/* <div className={ styles.homeSocialMediaButtons }>
          <a href="https://github.com/ebertonArouxa">
            <FaSquareGithub size={ 50 } className={ styles.github } />
            <img src="public/icons8-github-36.png" alt="logo do github" />
          </a>
          <a href="https://www.linkedin.com/in/ebertonsouza/">
            <FaLinkedinIn size={ 50 } className={ styles.linkedin } />
            <img src="public/icons8-linkedin-36.png" alt="logo do linkedin" />
          </a>
        </div> */}
        </section>
        <section className={ styles.homeImageWrapper }>
          <img src="public/eberton-arouxa-tinta.png" alt="foto de eberton arouxa" />
        </section>
      </div>
      <div className={ styles.contentWrapper }>
        <TextCarousel />
        <div className={ styles.aboutMeContent }>
          <article>
            <h2 id="sobreMim">
              Sobre mim:
            </h2>
            <p>
              aqui vai estar escrito as coisas sobre mim Lorem ipsum dolor sit amet.
              Et aliquam ipsum est numquam nobis aut sint voluptas et provident minima
              est velit voluptas est dignissimos unde eum esse recusandae. Sed quia
              laboriosam eum doloribus nihil et laudantium animi aut adipisci vero ex
              recusandae maiores eum quia galisum.

              Ut neque fugiat in cupiditate voluptatibus 33 quasi omnis et quas nobis
              eum esse nisi id officiis provident et atque nisi! Ea iste consequatur
              At deleniti facilis ea sint veniam a porro enim!

              Ut autem praesentium et tenetur assumenda sit culpa totam id molestiae
              possimus in accusamus dolores rem perspiciatis quibusdam qui quam iure.
              Aut velit perferendis ut assumenda perspiciatis qui laudantium aperiam
              vel unde rerum in velit voluptates ab sunt dolorem aut assumenda velit?
            </p>
          </article>
          <aside>
            <h2>
              Projetos
            </h2>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;

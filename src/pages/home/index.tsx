import styles from './styles.module.css';

function Home() {
  return (
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
      </section>
      <section className={ styles.homeImageWrapper }>
        <img src="public/eberton-arouxa-tinta.png" alt="foto de eberton arouxa" />
      </section>
      <section className={ styles.homeButtonWapper }>
        <span className={ styles.aboutMeButton }>Saiba mais:</span>
        <div className={ styles.homeSocialMediaButtons }>
          <a href="https://github.com/ebertonArouxa">
            <img src="public/icons8-github-36.png" alt="logo do github" />
          </a>
          <a href="https://www.linkedin.com/in/ebertonsouza/">
            <img src="public/icons8-linkedin-36.png" alt="logo do linkedin" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

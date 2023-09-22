import styles from './styles.module.css';

function Home() {
  return (
    <div className={ styles.homeWrapper }>
      <div>
        <h2 className={ styles.homeSubtitle }>Eu sou:</h2>
        <h1 className={ styles.homeTitle }>Eberton Arouxa</h1>
        <p className={ styles.homeDescription }>resumo sobre mim</p>
        <button type="button" className={ styles.aboutMeButton }>Sobre mim</button>
      </div>
      <div className={ styles.homeImageWrapper }>
        <img src="" alt="foto de eberton arouxa" />
      </div>
    </div>
  );
}

export default Home;

import styles from './styles.module.css';

function Header() {
  return (
    <div className={ styles.fixedHeader }>
      <nav className={ styles.headerWrapper }>
        <div>
          <span className={ styles.specialCharacter }>&lt;</span>
          <span className={ styles.headerTitle }>
            {'Hello World '}
          </span>
          <span className={ styles.specialCharacter }>/&gt;</span>
        </div>
        <ul className={ styles.headerNavWrapper }>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <span className={ styles.headerNav }>
              {'Página inicial '}
            </span>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <span className={ styles.headerNav }>
              {'Sobre mim '}
            </span>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <span className={ styles.headerNav }>
              {'Portfólio '}
            </span>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
          <li>
            <span className={ styles.specialNavCharacter }>&lt;</span>
            <span className={ styles.headerNav }>
              {'Contato '}
            </span>
            <span className={ styles.specialNavCharacter }>/&gt;</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

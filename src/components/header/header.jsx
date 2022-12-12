import styles from './header.module.scss'

import { NavbarComponent } from "../navbar/navbar";



export const Header = () => {
  return (
    <header id="header" className={styles.header}>
        <NavbarComponent />
      <div  >
            <div className={styles.text}>
              <h1 className={styles.title} >Сохранение и развитие объектов культурного наследия</h1>
              <p className={styles.subtitle}>исследование команды ФГРР НИУ ВШЭ</p>
        </div>
      </div>
    </header>
  );
};

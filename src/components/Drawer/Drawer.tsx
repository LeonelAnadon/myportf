import {
  createSignal,
  type Component,
  createEffect,
  For,
  onCleanup,
  Show,
} from "solid-js";
import styles from "./drawer.module.scss";
import closeIcon from "../../assets/icons/close.svg";
import signBlack from "../../assets/sign_black.png";
import signWhite from "../../assets/sign_white.png";
import { Trans } from "@mbarzda/solid-i18next";

interface DrawerProps {
  toggleDrawer: () => void;
  showDrawer: boolean;
  isDarkMode: boolean;
}

const Drawer: Component<DrawerProps> = (props) => {
  createEffect(() => {
    if (props.showDrawer) {
      document.body.classList.add("no-scroll");
    }

    onCleanup(() => document.body.classList.remove("no-scroll"));
  });

  return (
    <div class={`${styles.drawer} ${props.showDrawer ? styles.open : ""}`}>
      <div class={styles.headerDrawer}>
        <button onClick={props.toggleDrawer} class={styles.toggleButton}>
          <img alt="close" src={closeIcon} />
          <Trans key="drawer.close" children={"Cerrar"} />
        </button>
      </div>
      <div class={styles.drawerContent}>
        <ul>
          <li>
            <a href="#about" onClick={() => props.toggleDrawer()}>
              <Trans key="nav.about" children={"Sobre mi"} />
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => props.toggleDrawer()}>
              <Trans key="nav.services" children={"Mis servicios"} />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => props.toggleDrawer()}>
              <Trans key="nav.contact" children={"Contactame"} />
            </a>
          </li>
        </ul>
        {/* <p>Este es el contenido del cajón.</p> */}
      </div>
    </div>
  );
};

export default Drawer;

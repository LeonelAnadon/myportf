import { Show, type Component } from "solid-js";
import styles from "./contact.module.scss";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";

interface ContactProps {
  toggleModal: () => void;
}

const Contact: Component<ContactProps> = (props) => {
  const [t] = useTransContext();

  return (
    <section
      class={styles.container}
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div>
        <div class={styles.contactInfo}>
          <b>Comencemos a trabajar en tu proyecto</b>
          <p>Contacta conmigo</p>
        </div>
        <div class={styles.btnContainer}>
          <button onClick={props.toggleModal}>Contactame</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

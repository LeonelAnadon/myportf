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
      id="contact"
      class={styles.container}
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div>
        <div class={styles.contactInfo}>
          <b>{t("contact.title")}</b>
          <p>{t("contact.subtitle")}</p>
        </div>
        <div class={styles.btnContainer}>
          <button aria-label="Boton para ponerse en contacto" onClick={props.toggleModal}>{t("contact.btn")}</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

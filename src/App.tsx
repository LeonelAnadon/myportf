import { createSignal, type Component, createEffect } from "solid-js";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Trans } from "@mbarzda/solid-i18next";
import About from "./components/About/About";
import ScrollingTechnologies from "./components/ScrollingTechnologies/ScrollingTechnologies";
import MyServices from "./components/MyServices/MyServices";
import TheModal from "./components/TheModal/TheModal";
import { IModalTechData } from "./interfaces/global";
import Footer from "./components/Footer/Footer";
import Separator from "./components/Separator/Separator";
import Contact from "./components/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Drawer from "./components/Drawer/Drawer";

const App: Component = () => {
  const [isDarkMode, setIsDarkMode] = createSignal<boolean>(false);
  const [showModal, setShowModal] = createSignal<boolean>(false);
  const [showDrawer, setShowDrawer] = createSignal<boolean>(false);

  createEffect(() => {
    AOS.init()
  })

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode());
  };
  const toggleModal = () => {
    setShowModal(!showModal());
  };
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer());
  };
  return (
    <div
      class={`${styles.App} ${
        isDarkMode() ? styles.darkMode : styles.lightMode
      }`}
    >
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode()} toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} showDrawer={showDrawer()} isDarkMode={isDarkMode()} />
      <main>
        <Hero />
        <ScrollingTechnologies isDarkMode={isDarkMode()} />
        <About />
        <Separator />
        <MyServices />
        <Contact toggleModal={toggleModal} />
      </main>
      <Footer isDarkMode={isDarkMode()} />
      <TheModal toggleModal={toggleModal} show={showModal()} />
    </div>
  );
};

export default App;

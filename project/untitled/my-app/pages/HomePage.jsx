import React, { useState } from "react";
import styled from "styled-components";

import Header from "../Components/Header.jsx";
import FirstSections from "../Components/FirstSections.jsx";
import Cards from "../Components/Cards.jsx";
import Discriptions from "../Components/discriptions.jsx";
import SakuraLeaves from "../Components/Sakuraeaves";
import FAQ from "../Components/FAQ.jsx";
import Footer from "../Components/Footer.jsx";
import Modal from "../Components/Modal.jsx";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const [currency,setCurrency]=useState('PRB')


    return (
        <Wrapper>
            <SakuraLeaves />
<header>
    <Header currency={currency}
            setCurrency={setCurrency}/>
</header>

            <section id="home">
                <FirstSections openModal={openModal} />
            </section>

            <section id="price">
                <Cards currency={currency} openModal={openModal} />
            </section>

            <section id="about">
                <Discriptions />
            </section>

            <section id="faq">
                <FAQ />
            </section>

            <section id="contacts">

з                <Footer openModal={openModal} />
            </section>

            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;

  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  box-sizing: border-box;

  background:
          linear-gradient(
                  180deg,
                  #050505 0%,
                  #120404 35%,
                  #1b0707 100%
          );

  color: white;

  position: relative;

  section {
    position: relative;
    z-index: 2;
  }
`;

export default HomePage;
import React from "react";
import styled from "styled-components";

import Sakura from "/img/sakura.png";
import Clouds from "/img/clouds.png";

const FirstSections = ({ openModal }) => {
    return (
        <Wrapper>
            <div className="overlay" />

            <img className="cloud cloud-left" src={Clouds} alt="" />
            <img className="cloud cloud-right" src={Clouds} alt="" />

            <div className="sun">
                <div className="sun-glow" />
                <img src={Sakura} alt="sakura" />
            </div>

            <div className="hero-content">
                {/*<p className="eyebrow">Japanese Tarot Reading</p>*/}

                <h1>
                    Открой путь
                    <br />
                    через карты судьбы
                </h1>

                <p className="description">
                    Мистические расклады Таро в японской эстетике —
                    любовь, предназначение, энергия отношений
                    и тайные знаки судьбы.
                </p>

                <div className="actions">
                    <button onClick={openModal}>
                        Получить расклад ✨
                    </button>

                    <span className="note">
            Онлайн • Конфиденциально
          </span>
                </div>
            </div>

            <div className="particles">
                <span />
                <span />
                <span />
                <span />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  min-height: 100vh;

  position: relative;

  display: flex;
  align-items: center;

  padding: 120px 90px;

  overflow: hidden;

  linear-gradient(145deg, rgba(130, 20, 20, 0.9), rgba(70, 20, 20, 0.82));
  .overlay {
    position: absolute;
 

    background:
            linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0.82),
                    rgba(0, 0, 0, 0.45)
            );

    z-index: 0
  }

  .hero-content {
    position: relative;
    z-index: 5;

    max-width: 650px;

    animation: fadeUp 1s ease;
  }

  .eyebrow {
    display: inline-block;

    margin-bottom: 20px;

    color: #ff8fa3;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 5px;
    text-transform: uppercase;

    padding: 10px 18px;

    border-radius: 40px;

    background: rgba(255, 255, 255, 0.05);

    border: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(8px);
  }

  h1 {
    margin: 0;

    font-size: 82px;
    line-height: 0.95;
    font-weight: 700;

    color: #fff5f5;

    text-shadow:
            0 0 30px rgba(255, 0, 90, 0.12);

    animation: titleGlow 5s ease-in-out infinite;
  }

  .description {
    margin-top: 28px;

    max-width: 540px;

    color: rgba(255, 240, 240, 0.72);

    font-size: 18px;
    line-height: 1.9;
  }

  .actions {
    margin-top: 40px;

    display: flex;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
  }

  .actions button {
    padding: 18px 36px;

    border: none;
    border-radius: 18px;

    background: linear-gradient(
            135deg,
            #991b1b,
            #dc2626
    );

    color: white;

    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.35s ease;

    box-shadow:
            0 0 25px rgba(255, 0, 85, 0.25),
            0 0 60px rgba(255, 0, 85, 0.12);
  }

  .actions button:hover {
    transform: translateY(-5px) scale(1.03);

    box-shadow:
            0 0 35px rgba(255, 0, 85, 0.4),
            0 0 80px rgba(255, 0, 85, 0.15);
  }

  .note {
    color: rgba(255, 255, 255, 0.45);
    font-size: 14px;
    letter-spacing: 1px;
  }

  .sun {
    position: absolute;

    right: 5%;
    top: 50%;

    transform: translateY(-50%);

    width: 540px;
    height: 540px;

    border-radius: 50%;

    overflow: hidden;

    z-index: 2;

    animation: floating 7s ease-in-out infinite;
  }

  .sun-glow {
    position: absolute;
    inset: 0;

    border-radius: 50%;

    background:
            radial-gradient(
                    circle,
                    rgba(255, 0, 85, 0.55),
                    rgba(120, 0, 0, 0.8)
            );

    box-shadow:
            0 0 120px rgba(255, 0, 85, 0.25),
            0 0 220px rgba(255, 0, 85, 0.12);
  }

  .sun img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    opacity: 0.92;

    mix-blend-mode: screen;

    filter: contrast(1.1) saturate(1.05);
  }

  .cloud {
    position: absolute;

    opacity: 0.06;

    pointer-events: none;

    z-index: 1;
  }

  .cloud-left {
    width: 700px;

    left: -120px;
    top: 18%;

    animation: cloudLeft 18s ease-in-out infinite;
  }

  .cloud-right {
    width: 650px;

    right: -160px;
    bottom: 10%;

    transform: scaleX(-1);

    animation: cloudRight 20s ease-in-out infinite;
  }

  .particles span {
    position: absolute;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.5);

    box-shadow: 0 0 10px rgba(255,255,255,0.6);

    animation: particles 7s linear infinite;
  }

  .particles span:nth-child(1) {
    left: 20%;
    top: 80%;
    animation-delay: 0s;
  }

  .particles span:nth-child(2) {
    left: 35%;
    top: 90%;
    animation-delay: 2s;
  }

  .particles span:nth-child(3) {
    left: 70%;
    top: 85%;
    animation-delay: 4s;
  }

  .particles span:nth-child(4) {
    left: 85%;
    top: 92%;
    animation-delay: 1s;
  }

  @keyframes floating {
    0%,100% {
      transform: translateY(-50%) translateY(0px);
    }

    50% {
      transform: translateY(-50%) translateY(-18px);
    }
  }

  @keyframes cloudLeft {
    0%,100% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(40px);
    }
  }

  @keyframes cloudRight {
    0%,100% {
      transform: scaleX(-1) translateX(0);
    }

    50% {
      transform: scaleX(-1) translateX(-40px);
    }
  }

  @keyframes particles {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }

    20% {
      opacity: 1;
    }

    100% {
      transform: translateY(-220px) scale(0);
      opacity: 0;
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes titleGlow {
    0%,100% {
      text-shadow:
              0 0 30px rgba(255, 0, 90, 0.12);
    }

    50% {
      text-shadow:
              0 0 50px rgba(255, 0, 90, 0.25);
    }
  }



  @media (max-width: 1440px) {
    h1 {
      font-size: 72px;
    }
.description{
  font-size: 28px;
}
    .sun {
      width: 500px;
      height: 500px;
    }
  }

  @media (max-width: 1200px) {
    padding: 120px 50px;

    h1 {
      font-size: 60px;
    }

    .sun {
      width: 380px;
      height: 380px;

      right: -60px;
    }
  }

  @media (max-width: 992px) {
    justify-content: center;

    text-align: center;

    padding: 140px 30px 80px;

    .hero-content {
      max-width: 100%;
    }

    .description {
      margin-inline: auto;
    }

    .actions {
      justify-content: center;
    }

    h1 {
      font-size: 54px;
      line-height: 1.05;
    }

    .sun {
      width: 320px;
      height: 320px;

      top: 90px;
      right: 50%;

      transform: translateX(50%);

      opacity: 0.18;
    }

    .cloud-left,
    .cloud-right {
      opacity: 0.04;
    }
  }

  @media (max-width: 768px) {
    padding: 120px 22px 70px;

    h1 {
      font-size: 60px;
    }

    .description {
      font-size: 25px;
      line-height: 1.8;
    }

    .actions {
      flex-direction: column;
      gap: 16px;
    }

    .actions button {
      width: 100%;
      max-width: 420px;
      height: 70px;
      font-size: 25px;
    }

    .sun {
      width: 230px;
      height: 230px;

      top: 70px;
    }

    .eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
    }
    .note{
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 34px;
    }

    .description {
      font-size: 15px;
    }

    .sun {
      width: 180px;
      height: 180px;

      opacity: 0.12;
    }

    .cloud {
      display: none;
    }

    .actions button {
      padding: 16px 24px;
      font-size: 14px;
    }
  }
`;

export default FirstSections;
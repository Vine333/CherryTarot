import React from "react";
import styled from "styled-components";
import { Typewriter } from 'react-simple-typewriter';

const Footer = ({ openModal }) => {
    return (
        <Wrapper>

            <div className="cta">
                <h2>
                    Готова узнать, <br />
                    что говорят карты?
                </h2>

                <a href="#price" onClick={openModal}>
                    Получить расклад ✨
                </a>
            </div>

            <div className="footer-inner">

                <div className="brand">
                    <h2>
                        WitchCherry <span className='taro'>Taro</span>
                    </h2>

                    {/* <div className={'running'}>
                        <Typewriter
                            words={[
                                "Карты знают больше, чем кажется...",
                                "Судьба уже приготовила ответ...",
                                "Будущее открывается через карты...",
                                "Любовь оставляет знаки...",
                                "Карты раскроют скрытое...",
                            ]}
                            loop={0}
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </div> */}
                </div>

                <div className="links">
                    <h3>Навигация</h3>
                    <a href="#">Главная</a>
                    <a href="#price">Расклады</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contacts">Контакты</a>
                </div>

                <div className="contacts">
                    <h3>Контакты</h3>

                    <a
                        href="https://t.me/witch_cherryy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Telegram
                    </a>

                    <a
                        href="https://www.instagram.com/direct/t/17842144262593546"
                        target="_blank"

                    >
                        Instagram
                    </a>
                </div>
            </div>

            <div className="bottom">
                <p>© 2026 WitchCherryTaro</p>
                <p>made with intuition ✦</p>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 40px 70px 25px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  color: #f5e9dc;

  background:
          radial-gradient(circle at 20% 20%, rgba(185, 28, 28, 0.22), transparent 30%),
          linear-gradient(180deg, #160606, #050202);

  .footer-inner {
    max-width: 1300px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 70px;

    position: relative;
    z-index: 2;
  }

  .brand {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .brand h2,
  .taro {
    font-size: 42px;
    margin: 0;
    letter-spacing: 4px;
  }

  .taro {
    color: red;
  }

  .running {
    font-size: 18px;
    color: rgba(245, 233, 220, 0.7);
    line-height: 1.7;
  }

  h3 {
    margin: 0 0 22px;
    font-size: 22px;
    color: #fff4ea;
  }

  .links,
  .contacts {
    display: flex;
    flex-direction: column;
  }

  a {
    color: rgba(245, 233, 220, 0.68);
    text-decoration: none;
    margin-bottom: 14px;
    transition: 0.3s;
  }

  a:hover {
    color: #ef4444;
    text-shadow: 0 0 18px rgba(239, 68, 68, 0.55);
    transform: translateX(5px);
  }

  .cta {
    max-width: 1300px;
    margin: 0 auto 40px;

    padding: 48px;
    border-radius: 34px;

    background: rgba(120, 15, 15, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(12px);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    position: relative;
    z-index: 2;
  }

  .cta h2 {
    margin: 0;
    font-size: 46px;
    line-height: 1.1;
  }

  .cta a {
    margin: 0;
    padding: 17px 34px;

    border-radius: 999px;

    background: linear-gradient(135deg, #8f1414, #dc2626);

    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;

    box-shadow: 0 0 35px rgba(220, 38, 38, 0.4);
  }

  .cta a:hover {
    transform: translateY(-4px);
  }

  .bottom {
    max-width: 1300px;
    margin: 0 auto;

    padding-top: 26px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;
    justify-content: space-between;

    color: rgba(245, 233, 220, 0.45);

    position: relative;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    padding: 50px 25px 20px;

    .footer-inner {
      grid-template-columns: 1fr;
      gap: 45px;
      text-align: center;
    }

    .brand,
    .links,
    .contacts {
      align-items: center;
    }

    .cta {
      flex-direction: column;
      text-align: center;
      padding: 35px 25px;
    }

    .cta h2 {
      font-size: 34px;
    }

    .bottom {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 35px 12px 18px;

    .footer-inner {
      gap: 35px;
    }

    .brand h2,
    .taro {
      font-size: 32px;
      text-align: center;
    }

    .running {
      font-size: 15px;
      text-align: center;
    }

    .links h3,
    .contacts h3 {
      font-size: 24px;
      margin-bottom: 14px;
    }

    .links a,
    .contacts a {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .cta {
      padding: 25px 18px;
      border-radius: 24px;
      gap: 20px;
    }

    .cta h2 {
      font-size: 26px;
      line-height: 1.3;
      text-align: center;
    }

    .cta a {
      width: 100%;
      max-width: 320px;

      text-align: center;

      padding: 15px 20px;

      font-size: 14px;
      letter-spacing: 1px;
    }

    .bottom {
      padding-top: 18px;
    }

    .bottom p {
      font-size: 13px;
      margin: 0;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 10px 16px;

    .brand h2,
    .taro {
      font-size: 28px;
    }

    .cta h2 {
      font-size: 22px;
    }

    .cta a {
      font-size: 13px;
      padding: 14px 16px;
    }

    .links h3,
    .contacts h3 {
      font-size: 22px;
    }

    .links a,
    .contacts a {
      font-size: 15px;
    }
  }
`;

export default Footer;
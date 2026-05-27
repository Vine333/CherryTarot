import React from "react";
import styled from "styled-components";
import {Typewriter} from 'react-simple-typewriter'

const Footer = ({openModal}) => {
    return (<Wrapper>


        <div className="cta">
            <h2>
                Готова узнать, <br/>
                что говорят карты?
            </h2>

            <a href="#price" onClick={openModal}> Получить расклад ✨</a>
        </div>

        <div className="footer-inner">

            <div className="brand">
                <h2>WitchCherry <span className='taro'>Taro</span></h2>
                   {/*<div className={'running'}> <Typewriter*/}
                   
                   {/*    words={["Карты знают больше, чем кажется...", "Судьба уже приготовила ответ...", "Будущее открывается через карты...", "Любовь оставляет знаки...", "Карты раскроют скрытое...",]}*/}
                   {/*    loop={0}*/}
                   
                   
                   {/*    typeSpeed={90}*/}
                   {/*    deleteSpeed={50}*/}
                   
                   {/*    delaySpeed={1500}*/}
                   
                   {/*/></div>*/}


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
                <a href="https://t.me/witch_cherryy" target="_blank">Telegram</a>
                <a href="https://www.instagram.com/direct/t/17842144262593546/" target="_blank">Instagram</a>

            </div>
        </div>



        <div className="bottom">
            <p>© 2026 WitchCherryTaro</p>
            <p>made with intuition ✦</p>
        </div>
    </Wrapper>);
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 30px 70px ;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  color: #f5e9dc;
  background: radial-gradient(circle at 20% 20%, rgba(185, 28, 28, 0.22), transparent 30%),
  linear-gradient(180deg, #160606, #050202);

  .glow {
    position: absolute;
    right: -180px;
    top: -180px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(185, 28, 28, 0.35);
    filter: blur(80px);
  }

  .footer-inner {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 70px;
    position: relative;
    z-index: 2;
  }
.taro,
  .brand h2 {
    font-size: 42px;
    margin: 0 0 8px;
    letter-spacing: 4px;
  }
.taro{
  color: red;
}
  .brand p {
    color: #c2410c;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 26px;
  }

  .brand-charry {
    display: block;
    max-width: 480px;
    font-size: 18px;
    line-height: 1.8;
    color: rgba(245, 233, 220, 0.7);
    height: 50px;
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
    margin-bottom: 40px;
    padding: 48px;
    border-radius: 34px;
    background: rgba(120, 15, 15, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  @media (max-width: 900px) {
    padding: 80px 24px 30px;

    .footer-inner {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .cta {
      flex-direction: column;
      justify-content: center;
      gap: 28px;
      padding: 32px;
    }

    .cta h2 {
      font-size: 34px;
    }

    .bottom {
      flex-direction: column;
      gap: 8px;
    }
  }
  @media (max-width: 769px) {
    .footer-inner {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 55px;
       
      }

      //span {
      //  font-size: 28px;
      //}
    }
.running{
  font-size: 28px;
}
    .links {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h3{
        font-size: 45px;
      }
      a{
        font-size: 28px;
      }
    }

    .contacts {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h3{
        font-size: 45px;
      }
      a{
        font-size: 28px;
      }
    }
    .taro{
      font-size: 55px;
      text-align: left;
     margin-left: -17px;
      color: red;
    }
  }

  .brand-charry {
    font-size: 28px;
    margin-bottom: 100px;
    margin-top: 16px;
    text-align: center;
  }

  .brand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  
`;

export default Footer;
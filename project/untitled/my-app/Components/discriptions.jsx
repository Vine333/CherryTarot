import React from 'react';
import styled from "styled-components";

const Discriptions = () => {
    return (<Wrapper>
            <div className='container'>

                <div className='left'>
                    <span className='subtitle'>Обо Мне</span>

                    <h2>
                        Таро с глубиной <br/>
                        и пониманием
                    </h2>

                    <p>
                         Твой таролог с психологическим подходом <br/>
                         Выслушаю, поддержу и помогу разобраться в чувствах<br/>
                         После расклада ты не останешься наедине с мыслями<br/>
                         Оплата доступна в леях, рублях ПМР и рублях РФ<br/>
                         Расклады с глубиной, интуицией и пониманием<br/>
                    </p>

                    <p>
                        Расклады помогают увидеть скрытые эмоции,
                        причины происходящего и возможное развитие событий.
                    </p>
                </div>

                <div className='right'>
                    <div className='card'>
                        <span>🍷</span>
                        <h3>Интуиция</h3>
                    </div>

                    <div className='card'>
                        <span>🌙</span>
                        <h3>Глубина</h3>
                    </div>

                    <div className='card'>
                        <span>🃏</span>
                        <h3>Таро</h3>
                    </div>
                </div>

            </div>
        </Wrapper>);
};

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 70px;
  position: relative;
  z-index: 5;
  color: #f5e9dc;

  .container {
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 80px;
    align-items: center;
  }

  .left {
    max-width: 700px;
  }

  .subtitle {
    color: #c2410c;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 14px;
  }

  h2 {
    font-size: 72px;
    line-height: 1.1;
    margin: 20px 0 35px;
  }

  p {
    font-size: 22px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 25px;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-width: 320px;
    margin-right: 70px;
  }

  .card {
    background: rgba(120, 15, 15, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    padding: 30px;

    backdrop-filter: blur(12px);

    transition: 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 35px rgba(180, 20, 20, 0.35);
  }

  .card span {
    font-size: 34px;
    display: block;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 30px;
  }


  @media (max-width: 1000px) {
   

    .container {
      flex-direction: column;
    }

    h2 {
      font-size: 52px;
    }

    p {
      font-size: 18px;
    }

    .right {
      width: 100%;
    }
  }
  @media (max-width: 769px) {
    .section{
      padding: 70px;
    }
p{
  font-size: 28px;
  align-items: center;
}
   
    
    h2{
      font-size: 55px;
    }
    .right {

      margin: 0;
    }

    .left {
      align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .card {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: center;
    }

    .subtitle {
      font-size: 20px;
    }
  }

`;

export default Discriptions;
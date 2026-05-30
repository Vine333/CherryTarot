import React from "react";
import styled from "styled-components";
import burger from '/img/burger.png'
import first from "/img/first.png";
import second from "/img/second.png";
import treti from "/img/tertia.png";
import chet from "/img/chetver.png";
import pyat from '/img/5.png'
import shest from '/img/6.png'
import sem from '/img/7.png'
import vosem from '/img/8.png'
import devyat from '/img/9.png'
import desat from '/img/10.png'
import odinatsat from '/img/11.png'
import dvenatsat from '/img/12.png'


const spreads = [
    {
        title: "Прайс вопросов",
        img: burger,
        prices: {
            RUB: "от 150 ₽",
            MDL: "от 33 MDL",
            PRB: "от 33 ₽",
        },
        questions: {
            RUB: [
                "1 вопрос — 150 ₽",
                "2 вопроса — 250 ₽",
                "3 вопроса — 350 ₽",
                "4 вопроса — 450 ₽",
                "5 вопросов — 550 ₽",
                "6 вопросов — 650 ₽",
                "7 вопросов — 750 ₽",
                "8 вопросов — 850 ₽",
                "9 вопросов — 950 ₽",
                "10 вопросов — 1050 ₽",
            ],
            MDL: [
                "1 вопрос — 33 MDL",
                "2 вопроса — 55 MDL",
                "3 вопроса — 77 MDL",
                "4 вопроса — 99 MDL",
                "5 вопросов — 122 MDL",
                "6 вопросов — 144 MDL",
                "7 вопросов — 166 MDL",
                "8 вопросов — 188 MDL",
                "9 вопросов — 211 MDL",
                "10 вопросов — 233 MDL",
            ],
            PRB: [
                "1 вопрос — 33 ₽",
                "2 вопроса — 55 ₽",
                "3 вопроса — 77 ₽",
                "4 вопроса — 99 ₽",
                "5 вопросов — 122 ₽",
                "6 вопросов — 144 ₽",
                "7 вопросов — 166 ₽",
                "8 вопросов — 188 ₽",
                "9 вопросов — 211 ₽",
                "10 вопросов — 233 ₽",
            ],
        },
    },
    {
        title: "Как там бывшая?",
        img: first,
        prices: {
            RUB: "950 ₽",
            PRB: "211 ₽",
            MDL: "211 MDL",
        },
        questions: [
            "Чувства бывшего к тебе",
            "Мысли бывшего о тебе",
            "Его личная жизнь сейчас",
            "Какие события происходят с ним?",
            "Ближайшее будущее бывшего",
            "Что он хотел бы сказать тебе?",
        ],
    },

    {
        title: "Тишина",
        img: second,
        prices: {
            RUB: "650 ₽",
            PRB: "144 ₽",
            MDL: "144 MDL",
        },
        questions: [
            "Мысли человека о тебе в данный момент",
            "Почему не проявляется?",
            "Что будет, если проявиться первой/первым?",
            "Проявится ли человек в ближайшее время",
            "Намерения человека на тебя",
            "Совет",
        ],
    },
    {
        title: "Развитие отношений",
        img: treti,
        prices: {
            RUB: "650 ₽",
            PRB: "144 ₽",
            MDL: "144 MDL",
        },
        questions: [
            "Намерения человека на тебя",
            "Перспективы ваших отношений",
            "Какие проблемы могут возникнуть в этих отношениях?",
            "Как улучшить ваши отношения?",
            "Что партнёру не нравится в ваших отношениях?",
            "Совет",
        ],
    },
    {
        title: "Прогноз на год",
        img: chet,
        prices: {
            RUB: "650 ₽",
            PRB: "144 ₽",
            MDL: "144 MDL",
        },
        questions: [
            "Финансовая сфера",
            "Личная жизнь",
            "Взаимоотношения с друзьями / близкими",
            "Что нового придёт в твою жизнь?",
            "От чего придётся избавиться",
            "Совет на год для благоприятного развития событий",
        ],
    },
    {
        title: "Женатик",
        img: pyat,
        prices: {
            RUB: "850 ₽",
            PRB: "188 ₽",
            MDL: "188 MDL",
        },
        questions: [
            "Его чувства к тебе",
            "Его намерения на тебя",
            "Его чувства к жене / девушке",
            "Что происходит в его личной жизни на данный момент?",
            "Перспектива ваших отношений на полгода",
            "Перспектива его отношений с женой / девушкой на полгода",
        ],
    },
    {
        title: "Пауза или конец?",
        img: shest,
        prices: {
            RUB: "750 ₽",
            PRB: "166 ₽",
            MDL: "166 MDL",
        },
        questions: [
            "Скучает ли человек по тебе?",
            "Что он рассказывает о тебе другим?",
            "Мысли человека о тебе",
            "Испытывает ли чувство вины?",
            "Его намерения на тебя",
            "Как он ощущает себя без тебя?",
        ],
    },
    {
        title: "Твой любовный треугольник",
        img: sem,
        prices: {
            RUB: "750 ₽",
            PRB: "166 ₽",
            MDL: "166 MDL",
        },
        questions: [
            "Чувства первого человека к тебе",
            "Намерения первого человека на тебя",
            "Перспективы отношений с первым человеком",
            "Чувства второго человека к тебе",
            "Намерения второго человека на тебя",
            "Перспективы отношений со вторым человеком",
        ],
    },
    {
        title: "Стоит ли доверять человеку?",
        img: vosem,
        prices: {
            RUB: "550 ₽",
            PRB: "122 ₽",
            MDL: "122 MDL",
        },
        questions: [
            "Истинная причина ваших ссор",
            "Как человек видит нынешнюю ситуацию между вами?",
            "Что обоим стоит сделать для устранения ссор?",
            "Что человек скрывает от тебя?",
            "Совет",
            "Можно ли ему действительно доверять ?"
        ],
    },
    {
        title: "Отношение человека к тебе",
        img: devyat,
        prices: {
            RUB: "650 ₽",
            PRB: "144 ₽",
            MDL: "144 MDL",
        },
        questions: [
            "Чувства человека к тебе",
            "Мысли человека о тебе",
            "Намерения человека на тебя",
            "Как он тебя воспринимает?",
            "Как человек будет проявлять себя в ближайшее время?",
            "Перспектива ваших взаимоотношений",
        ],
    },
    {
        title: "Почему молчит?",
        img: desat,
        prices: {
            RUB: "750 ₽",
            PRB: "166 ₽",
            MDL: "166 MDL",
        },
        questions: [
            "Почему человек перестал к тебе проявляться / проявляется реже?",
            "Что будет, если проявишься первая / первый?",
            "Мысли человека о тебе сейчас",
            "Есть ли у него / неё кто-то на стороне?",
            "Будет ли человек проявляться к тебе в ближайшее время?",
            "Как будут развиваться ваши взаимоотношения?",
        ],
    },
    {
        title: "Кто ты для человека?",
        img: odinatsat,
        prices: {
            RUB: "1050 ₽",
            PRB: "233 ₽",
            MDL: "233 MDL",
        },
        questions: [
            "Твоя роль в жизни человека",
            "Его чувства к тебе",
            "Его мысли о тебе",
            "Его намерения на тебя",
            "Какая / какой ты в глазах человека?",
            "За какие качества ценит тебя?",
        ],
    },
    {
        title: "Здоровые отношения",
        img: dvenatsat,
        prices: {
            RUB: "450 ₽",
            PRB: "99 ₽",
            MDL: "99 MDL",
        },
        questions: [
            "Как прошлый опыт влияет на твоё нынешнее построение отношений?",
            "Какие установки и поведение мешают тебе создать крепкие и здоровые отношения?",
            "Что поможет тебе избавиться от блока и построить здоровые отношения?",
            "Совет",
        ],
    },
];


const Cards = ({currency}) => {

    return (
        <Wrapper>
            <div className="main">
                <div className="section-head">
                    <p>Выбери свой расклад</p>

                    <h2>Расклады</h2>

                    <div className="title-divider">
                        <span className="divider-line"></span>

                        <svg className="sakura-icon" viewBox="0 0 32 32">
                            <g fill="currentColor">
                                <path d="M16 14C12 9 13 4 16 2C19 4 20 9 16 14Z"/>
                                <path d="M18 15C23 11 28 12 30 15C28 18 23 19 18 15Z"/>
                                <path d="M17 18C22 22 22 27 19 30C16 28 14 23 17 18Z"/>
                                <path d="M15 18C12 23 7 25 4 22C5 18 10 16 15 18Z"/>
                                <path d="M14 15C9 17 4 15 2 12C5 9 10 10 14 15Z"/>
                                <circle cx="16" cy="16" r="2.2"/>
                            </g>
                        </svg>

                        <span className="divider-line"></span>
                    </div>
                </div>

                <div className="spreads-grid">
                    {spreads.map((spread, index) => (
                        <article
                            className="spread-card"
                            key={index}
                            style={{
                                background: `
                  linear-gradient(
                    180deg,
                    rgba(8,8,8,0.15) 0%,
                    rgba(8,8,8,0.55) 45%,
                    rgba(8,8,8,0.92) 100%
                  ),
                  url(${spread.img})
                `,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="hover-glow"></div>

                            <div className="card-frame"/>

                            <div className="spread-top">
                                <span>Расклад</span>
                            </div>

                            <h3>{spread.title}</h3>
                            <div className="questions">
                                {(Array.isArray(spread.questions)
                                        ? spread.questions
                                        : spread.questions[currency]
                                ).map((question, i) => (
                                    <div className="question" key={i}>
                                        <span>{question}</span>
                                    </div>
                                ))}
                            </div>


                            <div className="card-bottom">
                                <span>Стоимость расклада</span>

                                <b>{spread.prices[currency]}</b>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  z-index: 100;
  padding: 70px;

  .section-head {
    text-align: center;
    margin-bottom: 56px;
  }

  .title-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    margin: 14px auto 42px;
  }

  .divider-line {
    width: 135px;
    height: 1px;

    background: linear-gradient(90deg,
    transparent,
    rgba(135, 25, 25, 0.9));

    box-shadow: 0 0 8px rgba(140, 20, 20, 0.35);
  }

  .divider-line:last-child {
    background: linear-gradient(90deg,
    rgba(135, 25, 25, 0.9),
    transparent);
  }

  .sakura-icon {
    width: 19px;
    height: 19px;

    color: #7f1d1d;
    opacity: 0.9;

    filter: drop-shadow(0 0 6px rgba(150, 20, 20, 0.55));
  }

  .section-head p {
    margin: 0;
    color: #c48a8a;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 13px;
    font-weight: 700;
  }

  .section-head h2 {
    font-size: clamp(44px, 6vw, 76px);
    margin: 10px 0 0;
    color: #fff4ee;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 28px rgba(178, 25, 35, 0.55);
  }

  .spreads-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .spread-card {
    min-height: 460px;
    padding: 26px;
    border-radius: 26px;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    color: #fff4ee;

    display: flex;
    flex-direction: column;

    border: 1px solid rgba(220, 83, 88, 0.32);

    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.58),
    inset 0 0 0 1px rgba(255, 215, 190, 0.06),
    inset 0 0 42px rgba(150, 20, 30, 0.22);

    backdrop-filter: blur(18px);

    transition: transform 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;
  }

  .spread-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -3;

    opacity: 0.16;

    background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);

    background-size: 28px 28px;

    mask-image: linear-gradient(to bottom, black, transparent 78%);
  }

  .hover-glow {
    position: absolute;
    inset: 0;
    border-radius: 26px;
    background: radial-gradient(circle at top,
    rgba(255, 120, 120, 0.35),
    transparent 45%);

    opacity: 0;
    transition: opacity 0s;
    z-index: 0;
  }

  .spread-card:hover {
    transform: translateY(-14px) scale(1.02);
    transition: opacity 0s;
    border-color: rgba(255, 180, 180, 0.95);

    box-shadow: 0 45px 120px rgba(0, 0, 0, 0.78),
    0 0 40px rgba(255, 70, 70, 0.28),
    0 0 80px rgba(255, 120, 120, 0.16),
    inset 0 0 0 1px rgba(255, 240, 240, 0.14),
    inset 0 0 55px rgba(255, 70, 70, 0.18);
  }

  .spread-card:hover .hover-glow {
    opacity: 1;
  }

  .spread-card:hover h3 {
    color: #fff6f2;

    text-shadow: 0 0 12px rgba(255, 255, 255, 0.35),
    0 0 26px rgba(255, 120, 120, 0.65),
    0 0 42px rgba(255, 80, 80, 0.45);
  }

  .spread-card:hover .question {
    background: linear-gradient(145deg,
    rgba(255, 255, 255, 0.12),
    rgba(160, 40, 40, 0.24));

    border-color: rgba(255, 200, 200, 0.28);

    transform: translateY(-2px);
  }

  .spread-card:hover .card-bottom {
    border-color: rgba(255, 210, 210, 0.32);

    background: linear-gradient(90deg,
    rgba(25, 10, 12, 0.82),
    rgba(145, 28, 36, 0.58),
    rgba(25, 10, 12, 0.82));
  }

  .card-frame {
    position: absolute;
    inset: 12px;

    border-radius: 20px;

    border: 1px solid rgba(226, 118, 107, 0.24);

    pointer-events: none;

    transition: all 0.45s ease;
  }

  .spread-card:hover .card-frame {
    border-color: rgba(255, 220, 220, 0.45);

    box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.05),
    0 0 20px rgba(255, 90, 90, 0.25);
  }

  .spread-top {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .spread-top span {
    padding: 8px 12px;

    border: 1px solid rgba(255, 185, 165, 0.22);

    border-radius: 999px;

    background: rgba(255, 238, 224, 0.05);

    color: #d7aaa0;

    text-transform: uppercase;

    letter-spacing: 2.6px;

    font-size: 11px;

    font-weight: 800;
  }

  .spread-card h3 {
    margin: 48px 0 28px;

    max-width: 86%;

    position: relative;
    z-index: 1;

    font-size: clamp(27px, 2.4vw, 38px);

    line-height: 0.95;

    color: #fff2e8;

    text-transform: uppercase;

    letter-spacing: 1.5px;

    transition: all 0.45s ease;

    text-shadow: 0 0 18px rgba(255, 74, 82, 0.22),
    0 2px 0 rgba(0, 0, 0, 0.38);
  }

  .questions {
    display: grid;
    gap: 12px;

    position: relative;
    z-index: 1;

    margin-top: auto;
  }

  .question {
    min-height: 76px;

    padding: 15px;

    border-radius: 16px;

    display: flex;
    align-items: center;

    background: linear-gradient(145deg,
    rgba(255, 239, 222, 0.12),
    rgba(126, 20, 26, 0.14)),
    rgba(15, 7, 9, 0.42);

    border: 1px solid rgba(255, 196, 175, 0.16);

    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 14px 28px rgba(0, 0, 0, 0.22);

    transition: all 0.35s ease;
  }

  .question span {
    color: rgba(255, 244, 236, 0.92);

    font-size: 14px;

    line-height: 1.25;

    font-weight: 800;

    text-transform: uppercase;
  }

  .card-bottom {
    margin-top: 18px;

    padding: 15px 16px;

    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 18px;

    background: linear-gradient(90deg,
    rgba(17, 7, 9, 0.78),
    rgba(104, 16, 22, 0.5),
    rgba(17, 7, 9, 0.78));

    border: 1px solid rgba(255, 160, 140, 0.24);

    transition: all 0.45s ease;
  }

  .card-bottom span {
    color: #b98b8b;

    font-size: 11px;

    font-weight: 900;

    letter-spacing: 2px;

    text-transform: uppercase;
  }

  .card-bottom b {
    color: #ffe2d7;

    font-size: 22px;

    white-space: nowrap;

    text-shadow: 0 0 16px rgba(255, 65, 76, 0.35);
  }

  @media (max-width: 1100px) {
    padding: 56px 34px;

    .spreads-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    padding: 42px 18px;

    .spreads-grid {
      grid-template-columns: 1fr;
    }

    .questions {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 426px) {
    .spread-card h3 {
      font-size: clamp(23px, 2.4vw, 38px);
      max-width: 100%;
      letter-spacing: 0.3px;
      text-align: center;


    }

    .spread-card {
      justify-content: center;
    }
  }
`;

export default Cards;
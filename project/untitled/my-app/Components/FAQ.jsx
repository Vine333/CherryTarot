import React from "react";
import styled from "styled-components";

const faqData = [
    {
        question: "Как проходит расклад?",
        answer:
            "После оплаты ты отправляешь свой вопрос или ситуацию. Я делаю расклад и отправляю подробный разбор с объяснением карт и советами."
    },
    {
        question: "Нужно ли отправлять фото?",
        answer:
            "Нет, фото не обязательно. Достаточно имени или описания ситуации."
    },
    {
        question: "Сколько ждать ответ?",
        answer:
            "Обычно расклад готов в течение 1–24 часов, в зависимости от загруженности."
    },
    {
        question: "Можно ли задать несколько вопросов?",
        answer:
            "Да, но лучше выбирать расклад под конкретную ситуацию для более точного ответа."
    },
    {
        question: "Какие темы можно смотреть?",
        answer:
            "Отношения, чувства, будущее, выбор, внутреннее состояние, предназначение, жизненные ситуации."
    },
    {
        question: "Это анонимно?",
        answer:
            "Да. Все консультации полностью конфиденциальны."
    }
];

const FAQ = () => {
    return (
        <Wrapper>
            <div className="title-block">
                <p></p>
                <h2>Частые вопросы</h2>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div className="faq-card" key={index}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    padding: 120px 70px;
    position: relative;
    z-index: 5;

    .title-block {
        text-align: center;
        margin-bottom: 70px;
    }

    .title-block p {
        color: #c2410c;
        letter-spacing: 6px;
        text-transform: uppercase;
        margin-bottom: 10px;
        font-size: 14px;
    }

    .title-block h2 {
        font-size: 72px;
        color: #f5e9dc;
        margin: 0;
    }

    .faq-list {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .faq-card {
        background: rgba(120, 15, 15, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 28px;
        padding: 30px;
        backdrop-filter: blur(10px);
        transition: 0.3s ease;
    }

    .faq-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 120, 120, 0.3);
        box-shadow: 0 0 30px rgba(180, 20, 20, 0.25);
    }

    .faq-card h3 {
        color: #fff3e8;
        font-size: 28px;
        margin-bottom: 14px;
    }

    .faq-card p {
        color: rgba(255, 240, 240, 0.72);
        font-size: 18px;
        line-height: 1.7;
    }

    @media (max-width: 768px) {
        

        .title-block h2 {
            font-size: 60px;
        }

        .faq-card {
            padding: 24px;
        }

        .faq-card h3 {
            font-size: 30px;
        }

        .faq-card p {
            font-size: 20px;
        }
    }
`;

export default FAQ;
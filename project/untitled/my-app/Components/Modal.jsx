import React, { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ isOpen, closeModal }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [closeModal]);


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Overlay onClick={closeModal}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={closeModal}>
                    ✕
                </button>

                <div className="moon">☾</div>

                <h2>
                    Готова узнать,
                    <br />
                    что шепчут карты?
                </h2>

                <p>
                    Напиши мне в удобный мессенджер
                    <br />
                    и открой завесу судьбы ✨
                </p>

                <div className="socials">
                    <a
                        href="https://www.instagram.com/witch_cherryy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/img/instagram.png"
                            alt="Instagram"
                        />

                        <span>Instagram</span>
                    </a>

                    <a
                        href="https://t.me/witch_cherryy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/img/telegram.png"
                            alt="Telegram"
                        />

                        <span>Telegram</span>
                    </a>
                </div>
            </ModalBox>
        </Overlay>
    );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.82);

  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  z-index: 9999;

  overflow-y: auto;

  animation: fadeIn 0.35s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const ModalBox = styled.div`
  width: 100%;
  max-width: 460px;

  padding: 48px 40px;

  position: relative;

  overflow: hidden;

  border-radius: 30px;

  background:
          linear-gradient(
                  145deg,
                  #090909,
                  #160404,
                  #2a0505
          );

  border: 1px solid rgba(255, 0, 76, 0.18);

  box-shadow:
          0 0 35px rgba(255, 0, 76, 0.14),
          0 0 80px rgba(120, 0, 255, 0.12);

  text-align: center;

  animation: modalShow 0.4s ease;

  @keyframes modalShow {
    from {
      opacity: 0;
      transform: translateY(25px) scale(0.94);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &::before {
    content: "";

    position: absolute;

    width: 420px;
    height: 420px;

    top: -220px;
    left: -160px;

    background:
            radial-gradient(
                    circle,
                    rgba(255, 0, 90, 0.16),
                    transparent 70%
            );

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 220px;
    height: 220px;

    bottom: -100px;
    right: -80px;

    background:
            radial-gradient(
                    circle,
                    rgba(255, 40, 120, 0.12),
                    transparent 70%
            );

    filter: blur(20px);

    pointer-events: none;
  }

  .moon {
    font-size: 46px;

    color: #ffd7e1;

    margin-bottom: 14px;

    text-shadow:
            0 0 20px rgba(255, 255, 255, 0.28);
  }

  h2 {
    color: #fff5f5;

    font-size: clamp(24px, 4vw, 34px);

    line-height: 1.35;

    margin-bottom: 16px;

    font-weight: 600;

    letter-spacing: 0.5px;
  }

  p {
    color: #d7b9b9;

    font-size: clamp(14px, 2vw, 16px);

    line-height: 1.7;

    margin-bottom: 34px;
  }

  .socials {
    display: flex;
    gap: 18px;

    justify-content: center;

    flex-wrap: wrap;
  }

  .socials a {
    flex: 1 1 180px;

    min-width: 140px;
    max-width: 220px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    padding: 16px 18px;

    text-decoration: none;

    color: #fff;

    border-radius: 18px;

    background:
            rgba(255, 255, 255, 0.05);

    border:
            1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(8px);

    transition: 0.35s ease;
  }

  .socials a:hover {
    transform: translateY(-4px);

    background:
            rgba(255, 0, 98, 0.14);

    border:
            1px solid rgba(255, 0, 98, 0.25);

    box-shadow:
            0 0 25px rgba(255, 0, 98, 0.22),
            0 0 45px rgba(120, 0, 255, 0.12);
  }

  .socials img {
    width: 30px;
    height: 30px;

    object-fit: contain;
  }

  .socials span {
    font-size: 15px;
    font-weight: 500;

    letter-spacing: 0.4px;
  }

  .close {
    position: absolute;

    top: 16px;
    right: 16px;

    width: 40px;
    height: 40px;

    border: none;

    border-radius: 50%;

    background:
            rgba(255, 255, 255, 0.06);

    color: white;

    font-size: 18px;

    cursor: pointer;

    transition: 0.35s ease;

    z-index: 2;
  }

  .close:hover {
    background:
            rgba(255, 0, 98, 0.18);

    transform: rotate(90deg) scale(1.05);
  }

  

  @media (max-width: 768px) {
    padding: 42px 28px;

    border-radius: 24px;

    .moon {
      font-size: 40px;
    }

    h2 {
      margin-bottom: 14px;
    }

    p {
      margin-bottom: 28px;
    }

    .socials {
      gap: 14px;
    }

    .socials a {
      padding: 15px 16px;
    }
  }

  

  @media (max-width: 480px) {
    padding: 38px 22px;

    border-radius: 22px;

    .moon {
      font-size: 36px;

      margin-bottom: 10px;
    }

    h2 {
      font-size: 24px;

      line-height: 1.4;
    }

    p {
      font-size: 14px;

      line-height: 1.6;

      margin-bottom: 24px;
    }

    .socials {
      flex-direction: column;
    }

    .socials a {
      width: 100%;

      max-width: 100%;

      min-width: unset;
    }

    .socials img {
      width: 26px;
      height: 26px;
    }

    .socials span {
      font-size: 14px;
    }

    .close {
      width: 36px;
      height: 36px;

      font-size: 16px;

      top: 12px;
      right: 12px;
    }
  }

  

  @media (max-width: 360px) {
    padding: 34px 18px;

    h2 {
      font-size: 21px;
    }

    p {
      font-size: 13px;
    }

    .socials a {
      padding: 14px;
    }
  }
`;

export default Modal;
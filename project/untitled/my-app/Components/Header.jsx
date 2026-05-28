import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dropdown, Space } from "antd";
import burgerBg from "/img/burger.png";

const Header = ({ currency, setCurrency }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const items = [
        {
            label: (
                <span onClick={() => setCurrency("PRB")}>
                    PRB
                </span>
            ),
            key: "0",
        },
        {
            label: (
                <span onClick={() => setCurrency("MDL")}>
                    MDL
                </span>
            ),
            key: "1",
        },
        {
            label: (
                <span onClick={() => setCurrency("RUB")}>
                    RUB
                </span>
            ),
            key: "2",
        },
    ];

    return (
        <Wrapper className={scrolled ? "scrolled" : ""}>
            <a href="#home" className="logo">
                WitchCherry<span>Taro</span>
            </a>

            <nav className={menuOpen ? "active" : ""}>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                    Главная
                </a>

                <a href="#price" onClick={() => setMenuOpen(false)}>
                    Прайс
                </a>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                    Обо мне
                </a>

                <a href="#faq" onClick={() => setMenuOpen(false)}>
                    FAQ
                </a>

                <a href="#contacts" onClick={() => setMenuOpen(false)}>
                    Контакты
                </a>

                <span className="currency-mobile">
                    {currency}
                </span>

                <div className="menu-decoration" />
            </nav>

            <div className="right-side">
                <Dropdown menu={{ items }} trigger={["click"]}>
                    <a
                        onClick={(e) => e.preventDefault()}
                        className="currency-dropdown"
                    >
                        <Space>{currency}</Space>
                    </a>
                </Dropdown>

                <div
                    className={`burger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            {menuOpen && (
                <div
                    className="backdrop"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;

  padding: 22px 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  transition: 0.35s ease;

  &.scrolled {
    background: rgba(10, 10, 10, 0.72);
    backdrop-filter: blur(14px);

    box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.35);
  }

  .logo {
    position: relative;
    z-index: 1002;

    text-decoration: none;

    font-size: 28px;
    font-weight: 700;

    letter-spacing: 4px;

    color: #fff5f5;

    text-shadow:
            0 0 25px rgba(255, 0, 90, 0.25);
  }

  .logo span {
    color: #ff1e56;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  nav a {
    position: relative;

    text-decoration: none;

    color: #c9a89f;

    font-size: 15px;
    font-weight: 500;

    letter-spacing: 1px;

    transition: 0.3s ease;
  }

  nav a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -6px;

    width: 0%;
    height: 1px;

    background: #ff3d6e;

    transition: 0.3s ease;
  }

  nav a:hover {
    color: #ffd6d6;
  }

  nav a:hover::after {
    width: 100%;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .currency-dropdown {
    border: 1px solid rgba(255, 255, 255, 0.08);

    background:
            linear-gradient(
                    135deg,
                    rgba(70, 0, 0, 0.95),
                    rgba(170, 0, 40, 0.95)
            );

    color: white;

    padding: 10px 16px;

    border-radius: 14px;

    cursor: pointer;

    font-size: 14px;
    font-weight: 600;

    transition: 0.3s ease;

    box-shadow:
            0 0 20px rgba(255, 0, 80, 0.22);

    display: flex;
    align-items: center;

    text-decoration: none;
  }

  .currency-dropdown:hover {
    transform: translateY(-2px);

    box-shadow:
            0 0 30px rgba(255, 0, 80, 0.4);

    color: white;
  }

  .currency-mobile {
    display: none;
  }

  .burger {
    width: 32px;
    height: 32px;

    display: none;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    position: relative;

    z-index: 1002;
  }

  .burger span {
    position: absolute;

    width: 30px;
    height: 2.5px;

    border-radius: 20px;

    background: white;

    transition:
            transform 0.35s ease,
            opacity 0.25s ease,
            background 0.35s ease;

    transform-origin: center;
  }

  .burger span:nth-child(1) {
    transform: translateY(-9px);
  }

  .burger span:nth-child(2) {
    transform: translateY(0);
  }

  .burger span:nth-child(3) {
    transform: translateY(9px);
  }

  .burger.active span:nth-child(1) {
    transform: rotate(45deg);
    background: #ff4b7d;
  }

  .burger.active span:nth-child(2) {
    opacity: 0;
  }

  .burger.active span:nth-child(3) {
    transform: rotate(-45deg);
    background: #ff4b7d;
  }

  .backdrop {
    position: fixed;
    inset: 0;

    background: rgba(0, 0, 0, 0.45);

    backdrop-filter: blur(4px);

    z-index: 998;
  }

  .menu-decoration {
    position: absolute;

    bottom: 40px;
    right: 40px;

    width: 140px;
    height: 140px;

    border-radius: 50%;

    background:
            radial-gradient(
                    circle,
                    rgba(255, 0, 80, 0.25),
                    transparent 70%
            );

    filter: blur(10px);
  }

  @media (max-width: 1100px) {
    padding: 20px 30px;

    .burger {
      display: flex;
    }

    nav {
      position: fixed;

      top: -100%;
      left: 0;

      width: 100%;
      height: 100vh;

      padding: 140px 40px 60px;

      background:
              linear-gradient(
                      rgba(0, 0, 0, 0.4),
                      rgba(0, 0, 0, 0.4)
              ),
              url(${burgerBg});

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      backdrop-filter: blur(10px);

      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 34px;

      transition: 0.9s ease;

      z-index: 1000;

      opacity: 0;
      visibility: hidden;
    }

    nav.active {
      top: 0;

      opacity: 1;
      visibility: visible;
    }

    nav a {
      font-size: 28px;

      color: #fff;

      text-transform: uppercase;

      letter-spacing: 3px;
    }

    nav a:hover {
      color: #ff4b7d;
    }

    .currency-mobile {
      display: block;

      margin-top: 20px;

      color: #ff4b7d;

      font-size: 22px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    padding: 18px 20px;

    .logo {
      font-size: 22px;
      letter-spacing: 2px;
    }

    nav a {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .logo {
      font-size: 18px;
    }

    .burger {
      width: 28px;
      height: 28px;
    }

    .burger span {
      width: 26px;
    }

    nav {
      padding: 120px 30px 50px;
    }

    nav a {
      font-size: 20px;
    }
  }
`;

export default Header;
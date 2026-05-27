import styled from "styled-components";

const SakuraLeaves = () => {
    return (
        <Petals>
            {Array.from({ length: 18 }).map((_, index) => (
                <span key={index} />
            ))}
        </Petals>
    );
};

const Petals = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;

  span {
    position: absolute;
    top: -40px;
    width: 20px;
    height: 15px;
    background: #f4a7b9;
    border-radius: 80% 20% 80% 20%;
    opacity: 0.75;
    animation: fall linear infinite;
    filter: blur(0.2px);
  }
    span:nth-child(1) { left: 5%; animation-duration: 10s; animation-delay: 0s; }
    span:nth-child(2) { left: 12%; animation-duration: 14s; animation-delay: 2s; }
    span:nth-child(3) { left: 20%; animation-duration: 11s; animation-delay: 4s; }
    span:nth-child(4) { left: 27%; animation-duration: 16s; animation-delay: 1s; }
    span:nth-child(5) { left: 35%; animation-duration: 13s; animation-delay: 3s; }
    span:nth-child(6) { left: 42%; animation-duration: 18s; animation-delay: 5s; }
    span:nth-child(7) { left: 50%; animation-duration: 12s; animation-delay: 0.5s; }
    span:nth-child(8) { left: 57%; animation-duration: 15s; animation-delay: 2.5s; }
    span:nth-child(9) { left: 64%; animation-duration: 10s; animation-delay: 6s; }
    span:nth-child(10) { left: 72%; animation-duration: 17s; animation-delay: 1.5s; }
    span:nth-child(11) { left: 80%; animation-duration: 13s; animation-delay: 4.5s; }
    span:nth-child(12) { left: 88%; animation-duration: 19s; animation-delay: 2s; }
    span:nth-child(13) { left: 94%; animation-duration: 12s; animation-delay: 7s; }
    span:nth-child(14) { left: 15%; animation-duration: 20s; animation-delay: 8s; }
    span:nth-child(15) { left: 31%; animation-duration: 14s; animation-delay: 6s; }
    span:nth-child(16) { left: 46%; animation-duration: 18s; animation-delay: 9s; }
    span:nth-child(17) { left: 67%; animation-duration: 16s; animation-delay: 5s; }
    span:nth-child(18) { left: 84%; animation-duration: 11s; animation-delay: 3s; }

    @keyframes fall {
        0% {
            transform: translateY(-40px) translateX(0) rotate(0deg);
            opacity: 0;
        }

        10% {
            opacity: 0.8;
        }

        50% {
            transform: translateY(50vh) translateX(80px) rotate(180deg);
        }

        100% {
            transform: translateY(110vh) translateX(-80px) rotate(360deg);
            opacity: 0;
        }
    }
`;

export default SakuraLeaves;
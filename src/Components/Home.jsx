import React from "react";
import launch from "../Assets/Images/launch.svg";
import scroll from "../Assets/Images/scroll-down.svg";

export default function Home({ content, refProperty, goTo }) {
  const onClickHandler = () => {
    goTo("contact");
  };

  return (
    <>
      <style>
        {`
          button.animated-button {
            padding: 15px 35px;
            font-size: 16px;
            background-color: #7040c2;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
            animation: pulse 1s infinite;
          }

          button.animated-button:hover {
            background-color: #2980b9;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.03);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <section className='home-section' ref={refProperty}>
        <div className='home-left'>
          <div className='home-hi'>
            <p>{content.hi}</p>
            <h1>Subhadip Kundu</h1>
            <p>{content.job}</p>
          </div>
          <div>
            <button className='animated-button' onClick={onClickHandler}>
              Click me!
            </button>
          </div>
        </div>
        <img src={launch} alt='Spaceship' />
      </section>
      <div className='scroll-down'>
        <img src={scroll} alt='Scroll down' />
      </div>
    </>
  );
}

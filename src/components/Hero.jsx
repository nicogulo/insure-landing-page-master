import React from 'react';
import Button from '../parts/Button';
import ImgHero from '../assets/images/image-intro-desktop.jpg';
import PatternLeft from '../assets/images/bg-pattern-intro-left-desktop.svg';
import PatternRight from '../assets/images/bg-pattern-intro-right-desktop.svg';

export default function Hero() {
  return (
    <div
      className="container  flex items-center items-stretchpx-4 mx-auto bg-violet-dark"
      style={{ height: 600 }}
    >
      <div className="flex flex-wrap">
        <div className="w-full px-36 flex-1">
          <div className="border-t-2 w-40 text-gray-light"></div>
          <h1 className="font-DM block my-4 text-gray-light text-xl  leading-none">
            Humanizing <br />
            <span>your insurance</span>
          </h1>
          <p className="font-Karla text-md text-gray-light">
            Get your life insurance coverage eaasier and faster. we blend our
            expertice and technology to help you find the plan that's right for
            you. Ensurance you and your loved ones are protected
          </p>
          <Button title="VIEW PLANS" />
          <div>
            <img
              src={PatternLeft}
              alt=""
              className="absolute -bottom-42 left-0 "
            />
          </div>
        </div>
        <div className="w-full pr-36 flex-1 ">
          <img src={ImgHero} alt="" className="absolute -bottom-12 " />
          <img
            src={PatternRight}
            alt=""
            className="absolute top-0 right-0 z-0"
          />
        </div>
      </div>
    </div>
  );
}

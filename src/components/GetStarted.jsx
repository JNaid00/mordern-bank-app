import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer animate-bounce `}
    >	
      <div
        className={`${styles.flexCenter} flex-col w-full h-full bg-primary rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium font-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain"></img>
        </div>
        <p className="font-poppins font-medium font-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

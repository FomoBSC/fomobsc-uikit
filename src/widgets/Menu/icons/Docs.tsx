import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <>
      <div style={{width: "18px", marginRight: "8px", position: "absolute"}}>
        <svg viewBox="0 0 24 24">
          <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z"/>
        </svg>
      </div>
      <div style={{width: "26px"}}>&nbsp;</div>
    </>
  );
};

export default Icon;

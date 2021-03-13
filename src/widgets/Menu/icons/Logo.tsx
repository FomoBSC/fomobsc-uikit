import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div style={{marginTop: "-5px"}}>
      <svg width="90" height="15" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.84622 12.4202V21.4622H0V0.529419H13.1869V3.19328H2.84622V9.75631" fill="white"/>
        <path d="M3.86514 9.75629H12.4712V12.4202H3.86514" fill="white"/>
        <path d="M15.6458 14.4538C15.6403 13.4698 15.8351 12.4949 16.2184 11.5882C16.5963 10.7137 17.1362 9.91825 17.8099 9.24371C18.8745 8.20073 20.2238 7.49447 21.6888 7.21343C23.1538 6.9324 24.6693 7.08909 26.0455 7.66387C26.9266 8.03766 27.7293 8.5736 28.4117 9.24371C29.0845 9.914 29.622 10.7071 29.9948 11.5798C30.3849 12.4847 30.5827 13.4604 30.5758 14.4454C30.5826 15.4385 30.3848 16.4224 29.9948 17.3361C29.6282 18.2098 29.0899 19.0012 28.4117 19.6639C27.7293 20.3319 26.9265 20.8651 26.0455 21.2353C24.6701 21.8111 23.1551 21.9692 21.6901 21.6897C20.2251 21.4101 18.8754 20.7054 17.8099 19.6639C17.132 18.9993 16.5913 18.2084 16.2184 17.3361C15.8363 16.4233 15.6415 15.4431 15.6458 14.4538ZM18.4836 14.4538C18.4761 15.1234 18.5873 15.7892 18.812 16.4202C19.0086 16.9904 19.3211 17.5139 19.7299 17.958C20.1383 18.3935 20.6349 18.7373 21.1867 18.9664C22.4218 19.4597 23.7998 19.4597 25.035 18.9664C25.5846 18.7378 26.0786 18.3939 26.4833 17.958C26.895 17.516 27.2078 16.9919 27.4012 16.4202C27.8388 15.1485 27.8388 13.7675 27.4012 12.4958C27.2122 11.9122 26.8991 11.3761 26.4833 10.9244C26.0786 10.4885 25.5846 10.1446 25.035 9.91598C23.7998 9.4227 22.4218 9.4227 21.1867 9.91598C20.6349 10.1451 20.1383 10.4889 19.7299 10.9244C19.3211 11.3684 19.0086 11.892 18.812 12.4622C18.5982 13.1037 18.5013 13.7782 18.5257 14.4538H18.4836Z" fill="white"/>
        <path d="M33.9189 7.45377H36.4451V9.63865H36.5041C36.6089 9.36449 36.7662 9.11331 36.9672 8.89915C37.2398 8.57555 37.5574 8.29257 37.9104 8.05881C38.3327 7.77232 38.7915 7.54341 39.2745 7.37814C39.8322 7.18478 40.4189 7.08814 41.0092 7.09243C41.9318 7.06145 42.8447 7.28848 43.6449 7.74789C44.3969 8.22516 45.0028 8.89961 45.3964 9.69747C45.8144 8.86184 46.4864 8.17946 47.3164 7.74789C48.0913 7.3245 48.9592 7.09931 49.8426 7.09243C50.7623 7.06132 51.6765 7.2455 52.512 7.63024C53.1663 7.94985 53.7262 8.43339 54.1372 9.0336C54.5517 9.62975 54.8384 10.3049 54.9793 11.0168C55.1324 11.7691 55.2086 12.5349 55.2066 13.3025V21.4622H52.4699V13.6555C52.4712 13.1439 52.4374 12.633 52.3688 12.126C52.3066 11.6693 52.161 11.2279 51.9394 10.8235C51.7174 10.4467 51.4011 10.134 51.0215 9.91596C50.5344 9.67036 49.992 9.55457 49.4468 9.57982C48.9251 9.53102 48.3994 9.61396 47.9183 9.82102C47.4371 10.0281 47.0158 10.3526 46.6932 10.7647C46.101 11.666 45.8066 12.7298 45.8511 13.8067V21.4622H43.1986V14.1344C43.2038 13.522 43.1672 12.91 43.0891 12.3025C43.0388 11.8028 42.899 11.3161 42.6765 10.8655C42.4885 10.4778 42.1972 10.1493 41.8344 9.91596C41.3538 9.66916 40.8165 9.55322 40.2766 9.57982C39.8024 9.58004 39.333 9.67431 38.8956 9.85713C38.4481 10.0477 38.0484 10.3347 37.7251 10.6975C37.3497 11.1114 37.0631 11.5975 36.883 12.126C36.6753 12.7922 36.5758 13.4873 36.5883 14.1849V21.4538H33.9189V7.45377Z" fill="white"/>
        <path d="M58.4823 14.4538C58.4755 13.4688 58.6733 12.4931 59.0634 11.5882C59.4302 10.7139 59.9619 9.91793 60.6296 9.24369C61.312 8.57358 62.1148 8.03764 62.9959 7.66386C64.883 6.88418 67.0032 6.88418 68.8904 7.66386C69.7721 8.03657 70.575 8.57264 71.2566 9.24369C71.924 9.91846 72.4607 10.7105 72.8397 11.5798C73.2269 12.4853 73.4219 13.461 73.4124 14.4454C73.422 15.4379 73.2271 16.4219 72.8397 17.3361C72.4669 18.2064 71.9294 18.9967 71.2566 19.6639C70.5718 20.3328 69.766 20.866 68.882 21.2353C66.9948 22.015 64.8746 22.015 62.9874 21.2353C62.1101 20.8667 61.3102 20.3364 60.6296 19.6723C59.9515 19.0096 59.4132 18.2181 59.0465 17.3445C58.6623 16.4296 58.4703 15.4457 58.4823 14.4538ZM61.3285 14.4538C61.321 15.1234 61.4322 15.7891 61.657 16.4202C61.8503 16.9918 62.1632 17.516 62.5748 17.958C62.9722 18.3909 63.4573 18.7347 63.9979 18.9664C65.2331 19.4597 66.6111 19.4597 67.8462 18.9664C68.398 18.7372 68.8947 18.3935 69.303 17.958C69.7118 17.5139 70.0243 16.9904 70.2209 16.4202C70.6584 15.1485 70.6584 13.7675 70.2209 12.4958C70.036 11.9158 69.732 11.3806 69.3283 10.9244C68.9199 10.4889 68.4233 10.1451 67.8715 9.91596C66.6363 9.42268 65.2583 9.42268 64.0232 9.91596C63.4735 10.1445 62.9795 10.4885 62.5748 10.9244C62.1632 11.3663 61.8503 11.8905 61.657 12.4622C61.4289 13.1011 61.3176 13.7756 61.3285 14.4538Z" fill="white"/>
        <path d="M77.4712 0.529396H84.7551C85.6083 0.52276 86.4583 0.633033 87.2814 0.857127C87.9949 1.05104 88.666 1.37591 89.2602 1.81511C89.8286 2.24612 90.2873 2.8046 90.5991 3.44536C90.9355 4.17171 91.1025 4.96468 91.0876 5.76469C91.1332 6.83699 90.7724 7.8871 90.0771 8.70587C89.3755 9.4877 88.4771 10.068 87.475 10.3865V10.4454C88.097 10.4794 88.705 10.6426 89.2602 10.9244C89.8037 11.2072 90.2892 11.5892 90.6918 12.0504C91.1056 12.5252 91.4333 13.0683 91.6602 13.6554C91.8993 14.2892 92.0192 14.9615 92.0138 15.6386C92.0352 16.5143 91.8354 17.3813 91.4328 18.1596C91.05 18.8768 90.5086 19.4975 89.8497 19.9748C89.1423 20.4854 88.3497 20.8667 87.5087 21.1008C86.5738 21.3595 85.6074 21.4868 84.6372 21.479H77.4712V0.529396ZM80.2921 9.24368H84.2078C84.715 9.24504 85.2207 9.18865 85.7151 9.07561C86.1648 8.98434 86.5897 8.7981 86.9614 8.5294C87.3146 8.27463 87.603 7.94076 87.8035 7.55461C88.0252 7.10583 88.1322 6.60929 88.115 6.10923C88.1268 5.31511 87.8416 4.54513 87.3151 3.94956C86.9874 3.62083 86.5911 3.3683 86.1545 3.20997C85.7178 3.05164 85.2515 2.99142 84.7888 3.0336H80.2921V9.24368ZM80.2921 19H84.5025C84.9827 18.9969 85.4617 18.9519 85.934 18.8655C86.4522 18.7754 86.9508 18.5963 87.4077 18.3361C87.8639 18.0591 88.2569 17.6899 88.5613 17.2521C88.8981 16.7144 89.0626 16.0871 89.0329 15.4538C89.0747 14.9134 88.9829 14.3711 88.7656 13.8744C88.5483 13.3777 88.2121 12.9418 87.7866 12.605C86.8236 11.9373 85.665 11.6091 84.4941 11.6723H80.2837L80.2921 19Z" fill="white"/>
        <path d="M96.7295 17.0924C97.2144 17.8269 97.8975 18.4095 98.7 18.7731C99.4762 19.1307 100.321 19.317 101.176 19.3193C101.666 19.3155 102.154 19.2419 102.624 19.1008C103.111 18.9557 103.57 18.7284 103.98 18.4286C104.382 18.138 104.718 17.7657 104.965 17.3361C105.232 16.8804 105.366 16.3595 105.352 15.8319C105.375 15.4858 105.318 15.139 105.185 14.8184C105.052 14.4978 104.847 14.212 104.586 13.9832C104.011 13.5264 103.365 13.166 102.675 12.916C101.908 12.6303 101.083 12.3529 100.148 12.0756C99.2598 11.8217 98.41 11.4486 97.6221 10.9664C96.8479 10.4838 96.1942 9.83142 95.7106 9.05883C95.1861 8.08548 94.9441 6.98544 95.0117 5.88236C95.024 5.21038 95.161 4.5465 95.4159 3.92438C95.6937 3.21181 96.1216 2.56705 96.6706 2.03362C97.3073 1.42061 98.0564 0.935601 98.8768 0.605048C99.9077 0.184801 101.014 -0.02108 102.127 5.58712e-06C103.239 -0.00340404 104.345 0.155129 105.411 0.470594C106.504 0.818407 107.464 1.48957 108.165 2.39496L105.858 4.4958C105.482 3.92217 104.959 3.46049 104.342 3.15967C103.653 2.82163 102.894 2.6517 102.127 2.66387C101.457 2.64243 100.788 2.74793 100.157 2.9748C99.6781 3.15716 99.2464 3.44432 98.8936 3.81513C98.5973 4.10903 98.3701 4.46494 98.2284 4.85715C98.1108 5.18674 98.0454 5.53265 98.0347 5.88236C98.011 6.25686 98.0679 6.63209 98.2015 6.98285C98.3351 7.3336 98.5424 7.65177 98.8094 7.91597C99.3657 8.41772 100.011 8.81106 100.713 9.07564C101.539 9.39934 102.383 9.67983 103.239 9.91597C104.119 10.1369 104.967 10.4672 105.765 10.8992C106.517 11.3147 107.169 11.8882 107.677 12.5798C108.234 13.4654 108.502 14.502 108.443 15.5462C108.458 16.4859 108.259 17.4168 107.862 18.2689C107.498 19.0524 106.969 19.7488 106.312 20.3109C105.628 20.8766 104.842 21.3072 103.997 21.5798C103.078 21.8805 102.117 22.0309 101.15 22.0252C99.8448 22.0328 98.5498 21.7903 97.3358 21.3109C96.1831 20.878 95.1822 20.1187 94.4559 19.1261L96.7295 17.0924Z" fill="white"/>
        <path d="M127.154 5.04204C126.566 4.27142 125.793 3.6615 124.905 3.26893C124.026 2.8656 123.069 2.6591 122.101 2.66389C121.029 2.64746 119.965 2.86448 118.985 3.29985C118.005 3.73523 117.131 4.37849 116.426 5.18489C115.73 5.97781 115.192 6.89629 114.843 7.89078C114.455 8.9687 114.264 10.1071 114.278 11.2521C114.273 12.3197 114.452 13.3802 114.809 14.3866C115.149 15.346 115.673 16.2306 116.35 16.9916C117.036 17.7481 117.874 18.3522 118.809 18.7647C119.855 19.1806 120.976 19.3724 122.101 19.3278C123.202 19.3533 124.292 19.0988 125.268 18.5883C126.185 18.0841 126.974 17.3769 127.575 16.521L129.975 18.3193C129.319 19.1802 128.505 19.9076 127.575 20.4622C126.839 20.9129 126.049 21.2713 125.225 21.5294C124.193 21.8521 123.116 22.0082 122.034 21.9916C120.486 22.0133 118.952 21.6889 117.546 21.042C116.272 20.4429 115.127 19.6007 114.177 18.563C113.236 17.5679 112.495 16.401 111.996 15.1261C111.509 13.8778 111.257 12.5499 111.255 11.2101C111.244 9.67574 111.524 8.15315 112.081 6.72271C112.581 5.40428 113.339 4.19867 114.312 3.17649C115.284 2.16218 116.461 1.36584 117.765 0.840356C119.177 0.270504 120.688 -0.0150848 122.211 2.00132e-05C123.619 0.0142486 125.012 0.299577 126.312 0.840356C127.607 1.34541 128.74 2.19385 129.587 3.29414L127.154 5.04204Z" fill="white"/>
      </svg>
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);

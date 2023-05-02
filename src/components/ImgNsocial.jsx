import React from "react";
import MyImage from "../assets/myImage.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

export default function ImgNsocial() {
  return (
    <div>
      <div>
        <img src={MyImage} width={200} />
        <div>
          <img scr={youtube} width={50} height={50} />
          <img scr={linkedin} width={50} height={50} />
          <img scr={instagram} width={50} height={50} />
          <img scr={github} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

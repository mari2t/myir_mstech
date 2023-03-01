import React, { useState } from "react";
import Description from "./Description";
import Items from "./Items";
import imgTopURL from "../../../public/img/saize.jpg";

export default function Body() {
  const [img, setImg] = useState(imgTopURL);
  const [text, setText] = useState(
    "mari2tです。よろしくお願いします🌱課題準備もかねてReact＋Tailwind CSSで作成してみました💻写真はサイゼリヤのランチです🥗starterコースで使って以来アイコンとかはこれにしています🥗"
  );
  return (
    <div className="flex justify-center ">
      <Items img={img} setImg={setImg} text={text} setText={setText} />
      <Description img={img} text={text} />
    </div>
  );
}

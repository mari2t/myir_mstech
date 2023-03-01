import React from "react";
import imgPastURL from "../../../public/img/past.jpg";
import imgNowURL from "../../../public/img/now.jpg";
import imgFutureURL from "../../../public/img/future.png";
import imgMstechURL from "../../../public/img/mstech.png";
import imgTopURL from "../../../public/img/saize.jpg";

export default function Items({ img, setImg, text, setText }) {
  let imgpath = "";
  let textValue = "";
  const onClickChange = (e) => {
    if (e.target.value === "過去") {
      imgpath = imgPastURL;
      textValue =
        "東京出身です。（こんな名前ですが😂）仕事で3年間広島に住んでいました。旅行が趣味で、コロナ前は国内をうろうろしていました👜静岡、山梨、福島は未踏の地なので行ってみたいです🚄";
      setImg(imgpath);
      setText(textValue);
    } else if (e.target.value === "現在") {
      imgpath = imgNowURL;
      textValue =
        "工学部→技術職で新卒から同じ会社にいますが将来のキャリアを模索中です🫠5歳の息子がいます。Robloxが好きでたまに一緒にやっています🎮好きなものはサイゼリヤ、ル・ポールのドラァグ・レースです😍";
      setImg(imgpath);
      setText(textValue);
    } else if (e.target.value === "未来") {
      imgpath = imgFutureURL;
      textValue =
        "人生を通して好奇心を持つこと、健康であることが目標です🚩成し遂げたいことは息子を育てきること(直近目標はひらがなを覚えさせる👀）野望は家を買って一人暮らしをすることです🏠";
      setImg(imgpath);
      setText(textValue);
    } else if (e.target.value === "mstech") {
      imgpath = imgMstechURL;
      textValue =
        "starterコースは2022/09～の4期を受講しました。Ms.Techの卒業時点では自分の作りたいものが作れるようになったり仕事の選択肢を増やせていたらいいなと思います🌱";
      setImg(imgpath);
      setText(textValue);
    } else if (e.target.value === "start") {
      imgpath = imgTopURL;
      textValue =
        "mari2tです。よろしくお願いします🌱課題準備もかねてReact＋Tailwind CSSで作成してみました💻写真はサイゼリヤのランチです🥗starterコースで使って以来アイコンとかはこれにしています🥗";
      setImg(imgpath);
      setText(textValue);
    }
  };
  return (
    <div className="columns-1 text-center w-1/4 ">
      <div className="mt-5   bg-green-100 ml-5 mr-5 rounded-md min-h-full">
        <button
          className="m-6 drop-shadow-md hover:bg-green-900 bg-green-600  text-white font-bold rounded-full w-36 h-10 text-center text-3xl"
          onClick={onClickChange}
          value="過去"
        >
          過去
        </button>
        <h3 className="text-center text-2xl font-bold">東京、広島、旅行…</h3>
        <button
          className="m-6 drop-shadow-md hover:bg-green-900 bg-green-600  text-white font-bold rounded-full w-36 h-10 text-center text-3xl"
          onClick={onClickChange}
          value="現在"
        >
          現在
        </button>
        <h3 className="text-center text-2xl font-bold">
          会社員、子供、好きなもの…
        </h3>
        <button
          className="m-6 drop-shadow-md hover:bg-green-900 bg-green-600  text-white font-bold rounded-full w-36 h-10 text-center text-3xl"
          onClick={onClickChange}
          value="未来"
        >
          未来
        </button>
        <h3 className="text-center text-2xl font-bold">
          こうなりたい、成し遂げたい、野望…
        </h3>
        <button
          className="m-6 drop-shadow-md hover:bg-green-900 bg-green-600  text-white font-bold rounded-full w-36 h-10 text-center text-3xl"
          onClick={onClickChange}
          value="mstech"
        >
          Ms.Tech
        </button>
        <h3 className="text-center text-2xl font-bold">starter、現状、計画…</h3>
        <button
          className="mt-8 drop-shadow-md hover:bg-green-900 bg-green-600  text-white font-bold rounded-full w-32 h-10 text-center text-xl"
          onClick={onClickChange}
          value="start"
        >
          最初へ戻る
        </button>
      </div>
    </div>
  );
}

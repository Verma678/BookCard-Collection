import { Link } from "react-router-dom";
import LikeImage from "./like.png";
import DislikeImage from "./dislike.png";
import Country from "./kyrgyzstan.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import "./index.css";

function Card(props) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  function getRandomImage() {
    const image = Math.floor(Math.random() * images.length);
    return image;
  }
  return (
    <Link to={`/card/${props.id}`} className="book-card">
      <div
        id="box1"
        style={{ backgroundImage: `url(${images[getRandomImage()]})` }}
      >
        <div id="box2">
          <p className="header">Posts</p>
          <div id="last">{props.title}</div>

          <div className="wrappers">
            <div className="top">
              <div className="like-icon">
                <img
                  src={LikeImage}
                  width="30px"
                  height="30px"
                  alt="like_img"
                ></img>
                <div className="likes">{props.likes}</div>
              </div>
              <div className="dislike-icon">
                <img
                  src={DislikeImage}
                  width="30px"
                  height="30px"
                  alt="dislike_img"
                ></img>
                <div className="dislikes">{props.dislikes}</div>
              </div>
            </div>
            <div className="bottom">
              <img
                src={Country}
                width="30px"
                height="30px"
                alt="country_img"
              ></img>
              <div className="tag1">{props.tags[0]}</div>
              <div className="tag2">{props.tags[1]}</div>
              <div className="tag3">{props.tags[2]}</div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://www.fintechfutures.com/files/2021/08/Coinbase-Logo.png"
        alt="coinbase_logo"
        width="50px"
        height="50px"
        className="coin"
      ></img>
    </Link>
  );
}

export default Card;

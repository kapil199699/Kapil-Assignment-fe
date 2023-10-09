import React, { useEffect, useState } from "react";
import "./latestVideos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const LatestVideos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/latestVideo");
    if (response.ok) {
      let latestVideodata = await response.json();
      setData(latestVideodata);
    } else {
      let message = await response.json();
      alert(message);
    }
  };

  let leftData = [
    {
      id: 1,
      mainImage:
        "https://im.indiatimes.in/content/2023/Oct/Fb-Thumb1_651ee38f8142c.jpg?w=1044&h=600&cc=1",
      image:
        "https://im.indiatimes.in/section/2022/Jun/600x900_shorts-copy_62bc10196cbff.jpg?w=90&h=135&cc=1",
      leftHeading: "Crypto & Mindfulness Ft. Navin Gupta",
      leftText:
        "Be it with mindfulness, meditation or his unique work ethics, Navin Gupta, MD for South Asia and MENA at Ripple Global, is setting an example amidst the usual stereotypes surrounding the crypto community. Listen to him discuss valuable industry insights with.",
    },
  ];

  return (
    <div>
      <div className="latest-videos">
        {leftData.map((item) => (
          <div className="latest-videos-left" key={item.id}>
            <div className="lvVideo">
              <img src={item.mainImage} alt="" />
            </div>
            <div className="lvText">
              <div className="upper-text">
                <div className="upper-text-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="upper-text-text">
                  <h3>{item.leftHeading}</h3>
                </div>
              </div>
              <div className="lower-text">
                <p>{item.leftText}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="latest-videos-right">
          <div className="up-next">
            <div className="up-next-heading">
              <div className="up-next-text">Up Next</div>
              <div className="up-next-line"></div>
            </div>

            <div className="up-next-data-sec">
              {data.map((item) => (
                <>
                  <div className="up-next-data" key={item.id}>
                    <div className="up-next-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <span className="up-next-save">
                        <FontAwesomeIcon icon={faBookmark} />
                      </span>
                    </div>
                    <div className="up-next-img">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <hr className="hr" />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;

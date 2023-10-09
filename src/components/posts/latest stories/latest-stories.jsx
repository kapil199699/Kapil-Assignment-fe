import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./latest-stories.css";
import { useEffect, useState } from "react";

const LatestStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/latestStory");
    if (response.ok) {
      let latestStorydata = await response.json();
      setData(latestStorydata);
    } else {
      let message = await response.json();
      alert(message);
    }
  };

  return (
    <div className="latest-post">
      {data.map((item) => (
        <div className="post" key={item.id}>
          <div className="post-img">
            <img src={item.image} alt=""/>
          </div>
          <div className="post-text">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <div className="post-bottpm">
              <div className="time">{item.time}</div>
              <div className="save">
                <FontAwesomeIcon icon={faBookmark} size="2x" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestStories;

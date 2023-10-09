import "./onHoverComponent.css";
import LatestStories from "../posts/latest stories/latest-stories";

const HoverComponent = () => {
  let data = [
    {
      id: 1,
      list: "India",
    },
    {
      id: 2,
      list: "World",
    },
    {
      id: 3,
      list: "Sports",
    },
    {
      id: 4,
      list: "Weird",
    },
  ];
  return (
    <div className="hover-component">
      <div className="sidebar">
        {data.map((item) => (
          <div className="sidebar-list" key={item.id}>
            <li>{item.list}</li>
          </div>
        ))}
      </div>
      <div className="stories">
        <LatestStories />
      </div>
    </div>
  );
};

export default HoverComponent;

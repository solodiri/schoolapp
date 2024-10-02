import "./courses.css";
import { data } from "../../data";
import { useState } from "react";
import Comp from "../compo/comp";
import { post } from "../../data";
import { Link } from "react-router-dom";

function Courses() {
  const [selected, setSelected] = useState(null);

  function handleSelected(index) {
    setSelected(index === selected ? null : index);
  }

  return (
    <>
      <div className="courses">
        <div className="left">
          <div className="courses-Size">LEFTSIDE</div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>
          <div>
            <Comp />
          </div>

          <div>
            <Comp />
            <span>fdhdgddhgadh</span>
          </div>
        </div>
        <div className="right">
          <div className="course-title">
            <h2>Find All Courses Here</h2>
          </div>
          <p className="course-sub-title">
            Use the underlisted accordian to search for yourss desired courses
          </p>
          <div>
            <input
              className="search-input"
              type="text"
              placeholder="Search Courses"
            />
            <button className="search-btn">🔍</button>

            <div>
              {post.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="courses-map"
                      onClick={() => {
                        handleSelected(index);
                      }}
                    >
                      <h3 className="courses-Name">{item.name}</h3>
                      <span className="courses-expand">
                        {selected === index ? "🔻" : "▶"}
                        {/* {selected === index ? "-" : "+"} */}
                      </span>
                    </div>
                    <hr />

                    {selected === index ? (
                      <p className="courses-description">
                        <Link to={`/singlePage/${item.id}`}>
                          {item.description}
                        </Link>
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;

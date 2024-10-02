import "./home.css";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

import { post } from "../../data";
import Search from "../search/Search";

const Home = ({
  favoriteItems,
  setFavoriteItems,
  AddToFavorite,
  item,
  id,
  handleSinglePage,
  search,
  setSearch,
}) => {
  // console.log(search);

  return (
    <div className="home">
      {search.length > 0 ? <div className="search-Input">{search}</div> : null}
      <div>
        <h1 className="home-title">Equip Yourself for the future Challenges</h1>
        <h5 className="home-Sub-title">
          Learn the rope the best way, with training tools, full control systems
          and other gear to promote quality and efficiency on the job site.
        </h5>

        {/* <Search /> */}
        <img className="home-banner" src={banner} alt="banner Image" />
      </div>
      <div className="mapPage">
        {post.map((item) => {
          return (
            <div key={item.id} className="home-items">
              <div className="home-item">
                <div>
                  <Link to={`/singlePage/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="home-image"
                    />{" "}
                  </Link>
                  <div className="stars">⭐⭐⭐⭐✨</div>
                  <div className="overlay" onClick={() => AddToFavorite(item)}>
                    💗
                  </div>
                </div>
                <div className="home-Info">
                  <div className="home-name">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="homeInfo"></div>
                  <Link to={`/singlePage/${item.id}`}>
                    <button className="readMore-btn">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

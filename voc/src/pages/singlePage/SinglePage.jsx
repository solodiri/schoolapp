import React from "react";
import { useParams, Link } from "react-router-dom";
import "./singlePage.css";
import { post } from "../../data";

const SimglePage = () => {
  const { productId } = useParams();
  // console.log(productId)

  const product = post.find((item) => item.id === Number(productId));
  // console.log(product )

  const { image, name, description } = product;

  // const product = post.find((product) => product.id === productId);

  return (
    <section>
      <div className="singlePage">
        <h2 style={{ textAlign: "center", margin: "20px" }}>Details Page</h2>
        <div className="detail-Info">
          <div className="image-Name">
            <img className="singleImage" src={image} alt={name} />
            <h2>{name}</h2>
            <Link to="/">
              <button className="back-Home">◀ Back Home</button>
            </Link>
            <Link to="/signUp">
              <button className="back-Home">Enroll Now ▶</button>
            </Link>
          </div>
          <div className="title-Info">
            <div className="star">
              <h3>⭐⭐⭐⭐✨</h3>
              <h5 className="rating ">👍🏿 200</h5>
            </div>

            <h5 className="detail-Desc"> {description}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SimglePage;

import "./favorite.css";
import { useRef, useEffect } from "react";

const Favorite = ({
  favoriteItems,
  handleRemove,
  setToggleFavorite,
  toggleFavorite,
}) => {
  const favoriteRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!favoriteRef.current.contains(e.target)) {
        setToggleFavorite(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });
  const closeFavorite = () => {
    setToggleFavorite(!toggleFavorite);
  };

  return (
    <>
      <div className="favorite" ref={favoriteRef}>
        <div className="favorite-Wrapper">
          {/* <div className='favorite-Title'>{favoriteItems.length>0 && <h2>Favorite Page</h2>}</div> */}
          <div className="favorite-Title">
            {/* <div className="favorite-title"> */}
            <h2>Favorites Page</h2>
            <h5 className="favorite-close" onClick={closeFavorite}>
              X
            </h5>
            {/* </div> */}
          </div>
          <div className="favorite-Group">
            {favoriteItems.length > 0 ? (
              <div>
                <ul className="favoriteUI">
                  <li className="favorite-list">IMAGE</li>
                  <li className="favorite-list">NAME</li>
                  <li className="favorite-list">DESCRIPTION</li>
                  <li className="favorite-list">ACTION</li>
                </ul>
                <hr />
              </div>
            ) : (
              <h3>Is Empty</h3>
            )}

            {favoriteItems.map((item) => {
              return (
                <div key={item.id}>
                  <ul className="favoriteUI">
                    <li className="favorite-list">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="favorite-img"
                      />
                    </li>
                    <li className="favorite-list">
                      <h3>{item.name}</h3>
                    </li>
                    <li className="favorite-list">
                      <div className="home-description">
                        <h5>{item.description}</h5>
                      </div>
                    </li>
                    <li className="favorite-list">
                      <button
                        className="favorite-remove"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </button>
                    </li>
                  </ul>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {}
    </>
  );
};

export default Favorite;

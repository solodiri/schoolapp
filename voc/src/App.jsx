import { useState } from "react";
// import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from './home/Home'
import LogIn from "./pages/register/LogIn";
import SignUp from "./pages/register/SignUp";
import Status from "./components/status/Status";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Favorite from "./components/favorite/Favorite";
import Footer from "./components/footer/Footer";
import Courses from "./components/courses/Courses";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import SimglePage from "./pages/singlePage/SinglePage";
import Project from "./pages/project/Project";
import MobileMenu1 from "./components/mobilemenu/MobileMenu1";
import Search from "./components/search/Search";
import ScrollToTop from "./components/scrollToTop";
import Conditions from "./pages/conditions/Conditions";
import Privacy from "./pages/privacy/privacy";

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggleStatus, setToggleStatus] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [toggleWarming, setToggleWarming] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [singleItem, setSingleItem] = useState([]);
  const [search, setSearch] = useState("");

  const AddToFavorite = (item) => {
    let exist = false;
    favoriteItems.filter((product) => {
      if (item.id === product.id) exist = true;
    });
    if (exist) {
      setToggleWarming(true);
      setTimeout(() => {
        setToggleWarming(false);
      }, 3000);
      return;
    }

    setFavoriteItems([...favoriteItems, item]);
  };

  const handleRemove = (item) => {
    setFavoriteItems((oldItem) => {
      let itemIndex = oldItem.findIndex((myItem) => myItem.id === item.id);
      if (itemIndex !== -1) {
        oldItem.splice(itemIndex, 1);
      }
      return [...oldItem];
    });
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />

      <NavBar
        toggleFavorite={toggleFavorite}
        setToggleFavorite={setToggleFavorite}
        size={favoriteItems.length}
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {toggleFavorite === true && (
        <Favorite
          favoriteItems={favoriteItems}
          handleRemove={handleRemove}
          setToggleFavorite={setToggleFavorite}
          toggleFavorite={toggleFavorite}
        />
      )}

      {toggleWarming && (
        <div className="denger">This Item is aready added to your Favorite</div>
      )}
      {toggleStatus === true && (
        <Status toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />
      )}
      {showMobileMenu === true && <MobileMenu1 />}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              favoriteItems={favoriteItems}
              setFavoriteItems={setFavoriteItems}
              AddToFavorite={AddToFavorite}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/condition" element={<Conditions />} />
        <Route path="/singlePage/:productId" element={<SimglePage />} />
      </Routes>
      {/* <Search /> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;

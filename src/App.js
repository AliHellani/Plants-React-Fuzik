import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Category from "./Components/category/Category";
import Arrivals from "./Components/arrivals/Arrivals";
import Gifts from "./Components/gifts/Gifts";
import AllCategory from "./Components/allCategory/AllCategory";
import AboutUs from "./Components/aboutUs/AboutUs";
import OurAlbum from "./Components/ourAlbum/OurAlbum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <Arrivals />
      <div style={{ marginBottom: "20px" }}>
        <Gifts />
      </div>
      <div style={{ marginBottom: "45px" }}>
        <AllCategory />
      </div>
      <AboutUs />
      <OurAlbum />
    </div>
  );
}

export default App;

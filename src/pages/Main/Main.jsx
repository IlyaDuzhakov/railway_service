import HeaderMain from "../../components/Header/HeaderMain/HeaderMain.jsx";
import About from "../../components/MainPage/About.jsx";
import HowWorks from "../../components/MainPage/HowWorks/HowWorks.jsx";
import Reviews from "../../components/MainPage/Reviews.jsx";

const Main = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <About />
        <HowWorks />
        <Reviews />
      </main>
    </div>
  );
};

export default Main;

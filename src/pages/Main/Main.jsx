import HeaderMain from "../../components/Header/HeaderMain";
import About from "../../components/MainPage/About";
import HowWorks from "../../components/MainPage/HowWorks";
import Reviews from "../../components/MainPage/Reviews";

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

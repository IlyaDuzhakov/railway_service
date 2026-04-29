import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import HeaderLogo from "../HeaderLogo"
import NavBar from "../NavBar/NavBar"
// import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"

const HeaderTop = () => {
  return (
    <div className="header_top">
        <HeaderLogo />
        {/* <BurgerMenu /> */}
        <NavBar />
        <BurgerMenu />
      </div>
  )
}

export default HeaderTop
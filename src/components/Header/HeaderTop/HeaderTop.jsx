import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import HeaderLogo from "../HeaderLogo"
import NavBar from "../NavBar/NavBar"

const HeaderTop = () => {
  return (
    <div className="header_top">
        <HeaderLogo />
        <NavBar />
        <BurgerMenu />
      </div>
  )
}

export default HeaderTop
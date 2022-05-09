import Logo from "./Logo";
import Logoinsta from "./Logoinsta";
import PaperPlaneIcon from "./PaperPlaneIcon";
import Heart from "./HeartIcon";
export default function Navbar(){
    return(
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <Logoinsta />
            <div class="separador"></div>
            <Logo />
          </div>

          <div class="logo-mobile">
            <Logoinsta />
          </div>

          <div class="instagram-mobile">
            <Logo />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <PaperPlaneIcon />
            <ion-icon name="compass-outline"></ion-icon>
            <Heart />
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div class="icones-mobile">
            <PaperPlaneIcon />
          </div>
        </div>
      </div>
    )
}
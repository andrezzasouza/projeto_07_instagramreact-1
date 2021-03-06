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
            <div class="separator"></div>
            <Logo />
          </div>

          <div class="logo-mobile">
            <Logoinsta />
          </div>

          <div class="instagram-mobile">
            <Logo />
          </div>
  
          <div class="search">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icons">
            <PaperPlaneIcon />
            <ion-icon name="compass-outline"></ion-icon>
            <Heart />
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div class="icons-mobile">
            <PaperPlaneIcon />
          </div>
        </div>
      </div>
    )
}
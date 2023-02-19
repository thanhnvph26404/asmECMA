import Nav from "./Nav"
import Profile from "./Profile"
import { useState,useEffect } from "../lib"

const Header = (data) => {
  
  return (
      `<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header">
      <div class="d-flex flex-column">
      
      ${Profile(data)}
      ${Nav()}
        
      </div>
    </header><!-- End Header -->`
  )
}

export default Header
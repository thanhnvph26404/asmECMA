import {useState, useEffect } from "../lib"


const Nav = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => 
        
       setCategories(data)
        
      )
  }, [])
  
  return (
    `<nav id="navbar" class="nav-menu navbar">
    <ul>
    ${categories.map(category => `<li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>${category.name}</span></a></li>`)}
      
    </ul>
  </nav><!-- .nav-menu -->`
  )
}

export default Nav
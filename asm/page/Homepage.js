import Header from "../component/Header"
import Section from "../component/Section"
import Main from "../component/Main"
import Footer from "../component/Footer"
import { useState, useEffect } from "../lib"
const Homepage = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('http://localhost:3000/Infos')
      .then((response) => response.json())
      .then((result) => setData(result))
    
    
  },[])
  return (
      `${Header(data)}
       ${Section(data)} 
       ${Main(data)}
       ${Footer()}
      `
  )
}

export default Homepage
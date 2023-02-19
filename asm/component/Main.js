import About from "./About"
import Facts from "./Facts"
import Resume from "./Resume"
import Skill from "./Skill"
import Portfolio from "./Portfolio"
import Services from "./Services"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
const Main = (data) => {
  return (
    `<main id="main">

    <!-- ======= About Section ======= -->
    ${About(data)}

    <!-- ======= Facts Section ======= -->
    ${Facts()}

    <!-- ======= Skills Section ======= -->
    ${Skill()}

    <!-- ======= Resume Section ======= -->
    ${Resume()}

    <!-- ======= Portfolio Section ======= -->
    ${Portfolio()}

    <!-- ======= Services Section ======= -->
    ${Services()}

    <!-- ======= Testimonials Section ======= -->
    ${Testimonials()}

    <!-- ======= Contact Section ======= -->
    ${Contact()}

  </main><!-- End #main -->`
  )
}

export default Main
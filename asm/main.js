import { render, router } from "./lib";
import AdminAddCategory from "./page/admin/AddCategory";
import AdminAddGallery from "./page/admin/AddGallery";

import AdminCategory from "./page/admin/Category";
import AdminGallery from "./page/admin/Gallery";

// import './assets/img/favicon.png'
// import './assets/img/apple-touch-icon.png'
// import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
// import './assets/vendor/aos/aos.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/boxicons/css/boxicons.min.css'
// import './assets/vendor/glightbox/css/glightbox.min.css'
// import './assets/vendor/swiper/swiper-bundle.min.css'
// import './assets/css/style.css'
// import './assets/vendor/purecounter/purecounter_vanilla.js'
// import './assets/vendor/aos/aos.js'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import './assets/vendor/glightbox/js/glightbox.min.js'
// import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import './assets/vendor/swiper/swiper-bundle.min.js'
// import './assets/vendor/typed.js/typed.min.js'
// import './assets/vendor/waypoints/noframework.waypoints.js'
// import './assets/vendor/php-email-form/validate.js'
// import './assets/js/main.js'

import Homepage from "./page/Homepage";


const app = document.querySelector("body");

router.on("/", () => render(Homepage, app))
router.on("/admin/category", () => render(AdminCategory, app))
router.on("/admin/category/add", () => render(AdminAddCategory, app))
router.on("admin/gallery", () => render(AdminGallery, app))
router.on("admin/gallery/add", () => render(AdminAddGallery, app))
router.resolve()

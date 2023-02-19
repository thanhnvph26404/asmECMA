

const About = (data) => {
  return (
    `<section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>About</h2>
        <p>${data.description}</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>${data.job}</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>${data.birthday}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>${data.websites}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>${data.phone}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>${data.city}</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>${data.age}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>${data.degree}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>${data.email}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  </section><!-- End About Section -->`
  )
}

export default About
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import './styles/index.css';
function App() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Freelancer",
    "Problem Solver",
  ];
useEffect(() => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      if (entry.isIntersecting) {
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
      } else {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-scroll");
  fadeElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  // Enhanced typing animation with better timing
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
      }
    }, 80); // Slightly faster typing

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  // Initialize AOS and other animations
  useEffect(() => {
    // Initialize AOS when it's available
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          offset: 100,
          delay: 0,
        });
      }
    };

    // Wait for AOS to load
    if (window.AOS) {
      initAOS();
    } else {
      const checkAOS = setInterval(() => {
        if (window.AOS) {
          initAOS();
          clearInterval(checkAOS);
        }
      }, 100);
    }

    // Enhanced scroll effects and navbar
    const counters = document.querySelectorAll(".counter");

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 20);
        } else {
          counter.innerText = target;
        }
      });
    };

    const nav = document.querySelector(".navbar");
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    // Enhanced intersection observer for stats
    const statsSection = document.querySelector("#stats");
    if (statsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(statsSection);
    }
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack online shopping platform with admin dashboard, payment integration, and inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      link: "#",
      github: "#",
    },
    {
      title: "Food Delivery App",
      description:
        "React + PHP-based Grab clone with real-time tracking, payment processing, and restaurant management.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      technologies: ["React", "PHP", "MySQL", "Firebase"],
      category: "Mobile",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive React portfolio with modern animations, contact forms, and project showcases.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Bootstrap", "CSS3", "JavaScript"],
      category: "Frontend",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management System",
      description:
        "Comprehensive project management tool with team collaboration, time tracking, and reporting features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      category: "Full Stack",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Advanced weather tracking with data visualization, forecasting, and location-based alerts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "Weather API", "Bootstrap"],
      category: "Frontend",
      link: "#",
      github: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, and interactive quizzes.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["React", "Laravel", "MySQL", "WebRTC"],
      category: "Full Stack",
      link: "#",
      github: "#",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95, icon: "💻" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "PHP", level: 88, icon: "🐘" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "Flutter", level: 70, icon: "📱" },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Leading frontend development team, implementing modern React applications with focus on performance and user experience.",
      achievements: [
        "Improved app performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2021 - 2023",
      description:
        "Developed end-to-end web applications using React, Node.js, and various database technologies.",
      achievements: [
        "Built 15+ client projects",
        "Reduced development time by 30%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2020 - 2021",
      description:
        "Started career building responsive websites and learning modern development practices.",
      achievements: [
        "Completed 20+ projects",
        "Learned 5+ technologies",
        "Achieved 98% client satisfaction",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content:
        "Outstanding developer with excellent problem-solving skills. Delivered our project ahead of schedule with exceptional quality.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "Transformed our vision into reality. The attention to detail and technical expertise exceeded our expectations.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      content:
        "Perfect collaboration between design and development. The final product was pixel-perfect and performant.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      {/* Enhanced CDN Links */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/`libs`/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      />

      {/* Hero Section with AOS animations */}
      <section className="hero text-white" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="/henry.png"
                alt="Profile"
                className="rounded-circle mb-4 border border-5 border-warning animate__animated animate__zoomIn animate__delay-1s"
                style={{ width: "200px", height: "300px", objectFit: "cover" }}
              />

              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-warning">Henryco Buena</span>
              </h1>
              <h2 className="h3 mb-4">
                I'm a <span className="text-warning">{typedText}</span>
                <span className="typing-cursor">|</span>
              </h2>
              <p className="lead mb-4">
                Passionate about creating digital experiences that make a
                difference. I build modern, responsive, and user-friendly
                applications.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="#projects"
                  className="btn btn-warning btn-lg px-4 py-2 rounded-pill animate__animated animate__pulse animate__infinite animate__slow"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=400&fit=crop"
                  alt="Coding"
                  className="img-fluid rounded-3 shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced animations */}
      <section id="stats" className="section-padding bg-gradient">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="stats-card">
                <h2 className="counter text-warning fw-bold" data-target="50">
                  0
                </h2>
                <p className="mb-0">Projects Completed</p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="stats-card">
                <h2 className="counter text-warning fw-bold" data-target="30">
                  0
                </h2>
                <p className="mb-0">Happy Clients</p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="stats-card">
                <h2 className="counter text-warning fw-bold" data-target="5">
                  0
                </h2>
                <p className="mb-0">Years Experience</p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="stats-card">
                <h2 className="counter text-warning fw-bold" data-target="98">
                  0
                </h2>
                <p className="mb-0">% Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop"
                alt="About me"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <p className="lead mb-4">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that drive business growth
                and enhance user experiences.
              </p>
              <p className="mb-4">
                My journey in web development started with curiosity and has
                evolved into a career focused on building scalable,
                maintainable, and beautiful applications. I specialize in modern
                JavaScript frameworks, responsive design, and database
                optimization.
              </p>
              <div className="row mb-4">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h6 className="fw-bold">🎯 Focus Areas:</h6>
                  <ul className="list-unstyled">
                    <li>• Frontend Development</li>
                    <li>• Backend Development</li>
                    <li>• Database Design</li>
                    <li>• API Development</li>
                  </ul>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h6 className="fw-bold">📍 Based in:</h6>
                  <p>Manila, Philippines</p>
                  <h6 className="fw-bold">📧 Email:</h6>
                  <p>Henryco@example.com</p>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn-warning btn-lg px-4 py-2 rounded-pill"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient">
        <div className="container">
          <div className="fade-scroll fade-out" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Skills & Technologies</h2>
            <p className="lead">
              Here are the technologies I work with on a daily basis
            </p>
          </div>
          <div className="row">
            {skills.map((skill, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-2 me-3">{skill.icon}</span>
                    <h5 className="mb-0">{skill.name}</h5>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <small className="text-muted mt-2 d-block">
                    {skill.level}% Proficiency
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Work Experience</h2>
            <p className="lead">My professional journey and achievements</p>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                className="timeline-item"
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h4 className="fw-bold text-primary">{exp.title}</h4>
                    <h6 className="text-warning">{exp.company}</h6>
                  </div>
                  <span className="badge bg-dark fs-6">{exp.period}</span>
                </div>
                <p className="mb-3">{exp.description}</p>
                <h6 className="fw-bold">Key Achievements:</h6>
                <ul className="list-unstyled">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="mb-1">
                      ✅ {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Featured Projects</h2>
            <p className="lead">
              A showcase of my recent work and personal projects
            </p>

            {/* Filter Buttons */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              {["All", "Frontend", "Full Stack", "Mobile"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="card project-card h-100 shadow"
                  onClick={() =>
                    window.open("https://drive.google.com", "_blank")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-primary">
                        {project.category}
                      </span>
                    </div>
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text flex-grow-1">
                      {project.description}
                    </p>
                    <div className="mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={project.link}
                        className="btn btn-warning flex-grow-1"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-eye"></i> Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="btn btn-outline-dark"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Client Testimonials</h2>
            <p className="lead">What my clients say about working with me</p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="testimonial-card">
                  <div className="mb-3">
                    <i
                      className="bi bi-quote text-warning"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                  <p className="mb-4 fst-italic">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead">
              Ready to start your next project? Let's discuss how I can help.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg px-5 py-3 rounded-pill"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              className="col-md-4 text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <i className="bi bi-geo-alt-fill text-warning fs-1 mb-3"></i>
                <h5 className="fw-bold">Location</h5>
                <p className="text-muted">Manila, Philippines</p>
              </div>
            </div>
            <div
              className="col-md-4 text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <i className="bi bi-envelope-fill text-warning fs-1 mb-3"></i>
                <h5 className="fw-bold">Email</h5>
                <p className="text-muted">Henryco@example.com</p>
              </div>
            </div>
            <div
              className="col-md-4 text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <i className="bi bi-phone-fill text-warning fs-1 mb-3"></i>
                <h5 className="fw-bold">Phone</h5>
                <p className="text-muted">+63 917 123 4567</p>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4" data-aos="fade-up">
              <h5 className="fw-bold text-warning mb-3">Henryco Buena</h5>
              <p className="mb-3">
                Full Stack Developer passionate about creating innovative
                solutions and helping businesses grow through technology.
              </p>
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h6 className="fw-bold text-warning mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-white text-decoration-none">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white text-decoration-none"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h6 className="fw-bold text-warning mb-3">Services</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h6 className="fw-bold text-warning mb-3">Contact Info</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Manila, Philippines
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Henryco@example.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone-fill me-2"></i>
                  +63 917 123 4567
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                &copy; 2025 Henryco Buena. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">
                Made with <i className="bi bi-heart-fill text-danger"></i> using
                React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap Icons CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

      {/* AOS JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    </>
  );
}

export default App;

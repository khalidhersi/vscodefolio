import React, { useMemo, useState, useEffect } from "react";
import "./Carousel.scss";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Button from "../Button/Button";
import dfeLogo from "../../assets/images/dfeLogo.png"
import searchsmarterlogo from "../../assets/images/searchsmarterlogo.png"
import OAE from "../../assets/images/OAE.png"
import jqc from "../../assets/images/jqc.png"
import atc from "../../assets/images/atc.png"
import quranapp from "../../assets/images/quranapp.png"

const projects = [
  // --- Professional ---
  {
    id: "funding-calc",
    title: "GOVUK Department of Education - CFS",
    description:
      "Spearheaded React frontend for the Department of Education’s funding calculation system (Agile), impacting 10,000+ users across UK schools, colleges, and universities.",
    image: dfeLogo,
    type: "professional",
    company: "GOVUK Department of Education",
    date: "Jan 2023 - Present",
    technologies: ["React 18", "TypeScript", ".NET", "Azure", "Microsoft SQL"],
    impact: "Built, Maintained & Enhanced Front/Back-end, served 10,000+ users",
  },
  {
    id: "searchsmarter",
    title: "SearchSmarter Website",
    description:
      "Designed and developed the first-ever website for SearchSmarter, a growing SEO company. Implemented modern responsive design improving client acquisition by 50%.",
    image: searchsmarterlogo,
    type: "professional",
    company: "SearchSmarter (Freelance)",
    date: "May 2024 - Aug 2024",
    technologies: ["React.js", "Bootstrap", "Node.js", "SEO"],
    impact: "Improved client acquisition by 100%",
  },
  {
    id: "orchestra-oae",
    title: "Orchestra of the Age of Enlightenment",
    description:
      "Mobile-first React App for Orchestra of the Age of Enlightenment, targeting users over 60 with accessibility features. Increased user engagement by 60%.",
    image: OAE,
    type: "professional",
    company: "_Nology",
    date: "Sept 2021 - Aug 2022",
    technologies: ["React", "Accessibility", "Mobile-first"],
    impact: "Increased user engagement by 60%",
  },
  {
    id: "quran-memorizing-app",
    title: "Quran Memorizing App",
    description:
      "Progressive Nextjs Web App for Qur'an memorization with audio, spaced repetition, and per-ayah tracking. Built to advance my DevOps transition: containerized, Terraform IaC, full AWS CI/CD pipeline.",
    image: quranapp,
    type: "personal",
    date: "May 2025 - Present",
    technologies: ["Next.js", "Docker", "Terraform", "AWS", "GitHub Actions (CI/CD)",],
    impact:
     "Built & maintain E2E Devops: Dockerized app, Terraform IaC, automated AWS CI/CD, zero-downtime deploys."
  },  
  {
    id: "atc-taekwondo",
    title: "ATC (Amal Taekwondo Club)",
    description:
      "Comprehensive website for Amal Taekwondo Club with member management and online registration system, reducing administrative workload by 30%.",
    image: atc,
    type: "professional",
    company: "Amal Taekwondo Club (Freelance)",
    date: "Nov 2024 - Mar 2025",
    technologies: ["React.js", "Node.js", "Payment System"],
    impact: "Reduced administrative workload by 30%",
  },
  {
    id: "jays-construction",
    title: "Jay's Quality Construction",
    description:
      "Delivered a bespoke website increasing client inquiries by over 400% through responsive design and SEO optimization. Modern UI/UX with cutting-edge technologies.",
    image: jqc,
    type: "professional",
    company: "Jay's Quality Construction (Freelance)",
    date: "Feb 2020 - Sept 2021",
    technologies: ["React", "Bootstrap", ".NET", "SEO"],
    impact: "Increased client inquiries by 400%",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "Contributed to high-traffic e-commerce platforms using Java, Spring Boot, and React.js. Optimized backend logic improving response times by 15%.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop&crop=center",
    type: "professional",
    company: "Cognizant",
    date: "Aug 2022 - Jan 2023",
    technologies: ["Java", "Spring Boot", "React.js", "Payment Systems"],
    impact: "Improved response times by 15%",
  },

  // --- Personal ---
  {
    id: "calculator",
    title: "iPhone Calculator Clone",
    description:
      "Fully functioning calculator using vanilla JavaScript with DOM manipulation for basic arithmetic operations.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/Calculator.png",
    type: "personal",
    date: "2021",
    technologies: ["JavaScript", "HTML", "CSS", "DOM"],
    githubLink: "https://khalidhersi.github.io/Calculator/",
    demoLink: "https://khalidhersi.github.io/Calculator/",
  },
  {
    id: "minesweeper",
    title: "MineSweeper Clone",
    description:
      "Classic MineSweeper game with timer functionality and bomb detection logic using vanilla JavaScript.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/minesweeper.png",
    type: "personal",
    date: "2021",
    technologies: ["JavaScript", "Game Logic", "HTML", "CSS"],
    githubLink: "https://khalidhersi.github.io/MineSweeper/",
    demoLink: "https://khalidhersi.github.io/MineSweeper/",
  },
  {
    id: "morse-code",
    title: "Morse Code Translator",
    description:
      "Test-driven development approach using Jest for unit testing the morse code translation functionality.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/morsecode.png",
    type: "personal",
    date: "2021",
    technologies: ["JavaScript", "Jest", "TDD", "Testing"],
    githubLink: "https://khalidhersi.github.io/Morse-code-translator/",
    demoLink: "https://khalidhersi.github.io/Morse-code-translator/",
  },
  {
    id: "punk-api",
    title: "Punk API React App",
    description:
      "React application fetching data from Punk API with filtering capabilities to search through beer database.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/punk-api-v2/main/src/assets/images/mobile-view.png",
    type: "personal",
    date: "2022",
    technologies: ["React", "API", "JavaScript", "Filtering"],
    githubLink: "https://khalidhersi.github.io/punk-api-v2/",
    demoLink: "https://khalidhersi.github.io/punk-api-v2/",
  },
  {
    id: "vue-clone",
    title: "Vue Cinema Clone (Full-Stack)",
    description:
      "Full-stack application with Spring Boot Java backend and React frontend, featuring movie database management.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/fullstack-project.png",
    type: "personal",
    date: "2022",
    technologies: ["React", "Java", "Spring Boot", "Full-Stack"],
    githubLink: "https://khalidhersi.github.io/React-FrontEnd/",
    demoLink: "https://khalidhersi.github.io/React-FrontEnd/",
  },
  {
    id: "wordle-clone",
    title: "Wordle Clone",
    description:
      "React-based word guessing game using multiple state hooks for game logic and user interaction.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/wordle.png",
    type: "personal",
    date: "2022",
    technologies: ["React", "Game Logic", "State Management"],
    githubLink: "https://khalidhersi.github.io/wordle/",
    demoLink: "https://khalidhersi.github.io/wordle/",
  },
  {
    id: "ticket-tracker",
    title: "Ticket Tracker",
    description:
      "React application with state management for tracking tickets and employee data visualization.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/ad2857e4b0aeea02c9376db42fe17794900cae2c/src/assets/images/ticket-tracker.png",
    type: "personal",
    date: "2021",
    technologies: ["React", "State Management", "Data Visualization"],
    githubLink: "https://khalidhersi.github.io/ticket-tracker-v2/",
    demoLink: "https://khalidhersi.github.io/ticket-tracker-v2/",
  },
  {
    id: "library-system",
    title: "Java Library Booking System",
    description:
      "Console-based Java application for library book management with CSV data integration.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/librarySystem.png",
    type: "personal",
    date: "2021",
    technologies: ["Java", "CSV", "Console App", "Data Management"],
    githubLink: "https://github.com/khalidhersi/Library-Book-Loaning-System-Java",
    demoLink: "https://github.com/khalidhersi/Library-Book-Loaning-System-Java",
  },
  {
    id: "dodge-game",
    title: "Dodge - Indie Java Game",
    description:
      "Reaction-time training game built in Java with object-oriented design principles.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/dodge.png",
    type: "personal",
    date: "2021",
    technologies: ["Java", "Game Development", "OOP"],
    githubLink: "https://github.com/khalidhersi/Dodge--java",
    demoLink: "https://github.com/khalidhersi/Dodge--java",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe React",
    description:
      "Modern React implementation of the classic game using the latest React.JS features and hooks.",
    image:
      "https://raw.githubusercontent.com/khalidhersi/vscodefolio/master/src/assets/images/tic-tac-toe.png",
    type: "personal",
    date: "2022",
    technologies: ["React", "Hooks", "Game Logic"],
    githubLink: "https://github.com/khalidhersi/tic-tac-toe",
    demoLink: "https://github.com/khalidhersi/tic-tac-toe",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] =
    useState("all");

  const filtered = useMemo(
    () => projects.filter((p) => selectedType === "all" || p.type === selectedType),
    [selectedType]
  );

  const hasItems = filtered.length > 0;
  const current = hasItems ? filtered[currentIndex] : null;

  const next = () => setCurrentIndex((i) => (i + 1) % Math.max(filtered.length, 1));
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));

  // Reset index when filter changes
  useEffect(() => setCurrentIndex(0), [selectedType]);

  // Keyboard nav (←/→)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered.length]);

  // Touch swipe (mobile)
  const [touchX, setTouchX] = useState(null);
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX == null) return;
    const delta = e.changedTouches[0].clientX - touchX;
    const threshold = 40; // swipe threshold
    if (delta > threshold) prev();
    if (delta < -threshold) next();
    setTouchX(null);
  };

  if (!hasItems || !current) return null;

  return (
    <section
      className="project-carousel"
      aria-label="Project carousel"
      role="region"
      aria-roledescription="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Filters */}
      <div className="project-carousel__filters" role="tablist" aria-label="Filter projects">
        {(["all", "professional", "personal"]).map((type) => (
          <button
            key={type}
            className={`pc-btn ${selectedType === type ? "btn--active" : ""}`}
            onClick={() => setSelectedType(type)}
            type="button"
            role="tab"
            aria-selected={selectedType === type}
          >
            {type[0].toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="project-carousel__card">
        <div className="project-carousel__grid">
          {/* Image side */}
          <div className="project-carousel__image-section">
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 550px"
            />
            <div
              className={`project-carousel__type-badge ${
                current.type === "professional"
                  ? "project-carousel__type-badge--professional"
                  : "project-carousel__type-badge--personal"
              }`}
            >
              {current.type === "professional" ? "Professional" : "Personal"}
            </div>

            <button
              className="project-carousel__nav-button project-carousel__nav-button--prev"
              onClick={prev}
              aria-label="Previous project"
              type="button"
            >
              <img src={leftArrow} alt="" aria-hidden="true" />
            </button>

            <button
              className="project-carousel__nav-button project-carousel__nav-button--next"
              onClick={next}
              aria-label="Next project"
              type="button"
            >
              <img src={rightArrow} alt="" aria-hidden="true" />
            </button>
          </div>

          {/* Content side */}
          <div className="project-carousel__content-section">
            <div>
              <div className="project-carousel__meta">
                <span>{current.date}</span>
                {current.company && <span>• {current.company}</span>}
              </div>

              <h3 className="project-carousel__title">{current.title}</h3>

              <p className="project-carousel__description">{current.description}</p>

              {current.impact && (
                <div className="project-carousel__impact">
                  <div className="project-carousel__impact-title">Impact</div>
                  <div className="project-carousel__impact-text">{current.impact}</div>
                </div>
              )}

              <div className="project-carousel__technologies">
                <div className="project-carousel__technologies-title">Technologies Used</div>
                <div className="project-carousel__technologies-list">
                  {current.technologies.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-carousel__actions">
              {current.demoLink && (
                <a href={current.demoLink} target="_blank" rel="noreferrer">
                  <Button buttonText="Live Demo" isSecondary={false} />
                </a>
              )}
              {current.githubLink && (
                <a href={current.githubLink} target="_blank" rel="noreferrer">
                  <Button buttonText="View Code" isSecondary={true} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="project-carousel__indicators" aria-live="polite">
        <div className="project-carousel__indicators-dots">
          {filtered.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`project-carousel__indicators-dot ${
                idx === currentIndex ? "project-carousel__indicators-dot--active" : ""
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
        <div className="project-carousel__indicators-counter">
          {Math.min(currentIndex + 1, filtered.length)} of {filtered.length} projects
        </div>
      </div>
    </section>
  );
};

export default Carousel;

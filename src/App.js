import React from 'react';
import './App.css';
import profilePic from "./profile.jpg";
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, Award, Trophy } from 'lucide-react';

// function App() {
//   return (
//     <div>
//       <h1>Hello from React</h1>
//       <p>This should be styled by App.css</p>
//     </div>
//   );
// }

export default function Portfolio() {
  const portfolioData = {
    name: "Nandisha DG",
    title: "MCA Student | Full Stack Developer",
    tagline: "Building scalable web applications with MERN stack and exploring AI/ML solutions",
    contact: {
      email: "nandishdgnandi@gmail.com",
      phone: "+91 9663845311",
      location: "Bengaluru, India",
      linkedin: "https://www.linkedin.com/in/nandish-dg-888b2b2a2/",
      github: "https://github.com/Nandish1345"
    },
    about: "Passionate computer applications student with expertise in full-stack development, object-oriented programming, and AI/ML. Experienced in building scalable web applications using MERN stack, Java, and Python. Committed to writing clean, maintainable code and solving real-world problems through technology. AWS Cloud certified with hands-on experience in cloud services and automation.",
    skills: [
      { category: "Programming", items: ["Java", "Python", "C", "SQL", "DSA", "OOPs"] },
      { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"] },
      { category: "Tools & Technologies", items: ["Git/GitHub", "AWS (EC2, S3)", "MySQL", "Java Swing", "Darknet Framework"] },
      { category: "Soft Skills", items: ["Project Management", "Leadership", "Team Collaboration", "Problem Solving"] }
    ],
    projects: [
      {
        title: "WashRight – Campus Sanitization Audit Portal",
        description: "Developed a full-stack web portal to automate campus sanitization audits, enabling real-time monitoring of cleanliness standards across facilities. Implemented user roles for auditors and administrators, integrated form-based reporting with image uploads, and generated analytics dashboards for hygiene compliance tracking.",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      },
      {
        title: "Object Detection Using YOLOv4",
        description: "Designed and implemented a real-time object detection system using YOLOv4 in Python, trained and fine-tuned on a custom dataset with the Darknet framework to achieve higher detection accuracy. Integrated the model into Python-based applications including surveillance systems, autonomous navigation, and smart retail solutions.",
        tech: ["Python", "YOLOv4", "Darknet", "OpenCV", "Deep Learning"],
      },
      {
        title: "Inventory Management System",
        description: "Developed a desktop-based Inventory Management System using Java Swing (GUI) and MySQL to efficiently manage stock, suppliers, sales, and user authentication. The system allows administrators to add, update, delete, and track inventory items, while also maintaining supplier and customer records.",
        tech: ["Java", "Java Swing", "MySQL", "JDBC"],
      }
    ],
    experience: [
      {
        role: "AWS Cloud Intern",
        company: "Cloud Institution, Bengaluru",
        period: "2024",
        description: "Managed and configured AWS services including EC2 and S3 to ensure optimal performance, scalability, and reliability. Implemented secure and cost-efficient storage solutions, automated routine cloud operations, monitored system health, and created comprehensive documentation to streamline workflows."
      }
    ],
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "BMS Institute of Technology and Management",
        period: "2024 - 2026",
        description: "CGPA: 7.55 | Focus on Advanced Software Development and Cloud Computing"
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Patel Institute of Science and Management",
        period: "2021 - 2024",
        description: "CGPA: 8.28 | Focus on Software Engineering and Web Development"
      }
    ],
    certifications: [
      "Java Core Guide: Key Features, OOP, Collections and more (Udemy)"
    ],
    achievements: [
      "Best Outgoing Student Award for academics and leadership",
      "National-Level Handball Player"
    ]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <h1 className="navbar-logo">{portfolioData.name}</h1>
            <div className="navbar-menu">
              <button onClick={() => scrollToSection('about')} className="nav-button">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-button">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-button">Experience</button>
              <button onClick={() => scrollToSection('education')} className="nav-button">Education</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-avatar">
            <img src={profilePic} alt="Nandish DG" className="profile-image" />
          </div>

          <h2 className="hero-name">{portfolioData.name}</h2>
          <p className="hero-title">{portfolioData.title}</p>
          <p className="hero-tagline">{portfolioData.tagline}</p>

          <div className="contact-info">
            <a href={`mailto:${portfolioData.contact.email}`} className="contact-link">
              <Mail size={20} />
              <span>{portfolioData.contact.email}</span>
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="contact-link">
              <Phone size={20} />
              <span>{portfolioData.contact.phone}</span>
            </a>
            <div className="contact-link">
              <MapPin size={20} />
              <span>{portfolioData.contact.location}</span>
            </div>
          </div>

          <div className="social-links">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section">
          <h3 className="section-header">
            <Code className="section-icon" />
            About Me
          </h3>
          <p className="section-content">{portfolioData.about}</p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h3 className="section-header">
            <Award className="section-icon" />
            Technical Skills
          </h3>
          <div className="skills-grid">
            {portfolioData.skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-category">
                <h4 className="skill-category-title">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h3 className="section-header">
            <Briefcase className="section-icon" />
            Projects
          </h3>
          <div className="projects-grid">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h3 className="section-header">
            <Briefcase className="section-icon" />
            Experience
          </h3>
          <div className="timeline">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-header">
                  <h4 className="timeline-title">{exp.role}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-subtitle">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h3 className="section-header">
            <GraduationCap className="section-icon" />
            Education
          </h3>
          <div className="timeline">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-header">
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <p className="timeline-subtitle">{edu.institution}</p>
                <p className="timeline-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section className="section">
          <h3 className="section-header">
            <Trophy className="section-icon" />
            Certifications & Achievements
          </h3>

          <div className="achievements-container">
            <h4 className="achievements-title">Certifications</h4>
            <div className="achievements-list">
              {portfolioData.certifications.map((cert, idx) => (
                <div key={idx} className="achievement-item">
                  <p className="achievement-text">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-container">
            <h4 className="achievements-title">Achievements</h4>
            <div className="achievements-list">
              {portfolioData.achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-item">
                  <Trophy size={20} className="achievement-icon" />
                  <p className="achievement-text">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 {portfolioData.name}. Built with React & Custom CSS</p>
        </div>
      </footer>
    </div>
  );
}
// export default App;


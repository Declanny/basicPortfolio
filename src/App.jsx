import React from 'react';
import './App.css'; // Assuming you have CSS for styling


function App() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Developed a scalable e-commerce platform using React and Redux.',
      features: [
        'Integrated payment gateway',
        'Product filtering',
        'User authentication'
      ],
      techStack: 'React, Redux, Firebase, Stripe API'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio to showcase skills and projects.',
      features: [
        'Responsive design',
        'Project galleries',
        'Contact form with email integration'
      ],
      techStack: 'React, HTML5, CSS3, JavaScript'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Built a weather forecasting application using React hooks.',
      features: [
        'Real-time weather updates',
        'Geolocation API integration',
        'User-friendly UI'
      ],
      techStack: 'React, OpenWeatherMap API, Geolocation API'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Godwin Chisom</h1>
        <h3 className='AddText'>I'm passionate about creating intuitive and responsive web experiences.</h3>
        <div className='Photo1'><img src="../src/assets/profile.jpg" alt="" /></div>
        
      </header>
      <section className="content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            I'm passionate about creating intuitive and responsive web experiences. 
            With a strong foundation in frontend development and expertise in React, 
            I strive to blend functionality with creativity to deliver engaging user interfaces.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
            </div>
          ))}
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <p>
            <strong>Languages:</strong> JavaScript, HTML5, CSS3 <br />
            <strong>Frameworks/Libraries:</strong> React, Redux, Bootstrap, Material-UI <br />
            <strong>Tools:</strong> Git, npm, webpack <br />
            <strong>Design:</strong> Responsive Web Design, UI/UX Design Principles
          </p>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a> <br />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/yourprofile">linkedin.com/yourprofile</a> <br />
            <strong>GitHub:</strong> <a href="https://github.com/yourusername">github.com/yourusername</a>
          </p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <p>
            Bachelor's Degree in Computer Science <br />
            University Oxford, Graduation Year
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;


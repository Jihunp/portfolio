import "../styles/SpecialProjects.css" 

const portfolioItems = [
  {
    title: "Project Title 1",
    description: "This is a brief description of the project.",
    imageUrl: "project1.jpg",
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Project Title 2",
    description: "This is another project description.",
    imageUrl: "project2.jpg",
    liveDemo: "#",
    github: "#"
  }
  // Add more portfolio items here
];

const SpecialProjects = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div
              className="portfolio-image"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <div className="portfolio-content">
              <h3 className="portfolio-title-item">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <div className="portfolio-links">
                <a href={item.liveDemo} className="portfolio-link">
                  Live Demo
                </a>
                <a href={item.github} className="portfolio-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialProjects;

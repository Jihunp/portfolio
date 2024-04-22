import "../../public/styles/VerticalNav.css"


function VerticalNav() {

  return (
  <nav className="navbar">
    <ul className="navbar__menu">
      <li className="navbar__item">
        <a href="#" className="navbar__link">Home<span>Hello Friend</span></a>
      </li>
      <li className="navbar__item">
        <a href="#" className="navbar__link">Expertise<span>Expertise</span></a>        
      </li>
      <li className="navbar__item">
        <a href="#" className="navbar__link">Projects<span>Projects</span></a>        
      </li>
      <li className="navbar__item">
        <a href="#" className="navbar__link">Experience<span>Experience</span></a>        
      </li>
      <li className="navbar__item">
        <a href="#" className="navbar__link">Contact<span>Contact</span></a>        
      </li>
    </ul>
  </nav>
  );
}

export default VerticalNav
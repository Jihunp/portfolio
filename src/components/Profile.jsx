import "../styles/Profile.css"
import cattle from "../assets/highland-cattle.jpg"

const Profile = () => {

  return (
    <div className="profile-card">
      <img
        src={cattle}
        alt="Your Name"
        className="profile-image"
      />
      <div className="profile-description">
        <h2>Ed J Park</h2>
        <p>
          {`I'm a passionate software engineer with a focus on frontend and full-stack development.
          I love building intuitive and dynamic user experiences.`}
        </p>
      </div>
    </div>
  );
}

export default Profile;
import './ProfileCard.css'
import profile from '../assets/profile.jpg' // Replace with your image path

const ProfileCard = () => {
  return (
    <div className="card-container">
      <aside className="sidebar">
        <div className="logo">SPACEX</div>
        <nav>
          <ul>
            <li>Resume</li>
            <li>linkdin</li>
            <li>github</li>
            <li>contact</li>
          </ul>
        </nav>
      </aside>

      <div className="profile-photo">
        <img src={profile} alt="Elon Musk" />
      </div>

      <div className="profile-info">
        <h1>Haaris Sunjey</h1>
        <h3>Software Developer</h3>
        <p>
          I'm a passionate software developer who thrives on turning complex problems into elegant, efficient code. Whether I’m building intuitive front-end interfaces or robust backend systems, I focus on performance, scalability, and user experience. I love clean architecture, sharp UI, and writing code that not only works — but works beautifully. Always learning, always iterating — I build with purpose and code with precision.
        </p>
        <div className="signature">Haaris</div>
        <div className="socials">
  <a href="https://www.linkedin.com/in/haaris-karthik-691750299/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://github.com/haarissunjeey" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
    <i className="fa-solid fa-code"></i> {/* LeetCode uses a generic icon */}
  </a>
</div>
      </div>

      <div className="scroll-button">
        <button>&rarr;</button> 
      </div>
    </div>
  )
}

export default ProfileCard

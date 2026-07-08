import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>

      {/* Project Title */}
      <h1>Smart Digital Panchayat Portal</h1>

      <p>
        An Accessible E-Governance Platform for Rural Communities
      </p>

      {/* Navigation Buttons */}
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button style={{ marginLeft: "10px" }}>
            Register
          </button>
        </Link>
      </div>

      <hr />

      {/* Why Digital Panchayat */}
      <h2>Why Digital Panchayat?</h2>

      <p>
        The Smart Digital Panchayat Portal enables citizens and Panchayat
        officials to interact digitally through complaint management,
        announcements, feedback, and accessible governance services.
      </p>

      <hr />

      {/* Features */}
      <h2>Key Features</h2>

      <ul>
        <li>Complaint Management</li>
        <li>Announcement Management</li>
        <li>Feedback System</li>
        <li>Role-Based Access Control</li>
        <li>Voice Assistance</li>
        <li>Multilingual Support</li>
      </ul>

      <hr />

      {/* User Roles */}
      <h2>User Roles</h2>

      <h3>Citizen</h3>
      <p>Submit complaints, track status, view announcements and provide feedback.</p>

      <h3>Panchayat Officer</h3>
      <p>Manage complaints, publish announcements and review feedback.</p>

      <h3>Admin</h3>
      <p>Monitor the entire system, manage users and generate reports.</p>

      <hr />

      {/* AI Features */}
      <h2>AI-Powered Features</h2>

      <ul>
        <li>Voice-to-Text Complaint Submission</li>
        <li>Text-to-Speech Announcements</li>
        <li>Multilingual Support</li>
        <li>Feedback Sentiment Analysis</li>
      </ul>

      <hr />

      {/* Footer */}
      <footer>
        <h3>Smart Panchayat Portal</h3>
        <p>MCA Project - NIT Trichy</p>
      </footer>

    </div>
  );
}

export default HomePage;
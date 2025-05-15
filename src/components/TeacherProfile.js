import React from 'react';
import '../index.css';


const TeacherProfile = () => {
  return (
    <div className="container">
      <div className="profile-header">
        <h1>Sheikh Haitham</h1>
        <p>Qur'an Teacher | 10+ Years Experience</p>
        <p>Specialized in Arabic and Qur’an instruction</p>
      </div>

      <div className="video-placeholder">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X1mC1XY65Kc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


      <div className="course-list">
        <h2>Courses Offered</h2>
        <div className="course">
          <h3>Qur’an Recitation - Beginner</h3>
          <p>Learn Tajweed rules and improve pronunciation in this foundational course.</p>
        </div>
        <div className="course">
          <h3>Arabic Basics</h3>
          <p>Master the Arabic alphabet, essential grammar, and vocabulary for conversation.</p>
        </div>
        <div className="course">
          <h3>Qur’an Memorization (Hifz)</h3>
          <p>Structured memorization guidance with daily and weekly tracking.</p>
        </div>
      </div>

      <a className="book-btn" href="#">Book a Session</a>
    </div>
  );
};

export default TeacherProfile;
import { useState } from "react";
import Feedback from "./components/Feedback";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    course: "",
    semester: "",
    instructor: "",
    rating: "",
    feedbackText: "",
  });

  const [allFeedback, setAllFeedback] = useState([]);
  const [filter, setFilter] = useState("all"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (star) => {
    setFeedback((prev) => ({ ...prev, rating: star }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setAllFeedback((prev) => [...prev, feedback]);
    setFeedback({
      name: "",
      email: "",
      course: "",
      semester: "",
      instructor: "",
      rating: "",
      feedbackText: "",
    });
  };

  const deleteFeedback = (index) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setAllFeedback((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const isFormValid = Object.values(feedback).every((field) => field !== "");


  const filteredFeedbacks = allFeedback.filter((f) => {
    if (filter === "all") return true;
    if (filter === "4plus") return parseInt(f.rating) >= 4;
    if (filter === "5star") return parseInt(f.rating) === 5;
    return true;
  });

  return (
    <div className="main">
      <div className="header">
        <h1>Student Feedback Portal</h1>
      </div>

      <div className="form-container">
        <form onSubmit={submitForm} className="feedback-form">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={feedback.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="text"
            placeholder="Email"
            value={feedback.email}
            onChange={handleChange}
          />

          <select onChange={handleChange} value={feedback.course} name="course">
            <option disabled value="">
              Select Course
            </option>
            <option value="CS">Computer Science</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="SE">Software Engineering</option>
            <option value="DS">Data Science</option>
          </select>

          <select
            onChange={handleChange}
            value={feedback.semester}
            name="semester"
          >
            <option disabled value="">
              Select Semester
            </option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
          </select>

          <input
            onChange={handleChange}
            value={feedback.instructor}
            name="instructor"
            type="text"
            placeholder="Department Instructor"
          />

          <div className="rating">
            <label>Rate:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  color: star <= feedback.rating ? "gold" : "gray",
                }}
              >
                ★
              </span>
            ))}
          </div>

          <input
            onChange={handleChange}
            value={feedback.feedbackText}
            name="feedbackText"
            type="text"
            placeholder="Feedback"
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={!isFormValid ? "disabled-btn" : ""}
          >
            Submit
          </button>
        </form>

        <hr />

        <p className="feedback-count">
          You have submitted {allFeedback.length} feedback
          {allFeedback.length !== 1 ? "s" : ""}.
        </p>

   
        <div className="filter-section">
          <label>Filter Feedbacks:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Show All</option>
            <option value="4plus">4★ and Above</option>
            <option value="5star">Only 5★</option>
          </select>
        </div>

     
        <Feedback feedbacks={filteredFeedbacks} onDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;

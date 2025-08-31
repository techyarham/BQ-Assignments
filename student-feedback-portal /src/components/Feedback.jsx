function Feedback({ feedbacks, onDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p className="no-feedback">No Feedbacks</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((item, index) => (
        <div className="feedback-card" key={index}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Course:</strong> {item.course}</p>
          <p><strong>Semester:</strong> {item.semester}</p>
          <p><strong>Instructor:</strong> {item.instructor}</p>
          <p>
            <strong>Rating:</strong>{" "}
            {"★".repeat(item.rating).padEnd(5, "☆")}
          </p>
          <p><strong>Feedback:</strong> {item.feedbackText}</p>

       
          <button className="delete-btn" onClick={() => onDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Feedback;

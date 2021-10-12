import "./PostAddForm.css";

export default function PostAddForm({ onAdd }) {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking about"
        className="form-control new-post-label"
      ></input>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd("Hello world")}
      >
        Add Post
      </button>
    </div>
  );
}

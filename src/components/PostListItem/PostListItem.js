import "./PostListItem.css";

export default function PostListItem({ label, important }) {
  let classNames = "app-list-item d-flex justify-content-between";

  if (important) {
    classNames += " important";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label">{label}</span>
      <div className="d-flex justify-content-center align-item-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}

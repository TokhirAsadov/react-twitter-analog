import "./AppHeader.css";

export default function AppHeader({ liked, allPosts }) {
  return (
    <div className="app-header d-flex">
      <h1>Tohir Asadov</h1>
      <h2>
        {allPosts} posts, {liked} like
      </h2>
    </div>
  );
}

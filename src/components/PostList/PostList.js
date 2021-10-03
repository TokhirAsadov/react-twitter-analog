import PostListItem from "../PostListItem";
import "./PostList.css";

export default function PostList({ posts }) {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
}

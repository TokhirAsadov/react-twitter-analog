import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";

import "./App.css";
const App = () => {
  const data = [
    { label: "Going to learn React JS", important: true, id: "qw" },
    { label: "That is so good", important: false, id: "qe" },
    { label: "i need a beak...", important: false, id: "qr" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
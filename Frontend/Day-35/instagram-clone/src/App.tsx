import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { useDispatch, useSelector } from "react-redux";
import { User, updateUser } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

export interface PostType {
  username: string;
  post: string;
}

const App = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState<PostType[]>([]);
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
};

export default App;
// Ansh Sawant

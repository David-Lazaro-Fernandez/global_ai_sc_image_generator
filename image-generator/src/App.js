import "./App.css";
import Image_holder from "./components/image_holder";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";

function App() {
  const [input, setInput] = useState(true);
  const [image, setImage] = useState("");
  const [skeletonAnimation, setSkeletonAnimation] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSkeletonAnimation(!skeletonAnimation);
  }, [image]);

  const send_prompt = async () => {
    const result = await axios.get(
      `https://e30b-34-124-237-73.ngrok.io/?prompt=${input}`
    );
    setImage(result.data);
    console.log(image);
  };

  const handleLoading = () => {
    send_prompt();
    if (loading === false) {
    setLoading(!loading);
    }
    setSkeletonAnimation(!skeletonAnimation);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <h1>Global AI Image Generator 🚀</h1>
      <div className="head">
        <input
          label="Hello"
          placeholder="Hello"
          className="input"
          onChange={handleInput}
        />
        <button onClick={handleLoading}>Generate image</button>
      </div>
      {loading ? (
        skeletonAnimation ? (
          <img src={`data:image/png;base64,${image}`} />
        ) : (
          <Skeleton variant="rectangular" width={700} height={700} />
        )
      ) : (
        <Image_holder image={image} />
      )}
      <p>&lt;/&gt; with 💖 by David Lazaro </p>
    </div>
  );
}

export default App;

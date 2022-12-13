import "./App.css";
import ImageHolder from "./components/image_holder";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const send_prompt = async () => {
    const result = await axios.get(
      `https://fd7b-34-142-202-204.ngrok.io?prompt=${input}`
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
          <img alt="prompt result" src={`data:image/png;base64,${image}`} />
        ) : (
          <Skeleton variant="rectangular" width={700} height={700} />
        )
      ) : (
        <ImageHolder image={image} />
      )}
      <p>&lt;/&gt; with 💖 by David Lazaro </p>
    </div>
  );
}

export default App;

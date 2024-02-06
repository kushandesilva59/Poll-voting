import React, { useState, useEffect } from "react";
import QuestionBar from "./components/QuestionBar/QuestionBar";
import Sider from "./components/Sider/Sider";
import Header from "./components/Header/Header";
import QuestionBox from "./components/QuestionBox/QuestionBox";
import Season from "./components/Season/Season";
import VideoSection from "./components/video/VideoSection";





function App() {


  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">

      {message}
      <Header />
      <Sider />

      <QuestionBar />

      <QuestionBox/>

      <Season/>

      <VideoSection/>



    </div>
  );
}

export default App;

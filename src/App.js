import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [text, setText] = useState("Enable Dark");
  const [alert, setAlert] = useState(null);
  const removeBg = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };
  const handleModeBg = (cls) => {
    removeBg();
    document.body.classList.add("bg-" + cls);
    console.log(cls);
  };
  const handleMode = () => {
    removeBg();
    if (text === "Enable Dark") {
      document.body.style.backgroundColor = "#021231";
      document.body.style.color = "white";
      setText("Enable Light");
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setText("Enable Dark");
      showAlert("Light mode Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleBodyBg = (color) => {
    console.log(color);
    document.body.style.backgroundColor = color;
    document.body.style.color = "white";
    showAlert(`${color} mode enabled `, "success");
  };
  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          aboutText="About Text"
          handleMode={handleMode}
          text={text}
          handleBodyBg={handleBodyBg}
          handleModeBg={handleModeBg}
        />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze"
                />
              }
            />
            <Route
              path="/about"
              element={<About handleMode={handleMode} text={text} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

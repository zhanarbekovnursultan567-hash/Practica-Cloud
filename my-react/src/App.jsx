import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>ReactJS Cloud Application</h1>

      <p>Бұл жоба GitHub Codespaces ортасында жасалды.</p>

      <p>
        CI/CD арқылы GitHub Actions көмегімен GitHub Pages-ке орналастырылды
        (AWS Amplify-дың баламасы).
      </p>

      <button
        onClick={() => setClicked(!clicked)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff9900",
          color: "#000",
        }}
      >
        {clicked ? "CI/CD жұмыс істейді!" : "Welcome to Cloud!"}
      </button>
    </div>
  );
}

export default App;

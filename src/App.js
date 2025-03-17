import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchDta = async () => {
    const [recepies, setRecepies] = useState([]);
    const data = await fetch("");
    const json = await data.json();
    setResults(json?.recepies);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>AutoComplete search bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(URL.createObjectURL(selected));
    } else {
      setFile(null);
      alert("Por favor, selecciona una imagen válida.");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#1a1a1a",
      color: "#fff"
    }}>
      <div style={{
        background: "#2c2c2c",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        textAlign: "center",
        width: "90%",
        maxWidth: "600px"
      }}>
        <h1>TP2 - Lenguajes IV</h1>
        <p>Subí una imagen para validarla y mostrarla:</p>
        
        <input type="file" accept="image/*" onChange={handleChange} />
        
        {file && (
          <div style={{ marginTop: "1rem" }}>
            <img src={file} alt="preview" style={{ maxWidth: "100%", borderRadius: "8px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

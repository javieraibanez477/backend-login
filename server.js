const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@mail.com" && password === "1234") {
    res.json({ success: true, message: "Login correcto" });
  } else {
    res.json({ success: false, message: "Credenciales incorrectas" });
  }
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

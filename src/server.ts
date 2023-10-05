import app from "./app";
import { bgRed } from "colors";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(bgRed.black(` 🧪 App running on port ${PORT} 🧪 `));
});

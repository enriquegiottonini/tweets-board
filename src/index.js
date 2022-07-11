import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/all.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

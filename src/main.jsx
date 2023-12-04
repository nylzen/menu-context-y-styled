import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MenuProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuProvider>
    <App />
  </MenuProvider>
);

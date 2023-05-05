import "./App.css";
import Header from "./components/Header";
import RouterPath from "./routes/RouterPath";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Header />
      <RouterPath />
    </div>
  );
}

export default App;

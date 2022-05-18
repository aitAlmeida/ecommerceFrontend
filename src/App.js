import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
     <Home/> 
    </div>
  );
};

export default App;
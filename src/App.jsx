// import ThemeButton from "../src/components/customComponents/ThemeButton";
import { useThemeContext } from "./hooks/useThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contactme from "./pages/Contactme";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <BrowserRouter>
        <main className={`${theme}`}>
          {/* <h1 className="text-4xl text-red-500 dark:text-black">{theme}</h1> */}
          {/* navbar comes here */}

          <div
            className="bg-yellow-200 dark:bg-gray-400"
            style={{ height: "120vh" }}
          >
            <NavBar />
            {/* <ThemeButton></ThemeButton> */}
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contactme />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </main>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        draggable
        autoClose={2000}
        hideProgressBar={true}
      ></ToastContainer>
    </>
  );
}

export default App;

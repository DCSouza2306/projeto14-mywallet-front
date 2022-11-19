import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LaunchPage from "../pages/LaunchPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SingUpPage";
import WalletPage from "../pages/WalletPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/launch" element={<LaunchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

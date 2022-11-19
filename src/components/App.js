import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LaunchPage from "../pages/LaunchPage";
import SignInPage from "../pages/SingInPage";
import SignUpPage from "../pages/SingUpPage";
import WalletPage from "../pages/WalletPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/launch" element={<LaunchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

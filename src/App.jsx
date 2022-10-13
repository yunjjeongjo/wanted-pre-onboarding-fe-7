import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import TodoProvider from "./contexts/TodoProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/todo" element={<MainPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </Layout>
      </TodoProvider>
    </div>
  );
}

export default App;

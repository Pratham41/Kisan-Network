import "./App.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import "antd/dist/antd.css";
import ContactScreen from "./screens/ContactScreen";
import Header from "./components/Header";
import SendMessage from "./components/SendMessage";
import MessageScrren from "./screens/MessageScrren";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="user/showContact/:id" element={<ContactScreen />} />
          <Route path="user/sendotp/:id" element={<SendMessage />} />
          <Route path="user/allMessages" element={<MessageScrren />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

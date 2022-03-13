import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/NavBar';
import ChatView from './views/ChatView';
import HomeView from './views/HomeView';
import WhoView from './views/WhoView';
import LoginView from "./views/LoginView";
import NotFound from "./views/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginView />} exact />
          <Route path="/home" element={<HomeView />} />
          <Route path="/chat" element={<ChatView />} />
          <Route path="/who" element={<WhoView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

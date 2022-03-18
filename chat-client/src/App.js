import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/NavBar';
import ChatView from './views/ChatView';
import HomeView from './views/HomeView';
import WhoView from './views/WhoView';
import NotFound from "./views/NotFound";
import Users from './shared/Users';
import User from "./shared/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} exact />
          <Route path="/chat" element={<ChatView />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/who" element={<WhoView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

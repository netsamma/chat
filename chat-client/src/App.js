import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Navbar from './shared/NavBar';
import ChatView from './views/ChatView';
import HomeView from './views/HomeView';
import WhoView from './views/WhoView';
import LoginView from "./views/LoginView";
import NotFound from "./views/NotFound";

=======
import Chat from './shared/Chat';
import Navbar from './shared/NavBar';
import HomeView from './views/HomeView';
import NotFound from './views/NotFound';
import WhoView from './views/WhoView';
>>>>>>> bcc0dd19413792a8629c9f147b1e11d410deed1a

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<LoginView />} exact />
          <Route path="/home" element={<HomeView />} />
          <Route path="/chat" element={<ChatView />} />
=======
          <Route path="/" element={<HomeView />} exact />
          <Route path="/chat" element={<Chat />} />
>>>>>>> bcc0dd19413792a8629c9f147b1e11d410deed1a
          <Route path="/who" element={<WhoView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

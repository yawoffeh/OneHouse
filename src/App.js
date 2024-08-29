import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index path='/' element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;

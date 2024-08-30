import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OrderSummary from "./pages/OrderSummary";
import MainLayout from './pages/MainLayout';
import ViewBill from './pages/ViewBill';
import Bills from './pages/Bills';
import Transactions from './pages/Transactions';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index path='/' element={<Home />}/>
        <Route path='/view-bill' element={<ViewBill />} />
        <Route path='/bills' element={<Bills />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Route>
    </Routes>
  );
}

export default App;

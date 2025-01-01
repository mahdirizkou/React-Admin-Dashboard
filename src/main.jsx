import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from '../page/Dashboard';
import Team from '../page/team';
import Task from '../page/task';
import Balance from '../page/balance';
import Form from '../page/form'
import Calandare from '../page/calandar'
import ControlledAccordions from '../page/fake'
import Char from '../page/char'
import Pie from '../page/pie'
import Line from '../page/line'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/task" element={<Task />} />
        <Route path="/account" element={<Balance />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calandar" element={<Calandare />} />
        <Route path="/fake" element={<ControlledAccordions />} />
        <Route path="/char" element={<Char />} />
        <Route path='/pie' element={<Pie />} />
        <Route path='/line' element={<Line />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

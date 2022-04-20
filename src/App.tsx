import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Layout from "./components/layout/Layout";

import HomePage from './pages/home'
import AddPage from './pages/add';

import Store from './store/store'

let MeetupsContext;

function App() {
  return (
    <>
      <BrowserRouter>
          <Store>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="add" element={<AddPage />} />
              </Routes>
            </Layout>
          </Store>
        </BrowserRouter>
    </>
  );
}

export default App;
export {MeetupsContext};

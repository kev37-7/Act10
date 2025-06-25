import { useState } from 'react'
import './App.css'
import React from 'react';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Ssection } from './Components/Section/Ssection';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Ssection />
      
    </>
  );
}

export default App

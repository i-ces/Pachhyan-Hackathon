import React from 'react';
import TopBar from './components/TopBar';
import Rules from './components/Rules';
import Prizepool from './components/Prizepool';
import MainContent from './components/MainContent';
import JudgePanel from './components/JudgePanel';
import FAQs from './components/FAQs';

export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="content-wrapper">
        <div><MainContent /></div>
        <div><JudgePanel /></div>
        <div><Prizepool /></div>
        <div><Rules /></div>
        <div><FAQs /></div>
      </div>
    </div>
  );
}

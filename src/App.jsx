import React from 'react'
import TopBar from './components/TopBar'
import Rules from './components/Rules'
import Prizepool from './components/Prizepool'
import MainContent from './components/MainContent'
import JudgePanel from './components/JudgePanel'

export default function App() {
  return (
    <>
    <TopBar/>
    <MainContent/>
    <JudgePanel/>
    <Prizepool/>
    <Rules/>
    </>
  )
}

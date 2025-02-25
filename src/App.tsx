import React from "react"
import ImageFrame from "./components/ImageFrame"
import CookingSection from "./components/CookingSection"
import TasteColors from "./components/TasteColors"
import './App.css'

const App: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="up-section">
        <ImageFrame />
        <CookingSection />
      </div>
      <div className="down-section">
        <TasteColors />
      </div>
    </div>
  )
}

export default App

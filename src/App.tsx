import React from "react"
import ImageFrame from "./components/ImageFrame"
import CookingSection from "./components/CookingSection"
import TasteColors from "./components/TasteColors"
import './App.css'

const App: React.FC = () => {
  return (
    <main className="dashboard-container">
      <section className="up-section">
        <ImageFrame />
        <CookingSection />
      </section>
      <section className="down-section">
        <TasteColors />
      </section>
    </main>
  )
}

export default App

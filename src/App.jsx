import React from "react"
import { Navbar } from "./components"
import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { routes } from "./routes"

export const App = () => {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Navbar />
      {element}
      <Toaster />
    </div>
  )
}
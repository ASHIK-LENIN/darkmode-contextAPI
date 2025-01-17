import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"
import ThemeProvider from "./context/ThemeContext"


const App = () => {

  return (

    <>
      <ThemeProvider>

        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </ThemeProvider>


    </>
  )
}

export default App
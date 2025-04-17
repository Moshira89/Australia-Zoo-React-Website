import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mammals from "./pages/Mammals"
import Birds from "./pages/Birds"
import Reptiles from "./pages/Reptiles"
import AnimalDetail from "./components/AnimalDetail"
import Layout from "./components/Layout"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mammals" element={<Mammals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/reptiles" element={<Reptiles />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App

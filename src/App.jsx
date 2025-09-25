import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import Home from "./home";
import Original from "./original";
import Informativa from "./informativa";
import Favoritos from "./favoritos";
import Detalle from "./detalle";




function App() {
  const [count, setCount] = useState(0);

   return (
    <>
    <Router>

        <nav className="c-menu">
          <Link to="/home">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalles">Detalles</Link>
        </nav>

      <Routes>
          <Route path="/home" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/original" element={<Original /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;

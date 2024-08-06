import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FicheLogement from './FicheLogement';
import APropos from './APropos';
import Error from './Error';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fiche-Logement" element={<FicheLogement />} />
      <Route path="/A-Propos" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
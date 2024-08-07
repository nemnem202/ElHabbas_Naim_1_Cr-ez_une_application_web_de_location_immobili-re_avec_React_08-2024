import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FicheLogement from './FicheLogement';
import APropos from './APropos';
import NotFound from './NotFound';

import '../styles/App.scss'
import '../styles/Header.scss'
import '../styles/Footer.scss'
import '../styles/ImagePresentationCard.scss'
import '../styles/LocationCard.scss'




const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fiche-Logement" element={<FicheLogement />} />
      <Route path="/A-Propos" element={<APropos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
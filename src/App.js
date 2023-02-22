import React from "react";
import logo from "./logo.svg";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Chat from './components/chat'
// import Activite from "./Activite";
// import CreerActivite from "./CreerActivite";
// import Test from './components/test';



import ConnexionParent from './Component-connexion-parent/Connexion';
import CreationActivite from './Component-creation-activite/Creation';
import AfficherActivite from './Component-afficher-activite/AfficherActivite';
import InscriptionParent from './Component-inscription-parent/Inscription';
import ConnexionBenevole from './Component-connexion-benevole/Connexion';
import InscriptionBenevole from './Component-inscription-benevole/Inscription';
import AfficherUtilisateurs from './Component-afficher-utilisateurs/Utilisateurs';
export default function App() {

 
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ConnexionParent">Connexion Parent</Link>
            </li>
            <li>
              <Link to="/InscriptionParent">Inscription Parent</Link>
            </li>
            <li>
              <Link to="/ConnexionBenevole">Connexion Benevole</Link>
            </li>
            <li>
              <Link to="/InscriptionBenevole">Inscription Benevole</Link>
            </li>
            <li>
              <Link to="/CreationActivite">Creation Activite</Link>
            </li>
             <li>
              <Link to="/AfficherActivite">Afficher Activite</Link>
            </li> 
            <li>
              <Link to="/AfficherUtilisateurs">Afficher Utilisateurs</Link>
            </li> 
        
           
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ConnexionParent" element={<ConnexionParent/>}>
          </Route>
          <Route path="/InscriptionParent" element={<InscriptionParent/>}>
          </Route>
          <Route path="/ConnexionBenevole" element={<ConnexionBenevole/>}>
          </Route>
          <Route path="/InscriptionBenevole" element={<InscriptionBenevole/>}>
          </Route>
          <Route path="/CreationActivite" element={<CreationActivite/>}>
          </Route>
           <Route path="/AfficherActivite" element={<AfficherActivite/>}>
          </Route> 
          <Route path="/AfficherUtilisateurs" element={<AfficherUtilisateurs/>}>
          </Route>
          
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}


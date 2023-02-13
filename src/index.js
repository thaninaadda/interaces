import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ConnexionParent from './Component-connexion-parent/Connexion';
//import InscriptionParent from './Component-inscription-parent/Inscription';
//import ConnexionBenevole from './Component-connexion/Connexion';
import InscriptionBenevole from './Component-inscription/Inscription';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <ConnexionBenevole />  */}
    {/* <ConnexionParent /> */}
    {/* <InscriptionParent /> */}
     <InscriptionBenevole /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

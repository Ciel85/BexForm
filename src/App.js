import React, { useState } from "react";
import axios from 'axios';
import "./app.css";



const App = () => {
  const [nom, setNom] = useState("");
  const [idCard, setIdCard] = useState("");
  const [modeleTelephone, setModeleTelephone] = useState("");
  const [forfait, setForfait] = useState("");
  const [paiement, setPaiement] = useState("");
  const [revenusMensuels, setRevenusMensuels] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Nom/Prénoms :", nom);
    // console.log("ID Card :", idCard);
    // console.log("Modèle de Téléphone :", modeleTelephone);
    // console.log("Forfait Bexcare :", forfait);
    // console.log("Paiement :", paiement);
    // console.log("Revenus mensuels :", revenusMensuels);
    const data={
      Nom:nom,
      IdCard:idCard,
      ModeleTelephone: modeleTelephone,
      Forfait: forfait,
      Paiement:paiement,
      RevenusMensuels: revenusMensuels
    }
    axios.post('https://sheet.best/api/sheets/a6b52467-c799-4887-b7f0-3d86b096a45a', data).then((response)=>{
      setNom('');
      setIdCard('');
      setModeleTelephone('');
      setForfait('');
      setPaiement('');
      setRevenusMensuels('')
    })
   
  };

  return (
    <div className="app">
    <form onSubmit={handleSubmit}>
       <h1>Register</h1>
      <label>
        Nom/Prénoms :
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </label>


      <label>
        ID Card :
        <input
          type="text"
          value={idCard}
          onChange={(e) => setIdCard(e.target.value)}
          required
        />
      </label>
     

      <label>
        Modèle de Téléphone :
        <input
          type="text"
          value={modeleTelephone}
          onChange={(e) => setModeleTelephone(e.target.value)}
          required
        />
      </label>


      <label>
        Forfait Bexcare :
        <select value={forfait} onChange={(e) => setForfait(e.target.value)}>
          <option value="">Choisir</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="VIP">VIP</option>
        </select>
      </label>


      <label>
        Paiement :
        <select value={paiement} onChange={(e) => setPaiement(e.target.value)}>
          <option value="">Choisir</option>
          <option value="annuel">Annuel</option>
          <option value="mensualites">Mensualités</option>
        </select>
      </label>

      <label>
        Revenus mensuels :
        <input
          type="text"
          value={revenusMensuels}
          onChange={(e) => setRevenusMensuels(e.target.value)}
          required
        />
      </label>

      <button type="submit">Envoyer</button>
    </form>
    </div>
  );
};




export default App;
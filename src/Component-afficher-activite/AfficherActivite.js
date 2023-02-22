import './AfficherActivite.css';
import React from "react";

import { Component, useState, state } from "react";
import axios from "axios";

export default class AfficherActivite extends Component {

  constructor(props){
    super(props);
    this.state ={
      activite: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/activite')
    .then(res =>{
      this.setState({ activite : res.data
    })
    console.log(res.data);
  })
}



render(){
  const {activite} = this.state
  return (
    <div className="main">
      <table>
        <tr>
        <th>nom:</th>
        <th>description:</th>
        <th>tarif:</th>
        <th>plateforme:</th>
        <th>lieu:</th>
        <th>lien zoom:</th>
        </tr>
        
      {activite.map(activites=> <tr>
       <td>{activites.nomEvent}</td>
       <td>{activites.description}</td>
       <td>{activites.tarif}</td>
       <td>{activites.platforme}</td>
       <td>{activites.lieu}</td>
       <td>{activites.LienZoom}</td>
      </tr>)}
      </table>
      
    </div>
  );
}
}

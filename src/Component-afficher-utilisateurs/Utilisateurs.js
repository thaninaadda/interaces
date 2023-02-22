import './Utilisateurs.css';
import React from "react";

import { Component, useState, state } from "react";
import axios from "axios";

export default class Utilisateurs extends Component {

  constructor(props){
    super(props);
    this.state ={
      parent: [],
      benevole: []
    }
  }


  componentDidMount()
  {
    axios.get('http://localhost:8080/parent')
    .then(res =>{
      this.setState({ parent : res.data
    })
    console.log(res.data);
    
    })
    axios.get('http://localhost:8080/benevole')
    .then(res =>{
      this.setState({ benevole : res.data
    })
    console.log(res.data);
  })
  }

 



  render(){
    const {parent} = this.state
    const {benevole} = this.state
    return (
      <body>
      <div className="main">
          <table>
            <h2>liste des parents:</h2>
            <tr>
            <th>nom:</th>
            <th>prenom:</th>
            </tr>
            
          {parent.map(parents=> <tr>
          <td>{parents.nom}</td>
          <td>{parents.prenom}</td>
          </tr>)}
          </table>

          <table>
          <h2>liste des benevoles:</h2>
            <tr>
            <th>nom:</th>
            <th>prenom:</th>
            </tr>
            
          {benevole.map(benevoles=> <tr>
          <td>{benevoles.nom}</td>
          <td>{benevoles.prenom}</td>
         
          </tr>)}
          </table>
          
      </div>
      
      </body>


    );
  }
}

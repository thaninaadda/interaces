import './Inscription.css';
import imageBebe from "./images/image1.jpg";



function Inscription() {
  return (
    <div className="main">


      <div className="sub-main">
        <div className='input-div'>
          <h2>Inscription Benevole</h2>

          <h4>Entrez votre nom et prenom:</h4>
          <div className='input-nomprenom' >
            <div className='input-nom'>
              <input type="text" placeholder="Entrez Votre Nom" className="input" /><br></br>
            </div>

            <div className='input-prenom'>
              <input type="texte" placeholder="Entrez Votre Prenom" className="input" />
            </div>
          </div>

          <div className='input-nomprenom' >
            <div className='input-nom'>
              <input type="text" placeholder="Entrez Votre Email" className="input" /><br></br>
            </div>

            <div className='input-prenom'>
              <input type="password" placeholder="Entrez Votre Telephone" className="input" />
            </div>
          </div>


          <div >
            <input type="date" placeholder="Entrez Votre Date de Naissance" className="input" /><br></br>
            <input type="text" placeholder="Entrez Votre Adresse" className="input" />
          </div>


          <div className="input">
            <input type="radio" value="Male" name="gender" /> Francais
            <input type="radio" value="Female" name="gender" /> Anglais
            <input type="radio" value="Other" name="gender" /> Autre
            <br></br>
            <input type="text" placeholder="Entrez une autre langue" className="input" /><br></br>
          </div>

          <div className="input">
            <br></br>
            <input type="text" placeholder="Delai totale d’allaitement" className="input" />
            <input type="text" placeholder="Experience benevole passee" className="input" />
            <input type="text" placeholder="Autre Commentaires" className="input" />
          </div>

          <div className="login-button">
            <button>Connexion</button>
          </div>

          <p className="link">
            <a>s'inscrire</a>
          </p>


        </div>

      </div>

      <div >
        < img className="sub-main2" src={imageBebe} alt="imageBebe" />
      </div>
    </div>
  );
}

export default Inscription;
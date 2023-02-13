import './Inscription.css';
import imageBebe from "./images/image1.jpg";



function Inscription() {
  return (
    <div className="main">


          <div className="sub-main">
            <div className='input-div'>
              <h2>Inscription cote Parent</h2>

              <div className='input-nomprenom' >
                <div className='input-nom'>
                <input type="text" placeholder="Entrez Votre Nom" className="input" /><br></br>
                </div>

                <div className='input-prenom'>
                <input type="password" placeholder="Entrez Votre Prenom" className="input" />
                </div>
              </div>
              

              <div >
                <input type="text" placeholder="Entrez Votre Email" className="input" /><br></br>
                <input type="password" placeholder="Entrez Votre Mot de passe" className="input" />
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
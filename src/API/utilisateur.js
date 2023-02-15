import React, {Component} from "react";
import axios from "axios";

class Utilisateur extends Component{

    constructor(props)
    {
        super(props)

        this.state= {
            login:'',
            password : ''
        }
    }



    componentDidMount(){
        axios.post('http://localhost:3001/api/users/login').then(response => {
            this.setState({
                    posts :response.data

            })
            console.log(response.data)
        })
    }


    handleSubmit= (e) =>{
        console.log(e.target)

    }
    render() {

        const {posts}= this.state
        return (

            <form action='POST' onSubmit={this.handleSubmit}>

                <div>
                    <input
                    type='text'
                    name='login'
                    
                    ></input>

                    <input
                    type='text'
                    name='mdp'
                    
                    ></input>
                </div>
                <div>
                    <button type='submit'> bouton test</button>
                </div>
            </form>
        )

    }
}

export default Utilisateur
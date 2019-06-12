import React, {Component} from 'react'

import './New.css'

class New extends Component {


    state  = {
        image: null,
        author: '',
        place: '',
        description: '',
        hastags: ''
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleImageChange = e => {
        this.setState({image: e.target.files[0]})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('Form')
        console.log(this.state)
    }


    render(){
        return(
            <div className="component">
                <form id="new-post" onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleImageChange}/>
                    <input type="text" onChange={this.handleChange} value={this.state.author} name="author" placeholder="Autor do post"/>
                    <input type="text" onChange={this.handleChange} value={this.state.place} name="place" placeholder="Local do post"/>
                    <input type="text" onChange={this.handleChange} value={this.state.description} name="description" placeholder="Descrição do post"/>
                    <input type="text" onChange={this.handleChange} value={this.state.hastags} name="hastags" placeholder="Tags do post"/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }


}


export default New
import React, {Component} from 'react'

import './New.css'
import api from '../services/api'

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


    handleSubmit = async e => {
        e.preventDefault()
        console.log('Form')
        console.log(this.state)
        const data = new FormData()

        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hastags', this.state.hastags)

        await api.post('posts', data)

        this.props.history.push('/')
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
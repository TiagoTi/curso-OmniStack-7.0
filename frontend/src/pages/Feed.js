import React, {Component} from 'react'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {


    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Tiago Domingos Cipriano</span>
                            <span className="place">Franca SP</span>
                        </div>

                        <img src={more} alt="Mais"/>
                    </header>

                    <img src="http://127.0.0.1:3333/files/Screenshot from 2019-06-10 13-04-04.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Dar like"/>
                            <img src={comment} alt="Comentar"/>
                            <img src={send} alt="enviar"/>
                        </div>
                        <strong>900 curtida</strong>
                        <p>Site toper D+<samp>#react #ti2</samp></p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Tiago Domingos Cipriano</span>
                            <span className="place">Franca SP</span>
                        </div>

                        <img src={more} alt="Mais"/>
                    </header>

                    <img src="http://127.0.0.1:3333/files/Screenshot from 2019-06-10 13-04-04.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Dar like"/>
                            <img src={comment} alt="Comentar"/>
                            <img src={send} alt="enviar"/>
                        </div>
                        <strong>900 curtida</strong>
                        <p>Site toper D+<samp>#react #ti2</samp></p>
                    </footer>
                </article>
            </section>
        )
    }


}

export default Feed
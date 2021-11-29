import React, { Component } from 'react'
import './Developer.css';
export class Developer extends Component {
    render() {
        return (
            <div className="main">
                Developed with <span className="heart">&#10084;</span> by <a href="https://www.linkedin.com/in/janmesh-kumar/" target="_blank" rel="noreferrer" title="Janmesh Kumar || LinkedIn">Janmesh Kumar</a>.
            </div>
        )
    }
}

export default Developer

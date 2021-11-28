import React, { Component } from 'react'

class Node extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisited: false,
            isStart: false,
            isEnd: false,
            isWall: false,
            isShortestPath: false
        }
    }
    render () {
        return (
            <div className="node">
                
            </div>
        )
    }
}

export default Node
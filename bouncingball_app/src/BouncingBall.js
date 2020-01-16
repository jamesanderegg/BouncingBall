import React, { Component } from 'react';
import Ball from "./Ball";
import * as d3 from "d3";

class BouncingBall extends Component {
    constructor(){
        super();

        this.state = {
            y: 5,
            vy: 0
        };
    }

    componentDidMount(){
        this.timer = d3.timer(this.gameLoop.bind(this));
    }

    componentWillUnmount(){
        this.timer.stop();
    }

    gameLoop = () => {
        
        let { y, vy, lastFrame } = this.state;
        
        let frames = 1;
        if(lastFrame){
            frames= (d3.now() - lastFrame) / (1000/60);
        }

        for(let i=0; i <frames; i++){
            if(y > this.props.max_h){
                vy = -vy * 0.87;
            }
            y= y +vy;
            vy = vy + 0.3;
        }
        
        this.setState({
            y: y+vy,
            vy: vy + 0.5,
            lastFrom: d3.now()
        })
    }
    render(){
        return (<g>
                    <Ball x={this.props.x} y={this.state.y} />
                </g>
                );
    }
}

export default BouncingBall;
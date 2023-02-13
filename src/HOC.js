import React, { Component } from 'react';

function higherOrderComponent(HOCComponent){
    return class extends Component{
        render(){
            return(
                <div>
                    <HOCComponent/>
                </div>
            )
        }
}
}

export  default higherOrderComponent;

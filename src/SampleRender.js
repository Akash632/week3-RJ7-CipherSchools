import React, { Component } from 'react';
import RenderProps from './RenderProps';

export default class SampleRender extends Component {
  render() {
    return (
      <div>
        <RenderProps
        render={()=>{
            return(
                <div>
                    <h2>This is from render props</h2>
                    </div>
            );
        }}
        />
      </div>
    );
  }
}

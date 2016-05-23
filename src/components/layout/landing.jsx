import React from 'react';
import { Link  } from 'react-router';
import {Map} from 'app/components/map/index';

export default class Landing extends React.Component {

  constructor() {
    super();
    this.state={view:'2d'}
  }

  setview(view){
      debugger;
    this.setState({view});
  }

  render() {
    return (<div className="landing">
            <a href="#" onClick={()=>{this.setview('2d')}}>2d</a> |<a href="#" onClick={()=>{this.setview('3d')}}>3d</a>
        
              <div className="main">
              <Map view={this.state.view}/>
              </div>
             </div>
          )
    }
}

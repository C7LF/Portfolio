import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';


class Project extends React.Component {  
  render() {
    function NumberList(props) {
      const listItems = props.map((props, index) =>
        <li key={index}>
          {props}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    function checkPropsIsLoR(lor) {
      let columnClass = "col-md-7";
      const columnReverse = " order-first order-md-2"
      if(lor === "L") {
        return columnClass + columnReverse;
      } else {
        return columnClass;
      }
    }
  
    return (
      <>
        <div className="row">
          <Fade left>
            <div className={checkPropsIsLoR(this.props.LoR)} >
                <h3>{this.props.pTitle}</h3>
                <p className="small">{this.props.pSubTitle}</p>
                <p>{this.props.pDesc}</p>
                <div className="technologies">
                  <ul>
                    {NumberList(this.props.pTechnologies)}
                  </ul>
                </div>
                <div className="links">
                  {this.props.codeLink ? <a className="btn btn-view" href={this.props.codeLink} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faCode} /> View Code</a> : ''}
                  {this.props.webLink ? <a className="btn btn-view-solid" href={this.props.webLink} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGlobe} /> Visit Website</a> : ''}
                </div>
            </div>
            <div className="col-md-5">
                <img src={require("../inc/img/" + this.props.pImage)} width="100%" alt={this.props.pTitle} />
            </div>
          </Fade>
        </div>
         <hr />          
      </>
    )
  }
}

export default Project;

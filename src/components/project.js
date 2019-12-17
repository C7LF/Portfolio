import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


class Project extends React.Component {  

  render() {
    // Display Array as list items.
    function NumberList(props) {
      const numbers = props;
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    function checkPropsIsLoR(props) {
      let columnClass = "col-md-7";
      const columnReverse = " order-first order-md-2"
      const data = props;
      if(data === "L") {
        return columnClass + columnReverse;
      } else {
        return columnClass;
      }
    }
  

    return (
      <>
            <div className="row" data-aos="fade-right">
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
                      {this.props.codeLink ? <a className="btn btn-view" href={this.props.codeLink} target="_blank"><FontAwesomeIcon icon={faCode} /> View Code</a> : ''}
                      {this.props.webLink ? <a className="btn btn-view-solid" href={this.props.webLink} target="_blank"><FontAwesomeIcon icon={faGlobe} /> Visit Website</a> : ''}
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={require("../inc/img/" + this.props.pImage)} width="100%" alt={this.props.pTitle} />
                </div>
            </div>
         <hr />          
      </>
    )
  }
}

export default Project;

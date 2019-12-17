import React from 'react';

class About extends React.Component {
  render() {
    return (
      <>
        <div className="first">
          <a id="first"></a>
          <div className="about">
            <div className="container innerabout">
              <h2>About</h2>
              <p>{this.props.aboutContent}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About;

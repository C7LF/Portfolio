import React from 'react';

class BlinkLabel extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    showlabel: true,
    label: this.props.label
  };
  this.myFunction = this.myFunction.bind(this);
}

myFunction() {
  var sLb = ! (this.state.showlabel);
  this.setState({showlabel: sLb});
}

componentDidMount() {
  setInterval(this.myFunction, 300)
}

render() {
  return (
    <span>
      {(this.state.showlabel)?this.state.label:''}
    </span>
   );
  }
}


export default BlinkLabel;

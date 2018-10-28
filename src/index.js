import React, { Component } from 'react';

class InfiniteLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount(props) {
        this.loop();
        setInterval(() => this.loop(), this.props.data.length * this.props.duration);
}

loop(){
    for (let i = 0; i < this.props.data.length; i++) {
        let img = this.props.data[i];
        setTimeout(() => this.setState({ img }), i * this.props.duration); 
    }
};

  render() {
    return (
            <div style={{
              width: this.props.size * 2.2,
              height: this.props.size * 2.2,
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundImage: `url(${this.props.background})`,
              backgroundSize: 'cover',            
              }}
              >
                <img style={{width: '100vh', height: this.props.size}} src={this.state.img} alt="infiniteLoop"/>
            </div>
    );
  }
}

export default InfiniteLoop;
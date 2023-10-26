import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: 'John Doe',
        bio: 'A passionate developer',
        imgSrc: '/public/UnknownUser1024.webp',
        profession: 'Software Engineer',
        sec: 0, // Initialize sec as 0
      },
      show: false,
      mountTime: new Date(), // Store the mount time as a Date object
    };
  }

  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(this.updateMountTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMountTime = () => {
    // Calculate the time elapsed in seconds
    const elapsedTime = Math.floor((new Date() - this.state.mountTime) / 1000);
    this.setState(prevState => ({
      Person: {
        ...prevState.Person,
        sec: elapsedTime, // Update the sec property with the elapsed time
      },
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} width={80} />
            <p>Profession: {this.state.Person.profession}</p>
          </div>
        )}
        <p>Component Mounted {this.state.Person.sec} seconds ago.</p>
      </div>
    );
  }
}

export default App;

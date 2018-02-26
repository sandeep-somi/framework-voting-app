import React, { Component } from 'react'
import './App.css'
import { Jumbotron, Row, Col, Image } from 'react-bootstrap'
import { voteReact, voteAngular, voteVuejs } from './actions'

//import ReduxDemo from './reduxDemo'

class App extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }


  render() {
    return (
      <div>
        <Jumbotron style={{'textAlign': 'center'}}>
          <Image src="https://vignette.wikia.nocookie.net/althistory/images/9/9a/Vote-icon.png/revision/latest?cb=20140224023949" height="96px" alt="Voting Application" />
          <h2>What is your favourite front-end framework in 2017?</h2>
          <h5>Click on the logos below to vote!</h5>
          <br />
            <Row>
              <Col md={3}></Col>
              <Col md={2}>
                <Image className="hover1" src="https://angular.io/assets/images/logos/angular/angular.png" height="96px" alt="Angular" onClick={this.handleVoteAngular} />
              </Col>
              <Col md={2}>
                <Image className="hover1" src="http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png" height="96px" alt="React" onClick={this.handleVoteReact} />
              </Col>
              <Col md={2}>
                <Image className="hover1" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" height="96px" alt="Vue.Js" onClick={this.handleVoteVuejs} />
              </Col>
            </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

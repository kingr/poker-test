import React, { Component } from 'react';
import * as actions from './actions';
import { tableShape } from './types';
import { connect } from 'react-redux';
import Table from './components/Table';

import './App.css';

class App extends Component {
  static propTypes = {
    appState: tableShape.isRequired,
  }

  componentDidMount() {
    this.props.getGame(1);
  }

  render() {
    const { activeGame, isLoadingGame } = this.props.appState;

    return (
          <div className="App">
            <div className="select-game-wrapper">
              <p>Select Game:</p>
              <ul>
                  <li onClick={() => this.props.getGame(1)}>Game 1</li>
                  <li onClick={() => this.props.getGame(2)}>Game 2</li>
                  <li onClick={() => this.props.getGame(3)}>Game 3</li>
                  <li onClick={() => this.props.getGame(4)}>Game 4</li>
                  <li onClick={() => this.props.getGame(5)}>Game 5</li>
                  <li onClick={() => this.props.getGame(6)}>Game 6</li>
                  <li onClick={() => this.props.getGame(7)}>Game 7</li>
                  <li onClick={() => this.props.getGame(8)}>Game 8</li>
                </ul>
            </div>
            {isLoadingGame === false ? <Table table={activeGame} /> : <div className="loading-game"><p>Loading Game...</p></div>}
          </div>
    );
  }
}

const mapStateToProps = state => ({ appState: state.game });

const mapDispatchToProps = dispatch => ({
  getGame: value => dispatch(actions.getGameData({payload: value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

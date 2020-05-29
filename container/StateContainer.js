import { Container } from 'unstated';

export default class StateContainer extends Container {
    constructor(props) {
        super(props)
        this.state={
            numPlayer: 3,
            placeholders: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'],
            names: [],
            themes: ['小学校のときの怖い思い出', '幼稚園のときの失敗談', '中学校のときの痛かった思い出', 'ダミー', 'ダミー', 'ダミー'],
            turn: 0,
            decciNumber: 0,
        }
    }

    addPlayer() {
        if (this.state.numPlayer < 6) {
            this.setState({numPlayer: this.state.numPlayer + 1})
        }
    }

    reducePlayer() {
        if (this.state.numPlayer > 3) {
            this.setState({numPlayer: this.state.numPlayer - 1})
        }        
    }

    nextTurn() {
        this.setState({turn: this.state.turn + 1})
    }

    clearTurn() {
        this.setState({turn: 0})
    }

    rename(name) {
        this.setState({names: [...this.state.names, name]})
    }

    nextGame() {
        this.setState({
            turn: 0,
        })
    }

    restart() {
        this.setState({
            turn: 0,
            names: [],
        })
    }

    changeDecciNum() {
        const num = Math.floor( Math.random() * (this.state.numPlayer));
        this.setState({decciNumber: num})
    }

    sortThemes() {
        const newThemes = shuffle(this.state.themes)
        this.setState({themes: newThemes})
    }
}

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
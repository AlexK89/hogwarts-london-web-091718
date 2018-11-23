import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TilesList from './Tiles/TilesList';

class App extends Component {
    state = {
        hogs: [],
        showGreased: false
    };

    componentWillMount() {
        this.setState({hogs: [...hogs]})
    }

    greaseFilter = () => {
        this.setState({showGreased: !this.state.showGreased});
    };

    sortHandler = (type) => {
        const sortedHogs = [...this.state.hogs];

        switch(type) {
            case 'name':
                sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'weight':
                sortedHogs.sort((a, b) => a.weight - b.weight);
                break;
        }

        this.setState({hogs: [...sortedHogs]});
    };

    render() {
        const hogs = [...this.state.hogs];
        const hogsForRendering = (this.state.showGreased) ?  hogs.filter(item => item.greased) : hogs;
        return (
            <div className="App">
                <Nav showGreased={this.state.showGreased} greaseFilter={this.greaseFilter} sortHandler={this.sortHandler}/>
                <TilesList hogs={hogsForRendering}/>
            </div>
        )
    }
}

export default App;

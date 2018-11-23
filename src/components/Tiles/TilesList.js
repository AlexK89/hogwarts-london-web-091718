import React from 'react';
import Tile from './Tile';

export default class TilesList extends React.Component {
    render() {
        const hogsList = this.props.hogs.map((hog, index) => <Tile key={index} hogEl={hog}/>);

        return (
            <div className="tiles_list">
                {hogsList}
            </div>
        );
    }
}
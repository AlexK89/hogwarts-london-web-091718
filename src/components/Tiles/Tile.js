import React from 'react';

export default class Tile extends React.Component {
    state = {
        clicked: false
    };

    clickHandler = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        const hog = this.props.hogEl;
        const greased = hog.greased ? 'greased' : '';
        const clicked = this.state.clicked ? 'active' : '';
        const img = require(`../../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`);

        return (
            <div className="tiles_list__item__wrapper">
                <div className={`tiles_list__item ${greased}`} onClick={this.clickHandler}>
                    <div className="tiles_list__item__img">
                        <img src={img} alt={hog.name}/>
                    </div>
                    <h3>{hog.name}</h3>
                    <div className={`tiles_list__item_details ${clicked} ${greased}`}>
                        <div className="name">
                            <h4>Name:</h4>
                            <p>{hog.name}</p>
                        </div>
                        <div className="specialty">
                            <h4>Specialty:</h4>
                            <p>{hog.specialty}</p>
                        </div>
                        <div className="weight">
                            <h4>Weight:</h4>
                            <p>{hog.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
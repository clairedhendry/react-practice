import React, {useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';
import './starfall.css';

export default class StarFall extends React.Component {

// initialize random array of star data point [x, y]
// x corresponds to grid column
// y corresponds to grid row
// make sure no duplicates
// map over array, creating buttons at data points
// buttons should get random attr to distinguish where in grid box - center, left, right, etc

state = {
    starCount: 0,
    starsArray: [],
}

populateStarsArray() {
    let stars = [];
    let min = Math.ceil(0)
    let max = Math.floor(151)
    for(let i = 0; i < 150; i++) {
        let x = Math.floor(Math.random() * (max - min) + min);
        let y = Math.floor(Math.random() * (max - min) + min);
        let star = [x, y]
        stars.push(star)
    }
    this.setState({
        starsArray: stars
    })
}

componentDidMount() {
    this.populateStarsArray()
}

componentWillUnmount() {
    this.setState({
        starsArray: []
    })
}

handleButtonClick = () => {
    let starCount = this.state.starCount;
    this.setState({
        starCount: starCount + 1
    })
}

renderStarChart() {
    const stars = this.state.starsArray;
    if(stars.length === 0) {
        return (
            <div>Loading Stars</div>
        )
    }
    else {
    return (
        stars.map((star, i) =>  {
                  return (<button 
                    className='star' 
                    onClick={this.handleButtonClick}
                    key={star[i]}
                    id={star[i]}
                    style={{gridRow: star[0], gridColumn: star[1]}}>
                    </button>
                  )
         } )
    )     
        }
}

render() {
    return(
            <div className='starfall-container'>
                {this.renderStarChart()}
                {this.state.starCount === 1 
                ? <div className='star-count'>You've counted {this.state.starCount} star!</div>
                : <div className='star-count'>You've counted {this.state.starCount} stars!</div>
                }
            </div>
            )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardStack, Card } from 'react-cardstack';



class Groups extends Component {

    constructor(props) {
        super(props);

    }

    handleCardClick(isCardSelected) {
        console.log(isCardSelected);
    }

    render() {
        return (
            <div className="Groups" >
                    <CardStack
                        height={500}
                        width={400}
                        background='#f8f8f8'
                        hoverOffset={25}>

                            <Card background='#2980B9'
                                  cardClicked={this.handleCardClick.bind(this)}>
                                <h1>Group 1</h1> 
                            </Card>

                            <Card background='#27AE60' 
                                  cardClicked={this.handleCardClick.bind(this)}>
                                <h1>Group 2</h1>
                            </Card>
                    </CardStack>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Groups);

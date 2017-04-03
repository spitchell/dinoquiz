import React, {Component} from 'react';

class AnswerButton extends Component {
    render() {
        return(
            <button onClick={this.props.handler.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default AnswerButton;

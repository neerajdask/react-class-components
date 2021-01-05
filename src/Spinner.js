import React from 'react';
import ReactDOM from 'react-dom';

const Spinner = (props) => {
    return (
        <div className='ui active dimmer'>
            <div class='ui big text loader'>{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;

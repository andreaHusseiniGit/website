import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', height: '400px', backgroundColor: `${props.color}`, paddingTop: '30px' }}>
            {props.children}
        </div >
    )
}

export default Scroll;
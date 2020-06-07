import React from 'react';


function CalculatorRow(props) {
    return (
        <div className='row'>
        {
            props.children.map( child => <CalculatorColumn name={child} />)
        }
        </div>
    )
}
function CalculatorColumn(props) {
    const cls = 'col-md-' + (props.name === '0' ? '6 ' : '3 ') + ('/x-+='.includes(props.name) ? 'coral' : 'silver')
    return (
        <div className={cls} >
            {props.name}
        </div>
    )
}

export default CalculatorRow;
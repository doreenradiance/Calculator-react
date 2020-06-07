import React from 'react';
import CalculatorRow from './components'

function App() {
  return (
    <div className="App">
		<div className='container c'>

		<div className='row grey'>
			<div className='col-md-12'>0</div>
		</div>
	
      <CalculatorRow children={
		  ['AC', '+/-', '%', '/']} />

	  <CalculatorRow children={
		  ['7', '8', '9', 'x']} />
		  
	  <CalculatorRow children={
		  ['4', '5', '6', '-' ]} />

      <CalculatorRow children={
		 ['1', '2', '3', '+']} />

      <CalculatorRow children={
		 ['0', '.', '=']} />
</div>
    </div>

  );
}
 export default App;


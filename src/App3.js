import CreditCardDetector from './utils/creditCardDetector';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';

function App3() {

  const [state, setState] = useState('')
  const [value, setValue] = useState('')

  const onCreditCardChange = (e) => {
    setState(e.target.value)
    let result
    const creditCardInfo = CreditCardDetector.getInfo(state, 'strict mode');
    const detector = creditCardInfo.type
    console.log(state)
    result = detector
    if (detector === 'amex') {
      result = 'American Express'
    }
    if (detector === 'uatp') {
      result = 'Universal Air Travel Plan'
    }
    if (detector === 'uatp') {
      result = 'Universal Air Travel Plan'
    }
    setValue(result)
  }
  const handleClear = () => {
    setState('')
    setValue('')
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input max={16} placeholder="Enter your credit card number"
          name='credit'
          value={state}
          onChange={onCreditCardChange} />
        <button onClick={handleClear}>clear</button>
      </div>
      <h1 style={{ textAlign: 'center' }}>ini kartu <span style={{ textTransform: 'uppercase' }}>{value === 'unknown' ? 'Tidak tedefinisi' : value}</span></h1>
      {/* <Cards
        number={state}
      /> */}
    </>
  );
}

export default App3;
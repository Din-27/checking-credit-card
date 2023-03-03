import CreditCardDetector from './utils/creditCardDetector';
import { useState } from 'react';

function App() {

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
      <div>
        <input placeholder="Enter your credit card number"
          name='credit'
          value={state}
          onChange={onCreditCardChange} />
        <button onClick={handleClear}>clear</button>
      </div>
      <h1>ini kartu {value === 'unknown' ? 'Tidak tedefinisi' : value}</h1>
    </>
  );
}

export default App;
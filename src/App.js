import Cleave from 'cleave.js/react';
import CreditCardDetector from './utils/creditCardDetector';
import { useState } from 'react';

function App() {

  const [state, setState] = useState('')

  const onCreditCardChange = (e) => {
    let result
    const creditCardInfo = CreditCardDetector.getInfo(e.target.value, 'strict mode');
    const detector = creditCardInfo.type
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
    setState(result)
  }

  return (
    <>
      <div>
        <Cleave placeholder="Enter your credit card number"
          options={{ creditCard: true }}
          onChange={onCreditCardChange} />
        <button onClick={() => setState('')}>clear</button>
      </div>
      <h1>ini kartu {state === 'unknown' ? 'Tidak tedefinisi' : state}</h1>
    </>
  );
}

export default App;

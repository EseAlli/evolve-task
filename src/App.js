import './App.css';
import ActivateMandate from './components/ActivateMandate'

import {TransactionProvider} from './context/TransactionContext'

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <ActivateMandate/>
      </TransactionProvider>
    </div>
  );
}

export default App;

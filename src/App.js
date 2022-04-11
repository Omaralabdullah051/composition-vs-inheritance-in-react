import './App.css';
// import ClickCounter from './components/Inheritance/ClickCounter';
// import HoverCounter from './components/Inheritance/HoverCounter';

import Counter from './components/Composition/Counter';
import ClickCounter from './components/Composition/ClickCounter';
import HoverCounter from './components/Composition/HoverCounter';


function App() {
  return (
    <div className="App">
      {/* for inheritance 
      <ClickCounter />
      <HoverCounter /> */}

      {/* and composition */}
      <Counter>
        {(count, handleEvent) => (<ClickCounter count={count} handleEvent={handleEvent} />)}
      </Counter>
      <Counter>
        {(count, handleEvent) => (<HoverCounter count={count} handleEvent={handleEvent} />)}
      </Counter>
    </div>
  );
}

export default App;

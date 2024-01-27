
import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseEffect_2 from './Hooks/UseEffect_2';
import UseEffect_3 from "./Hooks/UseEffect_3";
import UseState from './Hooks/UseState';
import ErrorBoundry from './component/ErrorBoundry';
import ErrorBoundryTest from './component/ErrorBoundryTest';
import HighComp_1 from './component/HighComp_1';
import HighComp_2 from './component/HighComp_2';
// import RefDemo from './component/RefDemo';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundry>
        <ErrorBoundryTest name="ramesh" />
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorBoundryTest name="jocker" />
      </ErrorBoundry> */}
      {/* <HighComp_1/>
      <HighComp_2/> */}
      {/* <UseState/> */}
      <UseEffect_3/>
    </div>
  );
}

export default App;

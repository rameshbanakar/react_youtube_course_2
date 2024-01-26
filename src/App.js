
import './App.css';
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
      <HighComp_1/>
      <HighComp_2/>
    </div>
  );
}

export default App;


import './App.css';
import ErrorBoundry from './component/ErrorBoundry';
import ErrorBoundryTest from './component/ErrorBoundryTest';
// import RefDemo from './component/RefDemo';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <ErrorBoundryTest name="ramesh" />
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorBoundryTest name="jocker" />
      </ErrorBoundry>
    </div>
  );
}

export default App;

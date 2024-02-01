
import './App.css';
import UseRef from "./Hooks/UseRef";
import CleanUp from './Hooks/CleanUp';
import UseEffect from './Hooks/UseEffect';
import UseEffect_2 from './Hooks/UseEffect_2';
import UseEffect_3 from "./Hooks/UseEffect_3";
import UseMemo from './Hooks/UseMemo';
import UseState from './Hooks/UseState';
import ErrorBoundry from './component/ErrorBoundry';
import ErrorBoundryTest from './component/ErrorBoundryTest';
import HighComp_1 from './component/HighComp_1';
import HighComp_2 from './component/HighComp_2';
import CustomeHook_1 from './Hooks/CustomeHook_1';
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
      {/* <UseEffect_3/> */}
      {/* <CleanUp/> */}
      {/* <UseMemo/> */}
      {/* {<UseRef/>} */}
      <CustomeHook_1/>
    </div>
  );
}

export default App;

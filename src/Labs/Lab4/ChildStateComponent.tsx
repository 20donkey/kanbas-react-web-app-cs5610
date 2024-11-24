import 'bootstrap/dist/css/bootstrap.min.css';
export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h3>Counter {counter}</h3>
          <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click wd-counter-up-click"
        className="btn btn-success mr-2" >
            Increment</button>
          <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click wd-counter-down-click"
        className="btn btn-danger">
            Decrement</button>
          <hr/>
        </div>
    );}
    
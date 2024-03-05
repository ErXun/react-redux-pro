import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addToNumber,
} from "./store/modules/counterStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNumber(5))}>Add 5</button>
      <button onClick={() => dispatch(addToNumber(10))}>Add 10</button>
    </div>
  );
}

export default App;

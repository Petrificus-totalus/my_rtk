import { useDispatch, useSelector } from "react-redux";
import { add, subAsync, listPush, listDel } from "./store/modules/counter";

function App() {
  const dispatch = useDispatch();
  const { count, list } = useSelector((state) => state.counter);
  return (
    <div>
      <ul>
        <li>{count}</li>
        <li>
          <button
            onClick={() => {
              dispatch(add());
            }}
          >
            add
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(subAsync());
            }}
          >
            subAsync
          </button>
        </li>
      </ul>
      <button
        onClick={() => {
          dispatch(listPush());
        }}
      >
        list add
      </button>
      <ul>
        {list.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              dispatch(listDel(index));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

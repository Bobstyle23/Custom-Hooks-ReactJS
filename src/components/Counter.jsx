import useCount from "../hooks/useCount";

const Counter = () => {
  const [count, increase, decrease] = useCount();

  return (
    <div>
      <button onClick={increase}>+</button>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;

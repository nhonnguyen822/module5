import {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(null)

    const handleClick = () => {
        setCount(count + 1);
    }
    return <>
        <h1>{count ||"Xin Chào"}</h1>
        <button onClick={handleClick}>Click</button>
    </>
}
export default CounterComponent;
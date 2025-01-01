import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from '../store/counterSlice';

const Counter = () => {

    const dispatch = useDispatch();
    const counterState = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    function incrementHandler() {
        dispatch(counterActions.increment());
    }
    function decrementHandler() {
        dispatch(counterActions.decrement());
    }
    function increaseBy5Handler() {
        dispatch(counterActions.variableIncrement(5)); // { type: "UNIQUE_IDENTIFIER", payload: 5}
    }
    function toggleCounterHandler() {
        dispatch(counterActions.toggle());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counterState}</div>}
            <div>
                <button onClick={incrementHandler}>
                    Increment
                </button>
                <button onClick={increaseBy5Handler}>
                    Increase By 5
                </button>
                <button onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

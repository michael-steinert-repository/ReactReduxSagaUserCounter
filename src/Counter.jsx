import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/ducks/counter";

const Counter = (props) => {
    const {name} = props;
    const dispatch = useDispatch();

    const [votes, setVotes] = useState(0);

    const handleIncrement = () => {
        dispatch(increment());
        setVotes(votes + 1);
    };

    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes - 1);
    };

    return (
        <div style={{backgroundColor: "orange", margin: "15px"}}>
            <h3>{name}</h3>
            <h4>{`Votes:  ${votes}`}</h4>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>

        </div>
    );
}

export default Counter;
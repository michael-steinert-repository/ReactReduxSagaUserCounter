import React, {useEffect} from "react";
import './App.css';
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/ducks/user";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    //Getting User from Reducer-User
    const user = useSelector( (state) => state.user.user);

    const count = useSelector( (state) => state.counter.count);
    const voters = ["Michael", "Marie", "Bruno"];
    return (
        <div className="App">
            {user && <h1>Hello {user.name}</h1>}
            <h2>Reudx Counter</h2>
            <h3>Total Votes: {count}</h3>
            {voters.map((voter) => <Counter name={voter}/>)}
        </div>
    );
}

export default App;

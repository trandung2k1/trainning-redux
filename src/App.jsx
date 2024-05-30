import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodo, mark } from './store/slices/userSlice';

const App = () => {
    const todos = useSelector((state) => state.todo);
    console.log(todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodo());
    }, []);
    return (
        <div>
            <h1>App</h1>
            <button onClick={() => dispatch(mark('Hello'))}>Click</button>
        </div>
    );
};

export default App;

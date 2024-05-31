import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mark } from './store/slices/todoSlice';
import { getUsersStart, getUserStart } from './store/sagas/userSaga';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserStart(1));
        dispatch(getUsersStart());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>App</h1>
            <button onClick={() => dispatch(mark('Hello'))}>Click</button>
        </div>
    );
};

export default App;

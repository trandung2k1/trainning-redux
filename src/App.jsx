import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTodo, getData } from './redux/actions/todoActions';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line react-refresh/only-export-components, react/prop-types, no-unused-vars
const App = ({ getAllTodo, getData }) => {
    // useEffect(() => {
    //     // getAllTodo();
    //     getData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // Using redux saga
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch({ type: 'GET_USERS_START' });
        dispatch({ type: 'GET_USER_START', payload: 1 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div>App</div>;
};
const mapStateToProps = (state) => {
    return {
        todos: state.todosState.todos,
    };
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, { getAllTodo, getData })(App);

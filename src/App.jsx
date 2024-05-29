import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTodo } from './redux/actions/todoActions';
// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const App = ({ getAllTodo }) => {
    useEffect(() => {
        getAllTodo();
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
export default connect(mapStateToProps, { getAllTodo })(App);

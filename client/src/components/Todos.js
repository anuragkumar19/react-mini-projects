import Todo from './Todo'

const Todos = ({ todos, deleteTodo, updateTodo }) => (
    <div className='todos'>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        ))}
    </div>
)

export default Todos

import { useRef, useState } from 'react'

const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const input = useRef(null)
    const [title, setTitle] = useState(todo.title)
    const [isEditable, setIsEditable] = useState(false)

    const handleClick = () => {
        setIsEditable(!isEditable)
        setTimeout(() => {
            isEditable ? input.current.blur() : input.current.focus()
        }, 100)

        if (isEditable) {
            if (typeof title !== 'string' || !title.trim()) {
                return setTitle(todo.title)
            }
            updateTodo(todo.id, title)
        }
    }

    return (
        <div className='todo'>
            <input
                ref={input}
                type='text'
                disabled={!isEditable}
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <div className='todo-action'>
                <button className='btn btn-info' onClick={handleClick}>
                    {isEditable ? (
                        <i className='fas fa-save'></i>
                    ) : (
                        <i className='fas fa-pen'></i>
                    )}
                </button>
                <button
                    className='btn btn-danger'
                    onClick={() => deleteTodo(todo.id)}
                >
                    <i className='fas fa-trash'></i>
                </button>
            </div>
        </div>
    )
}

export default Todo

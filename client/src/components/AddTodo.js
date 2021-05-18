import { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        if (typeof title !== 'string') return
        if (!title.trim()) return

        e.preventDefault()
        addTodo(title.trim()).then(() => setTitle(''))
    }

    return (
        <>
            <h2>Add Todo</h2>
            <form className='form-control' onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder="Your Todo's Title"
                    name='title'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <input type='submit' value='Add' />
            </form>

            <div className='divider'></div>
        </>
    )
}

export default AddTodo

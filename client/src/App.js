import { useEffect, useState } from 'react'
import Card from './components/Card'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('/todos', { method: 'get' })
            const data = await res.json()
            setTodos(data)
        }

        getTodos()
    }, [])

    const deleteTodo = async (id) => {
        try {
            await fetch(`/todos/${id}`, { method: 'delete' })
            setTodos(todos.filter((todo) => todo.id !== id))
        } catch (err) {
            console.log(err)
            alert('Error!')
        }
    }

    const addTodo = async (title) => {
        try {
            const newTodo = JSON.stringify({ title, createdAt: new Date() })

            let todo = await fetch('/todos', {
                method: 'post',
                body: newTodo,
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            todo = await todo.json()

            setTodos([...todos, todo])
        } catch (err) {
            console.log(err)
            alert('Error!')
            throw new Error(err)
        }
    }

    const updateTodo = async (id, title) => {
        try {
            const newTodo = JSON.stringify({ title })

            let todo = await fetch(`/todos/${id}`, {
                method: 'put',
                body: newTodo,
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            todo = await todo.json()
            const i = todos.findIndex((todo) => todo.id === id)
            let newTodos = todos
            newTodos[i] = todo
            setTodos(newTodos)
        } catch (err) {
            console.log(err)
            alert('Error!')
            throw new Error(err)
        }
    }

    return (
        <div className='App'>
            <h1 className='title'>Your Todo List</h1>
            <Card>
                <AddTodo addTodo={addTodo} />
                <Todos
                    todos={todos}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            </Card>
        </div>
    )
}

export default App

import { useRef } from "react"
import { useState } from "react";
import { useHttpGet } from "./useHttpGet"
import { useLocalStorage } from "./useLocalStorage"

export function useTodo() {
    const {loading,error,data:todos} = useHttpGet("http://localhost:12345/curso_introduccion_react_js/");
    const [searchValue,setSearchValue] = useState("")
    const [,setTodos] = useLocalStorage("todos",[])
    const totalTodos = todos.length
    const [openModal,setOpenModal]=useState(false)
    const refDescription = useRef()
    
    const onSaveTodo = (text) => {
        todos.push({text:text, completed:false})
        setTodos([...todos])
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onAdd = (event) => {
        debugger;
        event.preventDefault()
        onSaveTodo(refDescription.current.value);
    }
    const completedTodos = todos.reduce((total, todo) => {
        if(todo.completed)return total+1;
        return total+0;
    }, 0)
    
    let filteredTodos = todos;
    
    const onComplete = (text) => {
        const index = todos.findIndex((todo) => (todo.text === text))
        todos[index].completed=true
        setTodos([...todos])
    }
    
    const onRemove = (text) => {
        setTodos(todos.filter((todo) => (todo.text !== text)))
    }
                    
    const onCreate = () => {
        setOpenModal((prevState)=>!prevState)
    }
    
    
    
    if(searchValue){
        filteredTodos = todos.filter((todo)=>{
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        })
    }    
    
    return {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        onCreate,
        onComplete,
        onRemove,
        onSaveTodo,
        loading,
        openModal,
        refDescription,
        onCancel,
        onAdd,
        setOpenModal,
        error
    }
}

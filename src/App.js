import './App.css'
import { AppUI } from "./AppUI"
import { useTodo } from "./hooks/useTodo"
import { withApi } from "./hoc/withApi"


export function App() {
    const props = useTodo()
    return (
        withApi("http://localhost:12345/curso_introduccion_react_js", AppUI)(props)
    )
}

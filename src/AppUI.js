import React from "react";
import { ChangeAlertWithStorageListener } from "./components/ChangeAlert";
import { TodoCounter } from "./todo/TodoCounter/TodoCounter";
import { TodoSearch } from "./todo/TodoSearch/TodoSearch";
import { TodoList } from "./todo/TodoList/TodoList";
import { TodoHeader } from "./todo/TodoHeader/TodoHeader";
import { TodoForm } from "./todo/TodoForm/TodoForm";
import { TodoItem } from "./todo/TodoItem/TodoItem";
import { CreateTodoButton } from "./todo/CreateTodoButton/CreateTodoButton";
import { Modal } from "./modal/Modal";
import { Loader } from "./todo/Loader/Loader";


export function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    children,
    setSearchValue,
    filteredTodos,
    onCreate,
    refDescription,
    onCancel,
    onAdd,
    onComplete,
    onRemove,
    onSaveTodo,
    loading,
    openModal,
    data,
    setOpenModal,
    error
}) {
    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter>
                    <h2  className={`TodoCounter ${loading && 'TodoCounter--disabled'}`}>has completado {completedTodos} de {totalTodos} TODOS</h2>
                </TodoCounter>
    
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
            
            <CreateTodoButton onCreate={onCreate} />
            <TodoList
                totalTodos={totalTodos}
                error={error}
                loading={loading}
                searchValue={searchValue}
                filteredTodos={data}
                onError={error=>(<p>There was an error...</p>)}
                onLoading={loading=>(<Loader />)}
                onEmpty={()=>(<p>Make your first todo</p>)}
                onEmptyResults={(searchValue) => (<p>there is not results {searchValue}</p>)}
                render={todo => ( 
                    <TodoItem key={todo.text} completed={todo.completed} text={todo.text} onComplete={()=> onComplete(todo.text) } onRemove={()=> onRemove(todo.text)} /> 
                )}
            >
            </TodoList>
            
            <ChangeAlertWithStorageListener />
            
            {openModal && (
                <Modal>
                    <TodoForm onSaveTodo={onSaveTodo} setOpenModal={setOpenModal} >
                        <div className=".TodoForm-container">
                            <form className="TodoForm" onSubmit={onAdd}>
                                <label>Escribe tu tarea</label>
                                <textarea ref={refDescription} placeholder="Todo description" />
                                <div className="TodoForm-buttonContainer">
                                    <button type="button" onClick={onCancel}>Cancel</button>
                                    <button onClick={onAdd}>Add</button>
                                </div>
                            </form>
                        </div>
                    </TodoForm>
                </Modal>
            )}
        </React.Fragment>
    );
}
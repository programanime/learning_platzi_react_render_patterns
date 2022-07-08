import React from "react"


export function TodoList({
    totalTodos,
    error,
    loading,
    searchValue,
    filteredTodos,
    onError,
    onLoading,
    children,
    onEmpty,
    onEmptyResults,
    render
}) {
  return (
    <section>
        {error && onError(error)}
        {loading && onLoading(loading)}
        {!loading && totalTodos===0 && onEmpty()}
        {!loading && totalTodos>0 && filteredTodos?.length===0 && onEmptyResults(searchValue)}
        {filteredTodos.map(render || children)}
    </section>
  )
}

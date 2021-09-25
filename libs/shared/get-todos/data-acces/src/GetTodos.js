

export const GetTodos=async()=>{

    const url=`https://jsonplaceholder.typicode.com/todos?_limit=15`

    const resp= await fetch(url);
    const data= await resp.json();

    const todos= data.map( todo =>{
        return{
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }
    })

    return todos
}

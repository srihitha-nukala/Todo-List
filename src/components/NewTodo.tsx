import React,{useRef} from 'react';
import './NewTodo.css'

type NewTodoProps ={
    onAddTodo:(todoText:string) => void;
}
const NewTodo:React.FC<NewTodoProps>=props=>{
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        // console.log(enteredText);
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <h2>Todo List</h2>
                {/* <label htmlFor="todo-text" >Input Text</label> */}
                <input type='text' id='todotext' placeholder="Add Tasks" ref={textInputRef} ></input>
            </div>
            <button type='submit' id="add">ADD</button>
            
        </form>
        

    )
}

export default NewTodo;
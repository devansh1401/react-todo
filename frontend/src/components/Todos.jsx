export function Todos({ todos }) {
  const toggleCompletion = (id) => {
     // Logic to toggle the completion status of the todo item with the given id
     // This could involve calling a function passed as a prop or using a state management solution
     console.log(`Toggling completion for todo with id: ${id}`);
  };
 
  return (
     <div>
       {todos.map((todo) => (
         <div key={todo.id}>
           <h1>{todo.title}</h1>
           <h2>{todo.description}</h2>
           <button onClick={() => toggleCompletion(todo.id)}>
             {todo.completed ? "Mark as incomplete" : "Mark as complete"}
           </button>
         </div>
       ))}
     </div>
  );
 }
 
import React from 'react';
import styles from './CreateTodo.module.css';
import  { useState } from 'react';  



export function CreateTodo(){
    const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
    return(
        <div className={styles.card}>
            <div className={styles.container}>
                <input className={styles.inputField} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/> <br/>
                <input className={styles.inputField} type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/> <br/>

                <button className={styles.addButton} onClick={() => 
                fetch('http://localhost:3000/todo', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        completed: false
                    })
                })
                .then(async res => {
                    const json = await res.json();
                    console.log(json);
                    alert('Todo Added')
                })
                }>Add Todo</button>
            </div>
        </div>
    )
}

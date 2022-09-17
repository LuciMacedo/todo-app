import styles from "../componentes/taskHeader.module.css"
import { PlusCircle } from "phosphor-react"
import { useState } from "react"
import { Task } from "./Task"
import { EmptyTodoList } from "../componentes/EmptyTodoList"


export function TaskHeader() {

    const idRandom = (num) => Math.floor(Math.random() * num) 

    const [newTaskText, setNewTaskText] = useState("")

    const [todoList, setTodoList] = useState([ 
        
    ])

    const todoListLength = todoList.length
    
    const numberOfTasksCompleted = todoList.reduce((numOfTasksCompleted, currentTask) => {
            if(currentTask.isComplete == true){
                return numOfTasksCompleted + 1
            }
            return numOfTasksCompleted
    }, 0)

    function handleTaskChange(event) {
        setNewTaskText(event.target.value)
    }

    function handleNewTask(e) {
        e.preventDefault()

        const newTask = {
            id: idRandom(9999999999),
            taskName: newTaskText,
            isComplete: false
        }
        
        setTodoList(()=>[...todoList, newTask])

        setNewTaskText(" ")
    }

    function deleteTask(taskToDelete){
        const todoListWithoutDeletedOne = todoList.filter(tasks => {
            return tasks.id != taskToDelete
        })
        setTodoList(todoListWithoutDeletedOne)
    }

    function toggleComplete (taskId) {
        setTodoList (
            todoList.map(task => {
                if(task.id == taskId) {
                    return {
                        ...task,
                        isComplete: !task.isComplete   
                    }
                }
                return task
            })
        )
    }
   

    return (
        <div className={styles.taskTableWrapper}>

            <form className={styles.taskTableInput}>
                <textarea  
                placeholder="Add new task" 
                name="input"
                value={newTaskText}
                onChange={handleTaskChange}
                />
                <button onClick={handleNewTask} type="submit">
                    <p>Add</p> 
                    <PlusCircle size={16}/>
                </button>
            </form>

            
            <div className={styles.taskTable}>
                <header className={styles.taskTableHeader}>
                    <div className={styles.taskTableActive}>
                        <strong>Active</strong>
                        <p className={styles.taskTableCounter}>{todoListLength}</p>
                    </div>
                    <div className={styles.taskTableCompleted}>
                        <strong>Completed</strong>
                        <p className={styles.taskTableCounter}>{numberOfTasksCompleted} of {todoListLength}</p>
                    </div>
                </header>
            </div>


            {
                todoList.length == 0 ?
                    <EmptyTodoList/> :
                todoList.map(task => {
                    return (
                        <Task 
                        key={task.id}
                        id={task.id}
                        taskName={task.taskName} 
                        isCompleted={task.isComplete}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        />
                    )
                })
            }
        </div>
    )
}


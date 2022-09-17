import styles from "./taskStyle.module.css"

import { Trash } from "phosphor-react"

export function Task({taskName, deleteTask, id, toggleComplete, isCompleted}) {

    function handleDeletedTask() {
        deleteTask(id)
    }

    function handleIsCompleted() {
        toggleComplete(id)
    }


    return (  
        <div>
            <div className={styles.taskItem}>
                <button onClick={handleIsCompleted}className={styles.taskButton}>
                    <div/>
                </button>
            <div/>
                
            <p className={isCompleted ? styles.taskIsCompleted : styles.taskIsNotCompleted}>{taskName}</p>   
                            
            <button onClick={handleDeletedTask} className={styles.taskTrashButton}>
                <Trash size={24} />
            </button>
            </div>
        </div>
    );
}
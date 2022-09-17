import { ClipboardText } from "phosphor-react"
import styles from "../componentes/emptyTodoListStyle.module.css"

export function EmptyTodoList () {
    return ( 
        <div className={styles.taskTableEmpty}>
            <ClipboardText size={56}/>
            <strong>You current don't have tasks</strong>
        </div>
     );
}


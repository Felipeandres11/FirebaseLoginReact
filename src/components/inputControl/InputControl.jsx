import styles from "./InputControl.module.css"
export function InputControl(props) {
    return(
        <div className={styles.container}>
            {<label>{props.label}</label>}
            <input type="text" {...props}></input>
        </div>
    )   
}
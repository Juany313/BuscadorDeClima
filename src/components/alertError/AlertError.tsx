import { ReactNode } from "react"
import styles from './AlertError.module.css'

const AlertError = ({children} : {children: ReactNode}) => {
  return (
    <div className={styles.alert}>***{children}***</div>
  )
}

export default AlertError
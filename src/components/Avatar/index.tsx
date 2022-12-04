import styles from './styles.module.css';
export function Avatar({hasBorder = true, avatar}){
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={avatar}
        />
    )
}
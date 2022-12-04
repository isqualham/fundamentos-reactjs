import styles from './styles.module.css';

interface AvatarProps{
    hasBorder?: boolean;
    avatar: string;  
}

export function Avatar({hasBorder = true, avatar}:AvatarProps){
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={avatar}
        />
    )
}
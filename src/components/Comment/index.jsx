import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                avatar="https://avatars.githubusercontent.com/u/89050239?v=4"
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> william de freitas </strong>hiddenhas
                            <time title="10 de outubro de 2022" dateTime="2022-08-10">
                                Cerca de a 1 hora
                            </time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>programação é vida</p>
                </div>  
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>              
            </div>
        </div>
    )
}
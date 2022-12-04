import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps){

    const [like, setLike] = useState(0);

    function handleLike(){
        setLike((likeCount)=>{
            return likeCount + 1;
        });
    }

    function handleDeleteComment(){
        onDeleteComment(content);        
    }

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
                            <strong> william de freitas </strong>
                            <time title="10 de outubro de 2022" dateTime="2022-08-10">
                                Cerca de a 1 hora
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>  
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>              
            </div>
        </div>
    )
}
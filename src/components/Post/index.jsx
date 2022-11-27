import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

export function Post({author, content, publishetAt}){

    const publishedDateFormatted = format(publishetAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBr
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishetAt,{
        locale:ptBr,
        addSuffix:true
    })

    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments != commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        avatar={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishetAt.toISOString()}
                >
                    {publishedDateRelativeToNow}

                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(item =>{
                        if(item.type == 'paragraph')
                            return <p key={item.content}>{item.content}</p>

                        return <a href="#" key={item.content}>{item.content}</a>
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="deixe um comentario"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submmit">Publicar</button>
                </footer>                
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(item =>{
                        return (
                            <Comment 
                                key={item}
                                content={item}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }                
            </div>
        </article>            
    )
}
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState} from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

interface PostProps {
    author:{
        name:string;
        role:string;
        avatarUrl:string;
    };   
    content:{
            type:'paragraph' | 'link',
            content:string
        }[];
    publishetAt: Date;
}

export function Post({author, content, publishetAt}:PostProps){

    const publishedDateFormatted = format(publishetAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBr
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishetAt,{
        locale:ptBr,
        addSuffix:true
    });

    const [comments, setComments] = useState(['']);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete: string){

        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments != commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>

            
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>                    
                    <button 
                        type="button" 
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
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
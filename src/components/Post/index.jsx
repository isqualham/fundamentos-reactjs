import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';


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
                            return <p>{item.content}</p>

                        return <a href="#">{item.content}</a>
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="deixe um comentario"
                />
                <footer>
                    <button type="submmit">Publicar</button>
                </footer>                
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>            
    )
}
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        avatar="https://avatars.githubusercontent.com/u/89050239?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>william</strong>
                        <span>programador junior</span>
                    </div>
                </div>

                <time title="10 de outubro de 2022" dateTime="2022-08-10">Publicado a 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
                    evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto | </a> 
                    <a href="#">#nlw | </a> 
                    <a href="#">#rocketseat</a>
                </p>
                
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
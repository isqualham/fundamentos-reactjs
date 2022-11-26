import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
      id:1,
      author:{          
          avatarUrl:"https://avatars.githubusercontent.com/u/89050239?v=4",
          name:"william de freitas",
          role:"Analista programaor"
      },
      content: [
        {type : 'paragraph', content: 'Fala galeraa 👋'},        
        {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,'}, 
        {type : 'paragraph', content: 'evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},    
        {type : 'link', content: '👉 jane.design/doctorcare'},    
        {type : 'link', content: ' #novoprojeto | '},
        {type : 'link', content: ' #nlw | '},
        {type : 'link', content: ' #rocketseat'}       
      ],
      publishetAt: new Date('2022/11/26')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar  />
        <main>
          {posts.map(post => {
            return (
              <Post
                key = {post.id}
                author={post.author}
                content={post.content}
                publishetAt={post.publishetAt}
              />
            )
          })}      
        </main>
      </div>   
    </>    
  )
}

 
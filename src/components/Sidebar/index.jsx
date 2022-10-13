import {PencilLine} from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from './styles.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>
                <Avatar
                    avatar="https://avatars.githubusercontent.com/u/89050239?v=4"
                />
                <strong>william</strong>
                <span>programador junior</span>
            </div>

            <footer>
                <a href="#" > 
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
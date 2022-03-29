import react from "react";
import Nav from "./Nav";
import style from './About.module.css'

export default function About() {

    return (
        <div  className={style.background} >
            <Nav />
            <div>
                <h2 className={style.div}>Learn about me </h2>
                <p>I'm a fast learner, hard worker, and team player web <br />
                    developer with solid experience and confidence in her skills that's <br />
                    seeking a job to improve even more as a rising professional and <br />
                    provide agile solutions using React, Redux, Node.js, Express, <br />
                    Postgres, and Sequelize among others.
                </p>
            </div>
            <div className={style.logos}>
                <a href="https://github.com/Florengo">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt="" width='200px' className={style.github}/>
                </a>
                <a href="https://www.linkedin.com/in/florencia-guadalupe-gonzalez/">
                    <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png" alt="" width='200px' className={style.linkedin} />
                </a>
            </div>
        </div>
    )
}
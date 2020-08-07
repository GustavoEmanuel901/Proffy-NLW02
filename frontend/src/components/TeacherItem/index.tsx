import React from 'react'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fbfh4-1.fna.fbcdn.net/v/t1.0-9/103665745_2549761711912434_660593237341138222_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=t84fSySc05AAX9c11PD&_nc_ht=scontent.fbfh4-1.fna&oh=c54fbfd14443770f98023ba2b32e64ec&oe=5F51BE59" alt="Perfil"/>
            <div>
                <strong>Lusdete Cavalcante</strong>
                <span>Português</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada 
            <br/>
            
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p> 

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button>
                <img src={WhatsAppIcon} alt="Whatsapp"/>
                Entrar em Contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem
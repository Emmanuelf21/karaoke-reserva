import './App.css'
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineMusicNote } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";

import Card from './components/Card';
import { NavLink } from 'react-router-dom';
function App() {
  const card1 = {
    'icone': <CiStar />,
    'titulo': 'Salas Premium',
    'descricao': 'Ambientes luxuosos com iluminação LED e decoração temática',
    'sobre': ['Sistema de som profissional', 'Iluminação disco e neon', 'Serviço de bar incluso', 'Máquina de fumaça']
  }

  const card2 = {
    'icone': <RiGroupLine />,
    'titulo': 'Para Todos os Grupos',
    'descricao': 'Salas de diferentes tamanhos para qualquer ocasião',
    'sobre': ['Salas privadas (2-8 pessoas)', 'Salas familiares (8-12 pessoas)', 'Salas para festas (8-15 pessoas)', 'Palco principal (15+ pessoas)']
  }

  const card3 = {
    'icone': <FaRegClock />,
    'titulo': 'Reserva Fácil',
    'descricao': 'Sistema online simples e seguro para suas reservas',
    'sobre': ['Reserva imediata online', 'Pagamento seguro', 'Cancelamento flexível', 'Suporte 24/7']
  }

  return (
    <>
      <main className='container-app'>
        <section className='banner'>
          <img src="/assets/karaoke-hero.jpg" alt="" />
          <div className='banner-info'>
            <h1><HiOutlineMusicNote />Karaoke Jam</h1>
            <p>Reserve sua sala de Karaokê dos sonhos e cante como uma estrela</p>
            <div className='btns-banner'>
              <a href="#">
                <IoMicOutline />
                Começar agora
              </a>
              {/* trocar para NavLink quando tiver a pagina de salas e login,
                redireciona para login se não estiver logado, vai para as salas se estiver logado */}
              <button className='link'>Ver Salas</button>
            </div>
          </div>
        </section>
        <section className='container-info'>
          {/* cards */}
          <div className='info'>
            <h1>Experiência Premium</h1>
            <p>Salas equipadas com a melhor tecnologia para sua performance</p>
          </div>
          <div className='cards'>
            <Card infos={card1} />
            <Card infos={card2} />
            <Card infos={card3} />
          </div>
        </section>
        <section className='container-confirm'>
          <h2>Pronto para brilhar no palco?</h2>
          <p>Crie sua conta e reserve sua primeira sala em minutos</p>
          <NavLink to='/login'>
                <IoMicOutline/>
                Criar conta grátis
          </NavLink>
        </section>
      </main>
    </>
  )
}

export default App

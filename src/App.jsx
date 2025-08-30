import './App.css'
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineMusicNote } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import Card from './components/Card';
function App() {
  const card1 = {
    'icone': <CiStar />,
    'titulo': 'Salas Premium',
    'descricao': 'Ambientes luxuosos com iluminação LED e decoração temática',
    'sobre': ['Sistema de som profissional', 'Iluminação disco e neon', 'Serviço de bar incluso', 'Máquina de fumaça']
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
                  <IoMicOutline/>
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
              <Card infos={card1}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

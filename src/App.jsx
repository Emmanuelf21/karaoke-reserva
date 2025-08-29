import './App.css'
import { IoMicOutline } from "react-icons/io5";
import { HiOutlineMusicNote } from "react-icons/hi";
function App() {

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
      </main>
    </>
  )
}

export default App

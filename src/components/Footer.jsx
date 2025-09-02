import { HiOutlineMusicNote } from "react-icons/hi";
import './css/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="text">
            <HiOutlineMusicNote/>
            <p>Karaoke Jam</p>
        </div>
        <p>&copy; 2025 Karaoke Jam. Todos os direitos reservados. (mas e as salas?)</p>
    </footer>
  )
}

export default Footer
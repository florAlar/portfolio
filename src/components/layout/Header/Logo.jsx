import { Link } from 'react-router-dom'
import { GrDocumentImage } from 'react-icons/gr'

const Logo = ({ onClick }) => {
  return (
    <Link to="/" className="logo-container" onClick={onClick}>
      <GrDocumentImage className="logo-icon" />
      <span className="logo-text">Portfolio</span>
    </Link>
  )
}

export default Logo
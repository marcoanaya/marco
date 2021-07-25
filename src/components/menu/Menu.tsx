import './menu.scss'

type MenuProps = {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({menuOpen, setMenuOpen}: MenuProps) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        {['home', 'portfolio', 'contact'].map((id) => (
          <li>
            <a href={`#${id}`} onClick={() => setMenuOpen(false)}>{id}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

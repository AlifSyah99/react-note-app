
const Header = ({setDarkMode}) => {
  return (
    <header className="header">
      <h1>Note App</h1>
      <button onClick={() => setDarkMode((state) => !state)}
              className="toggle-button"
       > 
              Toggle
      </button>
    </header>
  )
}

export default Header;
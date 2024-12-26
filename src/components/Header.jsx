import logo from "/images/logo.png"


export default function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" />
        <span>Chef Claude</span>
      </nav>
    </header>
  )
}
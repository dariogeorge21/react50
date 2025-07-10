

type Nav = {
  label: string,
  href: string,
}

const NavItems:Nav[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Welcome to React50 course.</h1>
        <nav>
          <ul>
            {NavItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Navigation Items basierend auf den Goals
  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Über Mich', href: '/uber-mich' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Preise & Ablauf', href: '/preise-ablauf' },
    { label: 'Kontakt', href: '/kontakt' }
  ]

  const isActive = (href: string) => router.pathname === href

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link href="/" className="logo">
              Liv
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={isActive(item.href) ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={isActive(item.href) ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Liv - Wandmalerei</h3>
              <p>Individuelle Kunstwerke für Ihre Wände</p>
              <p>Professionelle Wandmalerei für private Haushalte und Geschäfte</p>
            </div>
            
            <div className="footer-section">
              <h3>Navigation</h3>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="footer-section">
              <h3>Kontakt</h3>
              <p>
                <FaEnvelope style={{ marginRight: '8px' }} />
                info@liv-wandmalerei.de
              </p>
              <p>
                <FaPhone style={{ marginRight: '8px' }} />
                +49 (0) 123 456 789
              </p>
              <p>
                <FaInstagram style={{ marginRight: '8px' }} />
                @liv_wandmalerei
              </p>
            </div>

            <div className="footer-section">
              <h3>Rechtliches</h3>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Liv Wandmalerei. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(250, 250, 250, 0.98);
          backdrop-filter: blur(10px);
          border-top: 1px solid #e0e0e0;
          padding: 1rem 0;
        }

        .mobile-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav li {
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav a {
          display: block;
          padding: 1rem 0;
          color: #2c2c2c;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .mobile-nav a:hover,
        .mobile-nav a.active {
          color: #666;
        }

        @media (min-width: 769px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
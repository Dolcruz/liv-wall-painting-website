import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaClock, FaPaperPlane } from 'react-icons/fa'

interface ContactForm {
  name: string
  email: string
  telefon: string
  betreff: string
  nachricht: string
  projektart: string
  datenschutz: boolean
}

export default function Kontakt() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: '',
    projektart: '',
    datenschutz: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Hier würde die Firebase-Integration erfolgen
      // Simuliere für jetzt eine erfolgreiche Übertragung
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('Vielen Dank für Ihre Nachricht! Ich melde mich binnen 24 Stunden bei Ihnen.')
      setFormData({
        name: '',
        email: '',
        telefon: '',
        betreff: '',
        nachricht: '',
        projektart: '',
        datenschutz: false
      })
    } catch (error) {
      setSubmitMessage('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'E-Mail',
      content: 'info@liv-wandmalerei.de',
      link: 'mailto:info@liv-wandmalerei.de'
    },
    {
      icon: <FaPhone />,
      title: 'Telefon',
      content: '+49 (0) 123 456 789',
      link: 'tel:+491234567890'
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      content: '@liv_wandmalerei',
      link: 'https://instagram.com/liv_wandmalerei'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Tätigkeitsbereich',
      content: 'Berlin und Umgebung',
      link: null
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Kontakt - Liv Wandmalerei</title>
        <meta name="description" content="Kontaktieren Sie Liv für Ihr individuelles Wandmalerei-Projekt. Kostenlose Beratung und maßgeschneiderte Angebote." />
      </Head>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1>Kontakt</h1>
          <p>Lassen Sie uns über Ihr einzigartiges Wandmalerei-Projekt sprechen</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Lassen Sie uns sprechen</h2>
              <p>
                Ich freue mich darauf, von Ihrem Projekt zu hören! Kontaktieren Sie mich 
                gerne für ein kostenloses Beratungsgespräch. Gemeinsam entwickeln wir 
                das perfekte Kunstwerk für Ihre Räume.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-method">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'}>
                          {info.content}
                        </a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="office-hours">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div>
                  <h3>Erreichbarkeit</h3>
                  <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                  <p>Samstag: 10:00 - 16:00 Uhr</p>
                  <p>Sonntag: Nach Vereinbarung</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Projekt anfragen</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefon">Telefon (optional)</label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      placeholder="+49 123 456 789"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projektart">Art des Projekts</label>
                    <select
                      id="projektart"
                      name="projektart"
                      value={formData.projektart}
                      onChange={handleInputChange}
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="wohnzimmer">Wohnzimmer</option>
                      <option value="schlafzimmer">Schlafzimmer</option>
                      <option value="kinderzimmer">Kinderzimmer</option>
                      <option value="badezimmer">Badezimmer</option>
                      <option value="kuche">Küche</option>
                      <option value="geschäftsraum">Geschäftsraum</option>
                      <option value="andere">Andere</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="betreff">Betreff</label>
                  <input
                    type="text"
                    id="betreff"
                    name="betreff"
                    value={formData.betreff}
                    onChange={handleInputChange}
                    placeholder="Kurze Beschreibung Ihres Projekts"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nachricht">Ihre Nachricht *</label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Beschreiben Sie Ihre Ideen, Wünsche und Vorstellungen für das Wandgemälde. Je detaillierter, desto besser kann ich Ihnen helfen!"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="datenschutz"
                      checked={formData.datenschutz}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkmark"></span>
                    Ich habe die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> gelesen 
                    und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('Fehler') ? 'error' : 'success'}`}>
                    {submitMessage}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting || !formData.datenschutz}>
                  {isSubmitting ? (
                    <span>Wird gesendet...</span>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: '8px' }} />
                      Nachricht senden
                    </>
                  )}
                </button>
              </form>

              <div className="form-note">
                <p><strong>Hinweis:</strong> Ihre Daten werden vertraulich behandelt und ausschließlich 
                für die Bearbeitung Ihrer Anfrage verwendet. Sie erhalten binnen 24 Stunden eine Antwort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h2 {
          margin-bottom: 1rem;
          color: #2c2c2c;
        }

        .contact-info p {
          margin-bottom: 2rem;
          color: #666;
          line-height: 1.6;
        }

        .contact-methods {
          margin-bottom: 2rem;
        }

        .contact-method,
        .office-hours {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: #f8f8f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .contact-details h3 {
          margin: 0 0 0.25rem 0;
          color: #2c2c2c;
          font-size: 1.1rem;
        }

        .contact-details p,
        .contact-details a {
          margin: 0;
          color: #666;
        }

        .contact-details a:hover {
          color: #2c2c2c;
        }

        .contact-form-container {
          background: #f8f8f8;
          padding: 2rem;
          border-radius: 8px;
        }

        .contact-form-container h2 {
          margin-bottom: 1.5rem;
          color: #2c2c2c;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #2c2c2c;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d0d0d0;
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          background: white;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2c2c2c;
        }

        .checkbox-group {
          margin-top: 1rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .checkbox-label input[type="checkbox"] {
          margin: 0;
          width: auto;
        }

        .checkbox-label a {
          color: #2c2c2c;
          text-decoration: underline;
        }

        .submit-message {
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .submit-message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .submit-message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form-note {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #fff3cd;
          border-radius: 4px;
          border: 1px solid #ffeaa7;
        }

        .form-note p {
          margin: 0;
          font-size: 0.9rem;
          color: #856404;
        }

        button[type="submit"] {
          width: 100%;
          padding: 12px 24px;
          background: #2c2c2c;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        button[type="submit"]:hover:not(:disabled) {
          background: #4a4a4a;
          transform: translateY(-1px);
        }

        button[type="submit"]:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}
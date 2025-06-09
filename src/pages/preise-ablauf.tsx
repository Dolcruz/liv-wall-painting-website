import Head from 'next/head'
import Layout from '@/components/Layout'
import { FaCheck, FaCalendarAlt, FaPaintBrush, FaHandshake, FaQuestionCircle } from 'react-icons/fa'

export default function PreiseAblauf() {
  const processSteps = [
    {
      step: 1,
      icon: <FaHandshake />,
      title: 'Erstberatung',
      description: 'Kostenloses Beratungsgespräch vor Ort oder telefonisch. Wir besprechen Ihre Wünsche, Ideen und den gewünschten Stil.',
      duration: '1-2 Stunden'
    },
    {
      step: 2,
      icon: <FaPaintBrush />,
      title: 'Konzepterstellung',
      description: 'Entwicklung eines individuellen Konzepts mit Skizzen und Farbvorschlägen basierend auf Ihren Vorstellungen.',
      duration: '3-5 Tage'
    },
    {
      step: 3,
      icon: <FaCalendarAlt />,
      title: 'Angebot & Terminplanung',
      description: 'Sie erhalten ein detailliertes Angebot. Nach Ihrer Zusage vereinbaren wir den optimalen Termin für die Umsetzung.',
      duration: '1-2 Tage'
    },
    {
      step: 4,
      icon: <FaPaintBrush />,
      title: 'Umsetzung',
      description: 'Professionelle Ausführung Ihres Wandgemäldes. Ich arbeite sauber und störe Ihren Alltag so wenig wie möglich.',
      duration: '1-5 Tage je nach Größe'
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Preise & Ablauf - Liv Wandmalerei</title>
        <meta name="description" content="Informationen zu Preisen und dem Ablauf Ihres Wandmalerei-Projekts. Transparente Kostenaufstellung und detaillierter Prozess." />
      </Head>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1>Preise & Ablauf</h1>
          <p>Transparente Informationen zu Kosten und dem Prozess Ihres individuellen Kunstwerks</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">So entsteht Ihr Kunstwerk</h2>
          <p className="text-center" style={{ marginBottom: '3rem', color: '#666' }}>
            Von der ersten Idee bis zum fertigen Wandgemälde - ein strukturierter Prozess
          </p>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="duration">Dauer: {step.duration}</span>
                </div>
                {index < processSteps.length - 1 && <div className="step-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <h2 className="text-center">Preisgestaltung</h2>
          <div className="pricing-overview">
            <div className="price-ranges">
              <div className="price-item">
                <h4>Einfache Motive</h4>
                <p className="price">ab 150€/m²</p>
                <p>Geometrische Formen, einfache Muster</p>
              </div>
              <div className="price-item">
                <h4>Mittlere Komplexität</h4>
                <p className="price">ab 250€/m²</p>
                <p>Naturmotive, Tiere, Landschaften</p>
              </div>
              <div className="price-item">
                <h4>Hochdetaillierte Motive</h4>
                <p className="price">ab 400€/m²</p>
                <p>Realistische Porträts, komplexe Szenen</p>
              </div>
            </div>
          </div>

          <div className="included-services">
            <h3>Im Preis enthalten</h3>
            <div className="services-grid">
              <div className="service-item">
                <FaCheck className="check-icon" />
                <span>Kostenloses Beratungsgespräch</span>
              </div>
              <div className="service-item">
                <FaCheck className="check-icon" />
                <span>Individuelle Konzepterstellung</span>
              </div>
              <div className="service-item">
                <FaCheck className="check-icon" />
                <span>Hochwertige, umweltfreundliche Materialien</span>
              </div>
              <div className="service-item">
                <FaCheck className="check-icon" />
                <span>Professionelle Umsetzung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .process-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: #2c2c2c;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .step-icon {
          width: 50px;
          height: 50px;
          background: #f8f8f8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        .step-content h3 {
          margin-bottom: 0.5rem;
          color: #2c2c2c;
        }

        .duration {
          background: #e8e8e8;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.9rem;
          color: #666;
        }

        .price-ranges {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .price-item {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .price {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c2c2c;
          margin: 1rem 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 1rem;
          border-radius: 4px;
        }

        .check-icon {
          color: #28a745;
        }
      `}</style>
    </Layout>
  )
}
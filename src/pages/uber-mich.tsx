import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { FaQuoteLeft, FaPaintBrush, FaHeart, FaAward } from 'react-icons/fa'

export default function UberMich() {
  return (
    <Layout>
      <Head>
        <title>Über Mich - Liv Wandmalerei</title>
        <meta name="description" content="Lernen Sie Liv kennen - Ihre Künstlerin für individuelle Wandmalerei. Erfahren Sie mehr über ihren Werdegang und ihre Passion für Kunst." />
      </Head>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1>Über mich</h1>
          <p>Leidenschaft für Kunst trifft auf handwerkliche Perfektion</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section">
        <div className="container">
          <div className="about-main">
            <div className="about-image">
              <Image
                src="https://via.placeholder.com/500x600/E8E8E8/666666?text=Liv+Portrait"
                alt="Liv - Wandmalerei Künstlerin"
                width={500}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="about-content">
              <h2>Hallo, ich bin Liv</h2>
              <p>
                Seit über fünf Jahren verwandle ich Wände in einzigartige Kunstwerke. 
                Was als Hobby begann, ist zu meiner Leidenschaft und schließlich zu 
                meinem Beruf geworden. Jedes Projekt ist für mich eine neue Herausforderung 
                und eine Möglichkeit, gemeinsam mit meinen Kunden etwas Besonderes zu schaffen.
              </p>
              <p>
                Meine Ausbildung in der bildenden Kunst kombiniert mit jahrelanger 
                praktischer Erfahrung ermöglicht es mir, sowohl technisch anspruchsvolle 
                als auch künstlerisch beeindruckende Wandmalereien zu realisieren.
              </p>
              
              <div className="skills-grid">
                <div className="skill-item">
                  <FaPaintBrush className="skill-icon" />
                  <h3>Künstlerische Expertise</h3>
                  <p>Studium der bildenden Kunst mit Fokus auf Wandmalerei</p>
                </div>
                <div className="skill-item">
                  <FaHeart className="skill-icon" />
                  <h3>Leidenschaft</h3>
                  <p>Jedes Projekt wird mit Hingabe und Liebe zum Detail umgesetzt</p>
                </div>
                <div className="skill-item">
                  <FaAward className="skill-icon" />
                  <h3>Erfahrung</h3>
                  <p>Über 50 erfolgreich abgeschlossene Projekte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <div className="philosophy-section">
            <div className="quote-container">
              <FaQuoteLeft className="quote-icon" />
              <blockquote>
                "Jede Wand hat das Potenzial, eine Geschichte zu erzählen. 
                Meine Aufgabe ist es, diese Geschichte sichtbar zu machen 
                und dabei die Persönlichkeit und Wünsche meiner Kunden 
                widerzuspiegeln."
              </blockquote>
              <cite>- Liv</cite>
            </div>
            
            <div className="philosophy-content">
              <h2>Meine Arbeitsphilosophie</h2>
              <div className="philosophy-points">
                <div className="point">
                  <h3>Individuelle Beratung</h3>
                  <p>
                    Jedes Projekt beginnt mit einem ausführlichen Beratungsgespräch. 
                    Ich höre zu, verstehe Ihre Wünsche und entwickle gemeinsam mit 
                    Ihnen das perfekte Konzept für Ihre Räume.
                  </p>
                </div>
                <div className="point">
                  <h3>Hochwertige Materialien</h3>
                  <p>
                    Ich verwende ausschließlich hochwertige, umweltfreundliche Farben 
                    und Materialien, die nicht nur schön aussehen, sondern auch 
                    langlebig und gesundheitlich unbedenklich sind.
                  </p>
                </div>
                <div className="point">
                  <h3>Saubere Arbeitsweise</h3>
                  <p>
                    Respekt vor Ihrem Zuhause oder Geschäftsraum ist selbstverständlich. 
                    Ich arbeite sauber, ordentlich und störe Ihren Alltag so wenig wie möglich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="section">
        <div className="container">
          <div className="inspiration-section">
            <h2 className="text-center">Was mich inspiriert</h2>
            <div className="inspiration-grid">
              <div className="inspiration-item">
                <h3>Natur</h3>
                <p>
                  Die Formen, Farben und Texturen der Natur sind eine unerschöpfliche 
                  Quelle der Inspiration. Von filigranen Blättern bis hin zu majestätischen 
                  Meerestieren - die Natur bietet unendliche Möglichkeiten.
                </p>
              </div>
              <div className="inspiration-item">
                <h3>Architektur</h3>
                <p>
                  Jeder Raum hat seine eigene Architektur und Atmosphäre. Ich lasse mich 
                  von den vorhandenen Elementen inspirieren und entwickle Kunstwerke, 
                  die harmonisch mit dem Raum verschmelzen.
                </p>
              </div>
              <div className="inspiration-item">
                <h3>Menschen</h3>
                <p>
                  Die Geschichten, Träume und Persönlichkeiten meiner Kunden sind der 
                  wichtigste Inspirationsquell. Jedes Kunstwerk soll die Menschen widerspiegeln, 
                  die in diesen Räumen leben oder arbeiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)' }}>
        <div className="container text-center">
          <h2>Bereit für Ihr persönliches Kunstwerk?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Lassen Sie uns gemeinsam Ihre Ideen in die Realität umsetzen
          </p>
          <div className="hero-buttons">
            <a href="/kontakt">
              <button>
                Beratungstermin vereinbaren
              </button>
            </a>
            <a href="/galerie">
              <button className="outline">
                Meine Arbeiten ansehen
              </button>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-main {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #2c2c2c;
        }

        .about-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f8f8;
          border-radius: 8px;
        }

        .skill-icon {
          font-size: 1.5rem;
          color: #666;
          min-width: 24px;
        }

        .skill-item h3 {
          margin: 0;
          color: #2c2c2c;
          font-size: 1.1rem;
        }

        .skill-item p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        .philosophy-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .quote-container {
          position: relative;
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .quote-icon {
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 2rem;
          color: #2c2c2c;
          background: #f8f8f8;
          padding: 10px;
        }

        blockquote {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #2c2c2c;
          font-style: italic;
          margin: 1rem 0;
        }

        cite {
          display: block;
          text-align: right;
          color: #666;
          font-weight: 500;
          margin-top: 1rem;
        }

        .philosophy-points {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .point h3 {
          color: #2c2c2c;
          margin-bottom: 0.5rem;
        }

        .point p {
          color: #666;
          line-height: 1.6;
        }

        .inspiration-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .inspiration-item {
          text-align: center;
          padding: 2rem;
          background: #f8f8f8;
          border-radius: 8px;
        }

        .inspiration-item h3 {
          color: #2c2c2c;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .inspiration-item p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-main,
          .philosophy-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-content h2 {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-item {
            flex-direction: column;
            text-align: center;
          }

          .inspiration-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}
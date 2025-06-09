import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Beispielbilder für die Galerie (werden durch echte Bilder ersetzt)
  const galleryImages = [
    {
      id: 1,
      src: '/images/fish.jpg', // Wird auf echte Bilder verweisen
      alt: 'Wandmalerei - Blauer Fisch',
      title: 'Blauer Fisch',
      description: 'Kunstvolle Wandmalerei eines eleganten blauen Fisches'
    },
    {
      id: 2,
      src: '/images/whale.jpg', // Wird auf echte Bilder verweisen  
      alt: 'Wandmalerei - Wal',
      title: 'Majestätischer Wal',
      description: 'Beeindruckende Wandmalerei eines Wals im Wohnzimmer'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600x400/E8E8E8/666666?text=Wandmalerei+3',
      alt: 'Weitere Wandmalerei',
      title: 'Botanisches Motiv',
      description: 'Filigrane Pflanzenmotive für das Schlafzimmer'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600x400/E8E8E8/666666?text=Wandmalerei+4',
      alt: 'Weitere Wandmalerei',
      title: 'Geometrische Formen',
      description: 'Moderne geometrische Wandgestaltung im Büro'
    }
  ]

  // Auto-Slider für die Galerie
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [galleryImages.length])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Ihre Wände werden zu Kunstwerken</h1>
          <p>
            Individuelle Wandmalerei für private Haushalte und Geschäfte. 
            Verwandeln Sie Ihre Räume in einzigartige Erlebnisse mit 
            professionellen, maßgeschneiderten Kunstwerken.
          </p>
          <div className="hero-buttons">
            <Link href="/galerie">
              <button>
                Galerie ansehen <FaArrowRight style={{ marginLeft: '8px' }} />
              </button>
            </Link>
            <Link href="/kontakt">
              <button className="outline">
                Beratung anfragen
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery Slider */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Ausgewählte Arbeiten</h2>
          <p className="text-center" style={{ marginBottom: '3rem', color: '#666' }}>
            Entdecken Sie eine Auswahl meiner individuellen Wandmalereien
          </p>

          <div className="gallery-slider">
            <div className="slider-container">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="slide-content">
                    <div className="slide-image">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="slide-info">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation */}
            <div className="slider-nav">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/galerie">
              <button className="outline">
                Alle Arbeiten ansehen
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section (Platzhalter) */}
      <section className="section" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <div className="video-section">
            <div className="video-content">
              <h2>Wie ich arbeite</h2>
              <p>
                Sehen Sie mir bei der Entstehung eines Kunstwerks über die Schulter. 
                Von der ersten Skizze bis zum fertigen Wandgemälde - jedes Projekt 
                ist einzigartig und wird mit Leidenschaft und Präzision umgesetzt.
              </p>
              <div className="video-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Vollendete Projekte</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Zufriedene Kunden</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Jahre Erfahrung</p>
                </div>
              </div>
            </div>
            <div className="video-placeholder">
              <div className="video-play-button">
                <FaPlay />
              </div>
              <p>Video wird hier eingefügt</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-text">
              <h2>Über meine Kunst</h2>
              <p>
                Jede Wand erzählt eine Geschichte, und ich helfe dabei, diese zum Leben zu erwecken. 
                Mit jahrelanger Erfahrung in der Wandmalerei bringe ich Ihre Visionen auf die Wand - 
                sei es ein beruhigendes Naturmotiv im Schlafzimmer oder ein lebendiges Kunstwerk 
                im Geschäftsraum.
              </p>
              <p>
                Meine Arbeitsweise ist geprägt von enger Zusammenarbeit mit den Kunden, 
                höchster Qualität in der Ausführung und der Liebe zum Detail.
              </p>
              <Link href="/uber-mich">
                <button>
                  Mehr über mich erfahren
                </button>
              </Link>
            </div>
            <div className="about-image">
              <Image
                src="https://via.placeholder.com/500x600/E8E8E8/666666?text=Liv+bei+der+Arbeit"
                alt="Liv bei der Wandmalerei"
                width={500}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)' }}>
        <div className="container text-center">
          <h2>Bereit für Ihr einzigartiges Kunstwerk?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Lassen Sie uns gemeinsam Ihre Ideen in beeindruckende Wandmalerei verwandeln
          </p>
          <div className="hero-buttons">
            <Link href="/kontakt">
              <button>
                Kostenloses Beratungsgespräch
              </button>
            </Link>
            <Link href="/preise-ablauf">
              <button className="outline">
                Ablauf & Preise
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-slider {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .slider-container {
          position: relative;
          height: 500px;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .slide.active {
          opacity: 1;
        }

        .slide-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .slide-image {
          flex: 1;
        }

        .slide-info {
          background: white;
          padding: 1.5rem;
          text-align: center;
        }

        .slide-info h3 {
          margin-bottom: 0.5rem;
          color: #2c2c2c;
        }

        .slide-info p {
          color: #666;
          margin: 0;
        }

        .slider-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          background: white;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d0d0d0;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .nav-dot.active {
          background: #2c2c2c;
        }

        .video-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .video-placeholder {
          background: #e8e8e8;
          height: 300px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #666;
          position: relative;
        }

        .video-play-button {
          width: 80px;
          height: 80px;
          background: rgba(44, 44, 44, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .video-play-button:hover {
          transform: scale(1.1);
        }

        .video-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2rem;
          color: #2c2c2c;
          margin-bottom: 0.5rem;
        }

        .stat p {
          color: #666;
          margin: 0;
        }

        .about-preview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .video-section,
          .about-preview {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .video-stats {
            justify-content: center;
          }

          .slider-container {
            height: 400px;
          }

          .slide-info {
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}
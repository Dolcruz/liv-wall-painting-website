import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { FaSearch, FaTimes } from 'react-icons/fa'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
  description: string
  category: string
  location: string
  size: string
}

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('alle')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  // Galerie-Bilder - diese werden durch echte Bilder ersetzt
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/fish.jpg',
      alt: 'Wandmalerei - Blauer Fisch',
      title: 'Blauer Fisch',
      description: 'Kunstvolle Wandmalerei eines eleganten blauen Fisches im Wohnzimmer.',
      category: 'tiere',
      location: 'Wohnzimmer, Privathaushalt',
      size: '2m x 1,5m'
    },
    {
      id: 2,
      src: '/images/whale.jpg',
      alt: 'Wandmalerei - Majestätischer Wal',
      title: 'Majestätischer Wal',
      description: 'Beeindruckende Wandmalerei eines Wals im Kinderzimmer.',
      category: 'tiere',
      location: 'Kinderzimmer, Privathaushalt',
      size: '3m x 2m'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600x400/E8E8E8/666666?text=Botanisches+Motiv',
      alt: 'Botanische Wandmalerei',
      title: 'Tropische Blätter',
      description: 'Filigrane Pflanzenmotive schaffen eine natürliche Atmosphäre.',
      category: 'botanik',
      location: 'Schlafzimmer, Privathaushalt',
      size: '2,5m x 2m'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600x400/E8E8E8/666666?text=Geometrisches+Design',
      alt: 'Geometrische Wandmalerei',
      title: 'Moderne Geometrie',
      description: 'Klare Linien und geometrische Formen für den Büroraum.',
      category: 'abstrakt',
      location: 'Büro, Geschäftsraum',
      size: '4m x 2,5m'
    }
  ]

  const categories = [
    { value: 'alle', label: 'Alle Arbeiten' },
    { value: 'tiere', label: 'Tiere' },
    { value: 'botanik', label: 'Botanik' },
    { value: 'abstrakt', label: 'Abstrakt' },
    { value: 'kinder', label: 'Kinderzimmer' },
    { value: 'geschaeft', label: 'Geschäftsräume' }
  ]

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'alle' || item.category === selectedCategory
  )

  return (
    <Layout>
      <Head>
        <title>Galerie - Liv Wandmalerei</title>
        <meta name="description" content="Entdecken Sie Livs beeindruckende Wandmalereien. Von Tierporträts bis hin zu abstrakten Designs." />
      </Head>

      <section className="hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1>Meine Arbeiten</h1>
          <p>Eine Sammlung individueller Wandmalereien, die Räume zum Leben erwecken</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem', background: '#f8f8f8' }}>
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-stats">
            <p>{filteredItems.length} Kunstwerke gefunden</p>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >
                <div className="image-container">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                    <p>{item.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal für Bilddetails */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            
            <div className="modal-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>
            
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p className="modal-description">{selectedImage.description}</p>
              <div className="modal-details">
                <div><strong>Ort:</strong> {selectedImage.location}</div>
                <div><strong>Größe:</strong> {selectedImage.size}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 1px solid #d0d0d0;
          background: white;
          color: #666;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #2c2c2c;
          color: white;
          border-color: #2c2c2c;
        }

        .gallery-stats {
          margin-bottom: 2rem;
          color: #666;
          text-align: center;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .gallery-item {
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .image-container {
          position: relative;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 1.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-overlay h3 {
          margin: 0 0 0.5rem 0;
          color: white;
          font-size: 1.2rem;
        }

        .gallery-overlay p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 8px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-info {
          padding: 2rem;
        }

        .modal-info h2 {
          margin-bottom: 1rem;
          color: #2c2c2c;
        }

        .modal-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #4a4a4a;
        }

        .modal-details {
          display: grid;
          gap: 0.5rem;
        }

        .modal-details div {
          color: #666;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-info {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}
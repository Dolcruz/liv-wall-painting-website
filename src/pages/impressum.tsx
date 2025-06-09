import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Impressum() {
  return (
    <Layout>
      <Head>
        <title>Impressum - Liv Wandmalerei</title>
        <meta name="description" content="Impressum und rechtliche Informationen zu Liv Wandmalerei" />
      </Head>

      <section className="hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1>Impressum</h1>
          <p>Rechtliche Informationen gemäß § 5 TMG</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="impressum-content">
            <div className="section-block">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                <strong>Liv Müller</strong><br />
                Wandmalerei & Kunstgestaltung<br />
                Musterstraße 123<br />
                10115 Berlin
              </p>
            </div>

            <div className="section-block">
              <h2>Kontakt</h2>
              <p>
                Telefon: +49 (0) 123 456 789<br />
                E-Mail: info@liv-wandmalerei.de
              </p>
            </div>

            <div className="section-block">
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </div>

            <div className="section-block">
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Freischaffende Künstlerin<br />
                Verliehen in: Deutschland
              </p>
            </div>

            <div className="section-block">
              <h2>Redaktionell verantwortlich</h2>
              <p>
                Liv Müller<br />
                Musterstraße 123<br />
                10115 Berlin
              </p>
            </div>

            <div className="section-block">
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div className="section-block">
              <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="section-block">
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="section-block">
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                umgehend entfernen.
              </p>
            </div>

            <div className="section-block">
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .impressum-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-block {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e0e0e0;
        }

        .section-block:last-child {
          border-bottom: none;
        }

        .section-block h2 {
          color: #2c2c2c;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .section-block p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .section-block p:last-child {
          margin-bottom: 0;
        }

        .section-block a {
          color: #2c2c2c;
          text-decoration: underline;
        }

        .section-block a:hover {
          color: #666;
        }

        strong {
          color: #2c2c2c;
        }
      `}</style>
    </Layout>
  )
}
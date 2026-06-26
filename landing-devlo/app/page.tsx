import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className} page-shell`}>
      <header className="site-header">
        <div className="logo">
          <div className="logo-icon">&lt;/&gt;</div>
          <div className="logo-copy">
            <span className="logo-text-primary">dev</span>
            <span className="logo-text-accent">lo</span>
          </div>
        </div>

        <nav className="top-nav">
          <a href="#features">Características</a>
          <a href="#how-it-works">Cómo funciona</a>
          <a href="#technologies">Tecnologías</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-outline" href="/login">Iniciar sesión</a>
          <a className="btn btn-primary" href="https://tally.so/r/MePolA" target="_blank" rel="noreferrer">Únete a la lista de espera</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="badge">LA IA QUE REVISA TU CÓDIGO</span>
          <h1>
            Detecta problemas.<br />
            Mejora tu código.<br />
            Despliega con <span>confianza</span>.
          </h1>
          <p>
            Devlo es tu auditor de código por IA. Analiza Terraform, Docker y Kubernetes para
            encontrar problemas de seguridad, rendimiento y buenas prácticas.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="https://tally.so/r/MePolA" target="_blank" rel="noreferrer">
              Únete a la lista de espera
            </a>
            <button className="btn btn-outline btn-lg">▶ Ver cómo funciona</button>
          </div>

          <div className="features-mini" id="features">
            <div className="feature-card">
              <div className="feature-icon feature-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a9 9 0 00-9 9c0 5.3 3.7 9.8 9 11 5.3-1.2 9-5.7 9-11a9 9 0 00-9-9z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4>Seguridad</h4>
                <p>Detecta vulnerabilidades antes del despliegue.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4>Rendimiento</h4>
                <p>Mejora la eficiencia de tus despliegues.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4>Buenas prácticas</h4>
                <p>Aplica recomendaciones de código confiables.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div className="dash-logo">
                <div className="logo-icon logo-icon-small">&lt;/&gt;</div>
                <span>dev lo</span>
              </div>
              <div className="dash-header-title">Informe de auditoría</div>
              <div className="dash-status">✓ Análisis completado</div>
            </div>

            <div className="dashboard-layout">
              <aside className="dash-sidebar">
                <div className="menu-item active">Resumen</div>
                <div className="menu-item">
                  <span>Problemas</span>
                  <span className="menu-badge red">2</span>
                </div>
                <div className="menu-item">
                  <span>Recomendaciones</span>
                  <span className="menu-badge yellow">5</span>
                </div>
                <div className="menu-item">
                  <span>Seguridad</span>
                  <span className="menu-badge yellow">7</span>
                </div>
                <div className="menu-item">
                  <span>Rendimiento</span>
                  <span className="menu-badge green">3</span>
                </div>
                <div className="menu-item">
                  <span>Buenas prácticas</span>
                  <span className="menu-badge blue">2</span>
                </div>
              </aside>

              <div className="dash-main">
                <div className="dash-main-header">
                  <span>Puntuación general</span>
                </div>

                <div className="dash-score-section">
                  <div className="chart-wrapper">
                    <div className="chart-circle">
                      <div className="chart-inner">
                        <span>85</span>
                        <small>/100</small>
                      </div>
                    </div>
                  </div>

                  <div className="issues-breakdown">
                    <div className="issue-item"><span><span className="dot critical"></span> Críticos</span><span>2</span></div>
                    <div className="issue-item"><span><span className="dot high"></span> Altos</span><span>5</span></div>
                    <div className="issue-item"><span><span className="dot medium"></span> Medios</span><span>7</span></div>
                    <div className="issue-item"><span><span className="dot low"></span> Bajos</span><span>3</span></div>
                  </div>
                </div>

                <div className="files-section">
                  <h4>Archivos analizados</h4>
                  <div className="file-icons">
                    <div className="file-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7f56d9" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      main.tf
                    </div>
                    <div className="file-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2496ed" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      docker-compose.yml
                    </div>
                    <div className="file-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#326ce5" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      k8s/deployment.yaml
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="code-card">
              <div className="code-card-header">Ejemplo de problema detectado</div>
              <div className="code-content">
                <span className="code-keyword">resource</span> <span className="code-string">"aws_s3_bucket"</span> <span className="code-string">"data"</span> {'{'}<br />
                &nbsp;&nbsp;bucket = <span className="code-string">"my-sensitive-data"</span><br />
                &nbsp;&nbsp;acl &nbsp;&nbsp;&nbsp;= <span className="code-string">"public-read"</span> <span className="code-danger">← Riesgo de seguridad</span><br />
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section" id="technologies">
        <p>CONFIADO POR DESARROLLADORES QUE USAN</p>
        <div className="tech-logos">
          <span className="tech-chip terra">Terraform</span>
          <span className="tech-chip docker">Docker</span>
          <span className="tech-chip k8s">Kubernetes</span>
          <span className="tech-chip aws">AWS</span>
          <span className="tech-chip google">Google Cloud</span>
          <span className="tech-chip azure">Azure</span>
        </div>
      </section>
    </main>
  );
}

'use client';

import { ChangeEvent, DragEvent, useState } from 'react';

const acceptedExtensions = ['.zip', '.tar.gz', '.tgz'];

function isAcceptedFile(fileName: string) {
  const lower = fileName.toLowerCase();
  return acceptedExtensions.some((type) => lower.endsWith(type));
}

export default function DevloInterface() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState('');

  const handleFiles = (selectedFiles: FileList | File[] | null) => {
    if (!selectedFiles) return;

    const accepted = Array.from(selectedFiles).filter((file) => isAcceptedFile(file.name));
    setFiles(accepted);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <main className="devlo-interface-page">
      <section className="devlo-shell">
        <header className="devlo-hero">
          <p className="devlo-eyebrow">Plataforma de auditoría</p>
          <h1># devlo</h1>
        </header>

        <section className="devlo-card">
          <div className="devlo-card-header">
            <h2>Tú proyectos</h2>
            <span className="devlo-pill">Arrastra y suelta</span>
          </div>

          <div
            className={`devlo-dropzone ${dragActive ? 'dragover' : ''}`}
            onDragEnter={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById('devlo-file-input')?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                document.getElementById('devlo-file-input')?.click();
              }
            }}
          >
            <input
              id="devlo-file-input"
              type="file"
              multiple
              accept=".zip,.tar.gz,.tgz"
              hidden
              onChange={handleInputChange}
            />
            <div className="devlo-dropzone-icon">📦</div>
            <p className="devlo-dropzone-title">Suelta tus archivos aquí</p>
            <p className="devlo-dropzone-subtitle">Acepta archivos .zip, .tar.gz y .tgz</p>
            <button className="devlo-primary-btn" type="button">
              Seleccionar archivos
            </button>
          </div>

          <ul className="devlo-file-list">
            {files.length === 0 ? (
              <li className="devlo-file-empty">Aún no se han añadido archivos.</li>
            ) : (
              files.map((file) => <li key={`${file.name}-${file.size}`}>{file.name}</li>)
            )}
          </ul>
        </section>

        <section className="devlo-card">
          <div className="devlo-card-header">
            <h2>Devlo AI</h2>
            <span className="devlo-pill devlo-pill-accent">Activo</span>
          </div>

          <p className="devlo-ai-copy">Tu asistente de auditoría y análisis de código</p>
          <div className="devlo-assistant-bubble">
            👋 Hola, soy Devlo AI. Estoy listo para revisar tu proyecto.
          </div>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Escribe tu mensaje..."
          />
        </section>

        <p className="devlo-notice">
          Devlo AI puede comenzar errores. Verifica siempre la información importante.
        </p>

        <div className="devlo-actions">
          <button className="devlo-action-btn">Descargar ediciones</button>
          <button className="devlo-action-btn">Buscar</button>
          <button className="devlo-action-btn">Comentar</button>
          <button className="devlo-action-btn">Relación de aspecto</button>
          <button className="devlo-action-btn">Compartir</button>
        </div>
      </section>
    </main>
  );
}

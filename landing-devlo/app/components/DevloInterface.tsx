'use client';

import { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import {
  createProject,
  getProjects,
  renameProject,
} from "@/lib/projects";

const acceptedExtensions = ['.zip', '.tar.gz', '.tgz'];

function isAcceptedFile(fileName: string) {
  const lower = fileName.toLowerCase();
  return acceptedExtensions.some((type) => lower.endsWith(type));
}

export default function DevloInterface() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
const [projectName, setProjectName] = useState("");

const [proyectos, setProyectos] = useState<any[]>([]);
const [selectedProject, setSelectedProject] = useState<any | null>(null);
const [menuProject, setMenuProject] = useState<string | null>(null);
const [showRenameModal, setShowRenameModal] = useState(false);
const [newProjectName, setNewProjectName] = useState("");

useEffect(() => {
  cargarProyectos();

  const ultimoProyecto = localStorage.getItem("selectedProject");

  if (ultimoProyecto) {
    setSelectedProject(JSON.parse(ultimoProyecto));
  }
}, []);

async function cargarProyectos() {
  const data = await getProjects();
  setProyectos(data);
}

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
          <h1> Devlo</h1>
        </header>

       <section className="devlo-card">
  <div className="devlo-card-header">
    <h2>Tus proyectos</h2>

    <button
  className="devlo-new-project"
  onClick={() => setShowModal(true)}
>
  + Nuevo
</button>
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

         <ul className="devlo-project-list">
{proyectos.map((proyecto) => (
  <li
  key={proyecto.id}
  className={`devlo-project-item ${
    selectedProject?.id === proyecto.id? "selected" : ""
  }`}
onClick={() => {
  setSelectedProject(proyecto);
  localStorage.setItem(
    "selectedProject",
    JSON.stringify(proyecto)
  );
}}
>
    <span>📁 {proyecto.name}</span>
    <button
  className="devlo-project-menu"
  onClick={(e) => {
    e.stopPropagation();

    if (menuProject === proyecto.id) {
      setMenuProject(null);
    } else {
      setMenuProject(proyecto.id);
    }
  }}
>
  ⋮
</button>
{menuProject === proyecto.id && (
  <div className="devlo-project-dropdown">

<button
  onClick={() => {
    setMenuProject(null);
    setNewProjectName(selectedProject?.name || "");
    setShowRenameModal(true);
  }}
>
   Renombrar
</button>

    <button>
       Eliminar
    </button>

  </div>
)}
  </li>
))}
</ul>
        </section>

        <section className="devlo-card">
          <div className="devlo-card-header">
            <h2>Devlo AI</h2>
            {selectedProject && (
  <p
    style={{
      color:"#2563eb",
      marginTop:6,
      fontSize:14,
      fontWeight:600,
    }}
  >
    Proyecto activo
  </p>
)}
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
          Devlo AI puede cometer errores. Verifica siempre la información importante.
        </p>

        <div className="devlo-actions">
          <button className="devlo-action-btn">Descargar ediciones</button>
          <button className="devlo-action-btn">Buscar</button>
          <button className="devlo-action-btn">Comentar</button>
          <button className="devlo-action-btn">Relación de aspecto</button>
          <button className="devlo-action-btn">Compartir</button>
        </div>
      </section>
      {showModal && (
  <div className="devlo-modal-overlay">
    <div className="devlo-modal">

      <h2>Nuevo proyecto</h2>

      <input
        type="text"
        placeholder="Nombre del proyecto"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <div className="devlo-modal-buttons">

        <button
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </button>

        <button
  onClick={async () => {
    if (!projectName.trim()) return;

    try {
      await createProject(projectName);

      await cargarProyectos();

      alert("Proyecto creado correctamente");

      setProjectName("");
      setShowModal(false);

    } catch (err) {
      console.error(err);
      alert("Error al crear el proyecto");
    }
  }}
>
  Crear proyecto
</button>

      </div>

    </div>
  </div>
)}
    </main>
  );
}

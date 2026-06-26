import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  return (
    <main className={`${inter.className} page-shell`}>
      <section className="login-shell">
        <div className="login-card">
          <h1>Iniciar sesión</h1>
          <p>Introduce tus credenciales para entrar al panel de Devlo.</p>
          <form className="login-form">
            <label>
              Correo
              <input type="email" placeholder="tunombre@gmail.com" required />
            </label>
            <label>
              Contraseña
              <input type="password" placeholder="Contraseña" required />
            </label>
            <button className="btn btn-primary" type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </main>
  );
}

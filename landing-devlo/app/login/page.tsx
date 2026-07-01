'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

const { error: authError } = await supabase.auth.signInWithPassword({
  email,
  password,
});

  if (authError) {
    setError(authError.message);
    return;
  }

  router.replace("/devlo");
router.refresh();
};
  return (
    <main className={`${inter.className} page-shell`}>
      <section className="login-shell">
        <div className="login-card">
          <h1>Iniciar sesión</h1>
          <p>Introduce tus credenciales para entrar al panel de Devlo.</p>
          <form className="login-form" onSubmit={handleLogin}>
            <label>
              Correo
              <input
  type="email"
  placeholder="tunombre@gmail.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/></label>
            <label>
              Contraseña
           <input
  type="password"
  placeholder="Contraseña"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
            </label>
            {error && <p style={{ color: "#ef4444" }}>{error}</p>}
            <button className="btn btn-primary" type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </main>
  );
}

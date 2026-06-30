'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    alert("¡Cuenta creada correctamente!");

    router.push("/login");
  };

  return (
    <main className={`${inter.className} page-shell`}>
      <section className="login-shell">
        <div className="login-card">
          <h1>Crear cuenta</h1>

          <p>Crea tu cuenta para acceder a Devlo.</p>

          <form className="login-form" onSubmit={handleRegister}>

            <label>
              Correo
              <input
                type="email"
                placeholder="tunombre@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Contraseña
              <input
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            {error && (
              <p style={{ color: "#ef4444" }}>{error}</p>
            )}

            <button className="btn btn-primary" type="submit">
              Crear cuenta
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
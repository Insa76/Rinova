import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService }
from "../services/authService";

export function LoginView() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = () => {
    const success =
      authService.login(
        username,
        password
      );

    if (!success) {
      setError(
        "Credenciales incorrectas"
      );
      return;
    }

    navigate("/admin");
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#F4EFE7]
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          bg-white
          p-10
          rounded-[32px]
          shadow-xl
          w-[450px]
        "
      >
        <h1
          className="
            text-4xl
            font-heading
            mb-8
          "
        >
          Admin Rinova
        </h1>

        <div className="space-y-4">
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            className="
              w-full
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
              w-full
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <button
            onClick={handleLogin}
            className="
              w-full
              bg-black
              text-white
              p-4
              rounded-xl
            "
          >
            Ingresar
          </button>

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
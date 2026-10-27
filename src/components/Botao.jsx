import React from "react";

export default function Botao({ children = "Cadastre", className = "" }) {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
}

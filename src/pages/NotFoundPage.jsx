import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">rota não encontrada</p>
      <h1>Esta página não está no quadro.</h1>
      <p className="subtitle">
        Confira o endereço ou volte para a página inicial.
      </p>
      <Link className="button button-primary" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}

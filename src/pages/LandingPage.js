import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Bem-vindo ao Sorteio da S10!</h1>
      <p className="text-lg mb-6 text-center px-4">Participe agora e concorra a prêmios incríveis com apenas alguns cliques.</p>
      <Button onClick={() => navigate("/home")} className="px-6 py-3 text-lg">
        Participar Agora
      </Button>
    </div>
  );
}

export default LandingPage;

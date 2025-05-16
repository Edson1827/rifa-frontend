import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function Home() {
  const [rifas, setRifas] = useState([]);

  useEffect(() => {
    api.get("/rifas").then((res) => setRifas(res.data));
  }, []);

  const comprarPix = (id) => {
    api.post("/pagamentos/pix", { valor: 10 }).then((res) => {
      const qrCodeUrl = res.data.qr_code || res.data.imagem || "";
      alert("Pagamento criado! Escaneie o QR Code gerado.");
      window.open(qrCodeUrl, "_blank");
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Rifas Disponíveis</h1>
      <div className="grid gap-6">
        {rifas.map((rifa) => (
          <Card key={rifa.id} className="shadow-md">
            <CardContent className="py-4">
              <h2 className="text-xl font-semibold mb-1">{rifa.titulo}</h2>
              <p className="text-gray-700 mb-2">{rifa.descricao}</p>
              <p className="font-medium mb-3">Preço: R$ {rifa.preco}</p>
              <Button onClick={() => comprarPix(rifa.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Comprar via Pix
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;

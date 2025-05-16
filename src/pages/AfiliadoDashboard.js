import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

function AfiliadoDashboard() {
  const [comissoes, setComissoes] = useState([]);

  useEffect(() => {
    api.get("/afiliado/comissoes").then(res => setComissoes(res.data));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Painel do Afiliado</h1>
      <div className="grid gap-4">
        {comissoes.map((item, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="flex justify-between items-center py-4">
              <div className="text-lg font-semibold">R$ {item.valor}</div>
              <Badge variant="outline">{item.data}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AfiliadoDashboard;

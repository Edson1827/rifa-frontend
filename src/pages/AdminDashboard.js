import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Card, CardContent } from "../components/ui/card";

function AdminDashboard() {
  const [info, setInfo] = useState({ rifas: 0, usuarios: 0 });

  useEffect(() => {
    api.get("/admin/dashboard").then(res => setInfo(res.data));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Painel Administrativo</h1>
      <div className="grid gap-4">
        <Card className="shadow-md">
          <CardContent className="py-4 text-center">
            <p className="text-xl font-semibold">Total de Rifas</p>
            <p className="text-2xl">{info.rifas}</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="py-4 text-center">
            <p className="text-xl font-semibold">Total de Usuários</p>
            <p className="text-2xl">{info.usuarios}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;

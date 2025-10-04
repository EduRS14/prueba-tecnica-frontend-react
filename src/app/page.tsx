"use client"

import Navbar from "./components/navbar/navbar"
import Link from "next/link";

import { useEffect, useState } from "react";

type ItemBus = {
  id: number;
  placa: string;
  marca: string;
  activo: boolean;
};

export default function Home() {
  const [buses, setBuses] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBuses = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bus?page=${page}`);
      const data = await response.json();
      const buses = data.content;
      setBuses(buses);
      setTotalPages(data.totalPages);
    };

    fetchBuses();
  }, [page]);

  return (
    <>
      <Navbar />
      <main>
        
        <div className="flex items-center justify-center mt-30">
            <div className="flex flex-col bg-white rounded-xl shadow-md w-2/3">

              <div className="flex justify-center mt-5 mb-3">
                <div className="flex-1/2 text-center py-5">
                  <h1 className="titulo">Nuestros buses</h1>
                </div>
              </div>

              <div className="flex justify-center mb-2">
                <div className="flex w-4/5">

                  <table className="table-auto border w-full text-center">
                    <thead className="bg-purple-200">
                      <tr>
                        <th className="border-2 border-purple-300 px-2 py-2">ID</th>
                        <th className="border-2 border-purple-300 px-2 py-2">Placa</th>
                        <th className="border-2 border-purple-300 px-2 py-2">Marca</th>
                        <th className="border-2 border-purple-300 px-2 py-2">Activo</th>
                        <th className="border-2 border-purple-300 px-2 py-2">Detalles</th>
                      </tr>
                    </thead>

                    <tbody>
                      {buses.map((bus: ItemBus) => (
                        <tr key={bus.id} className="hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-2">{bus.id}</td>
                          <td className="border border-gray-300 px-4 py-2">{bus.placa}</td>
                          <td className="border border-gray-300 px-4 py-2">{bus.marca}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {bus.activo ? "Sí" : "No"}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <Link href={`/bus/${bus.id}`} target="_blank" rel="noopener noreferrer">
                              <button className="bg-purple-500 text-white px-4 py-2 rounded btn-link">Ver Detalles</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>

                </div>
              </div>

              <div className="flex justify-center my-5">
                <div className="w-2/5 flex items-center justify-center">
                  
                    <div className="w-1/3 flex justify-center">
                      <button
                        disabled={page === 0}
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 boton-pagina"
                      >
                        Anterior
                      </button>
                    </div>
                    <div className="w-1/3 flex justify-center">
                      <p>{page + 1} de {totalPages}</p>
                    </div>
                    <div className="w-1/3 flex justify-center">
                      <button
                        disabled={page + 1 >= totalPages}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 boton-pagina"
                      >
                        Siguiente
                      </button>
                    </div>

                </div>
              </div>

            </div>

        </div>


      </main>
    </>
  );
}

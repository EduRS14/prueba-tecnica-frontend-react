"use client";

import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

type Marca = {
    id: number;
    nombre: string;
}

type Bus = {
  id: number;
  numero: number;
  placa: string;
  fecha_creacion: string;
  caracteristicas: string;
  marca: Marca;
  activo: boolean;
};

export default function BusDetails({ params }: Props) {

    const { id } = React.use(params);

    const [bus, setBus] = useState<Bus | null>(null);

    useEffect(() => {
      const fetchBus = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bus/${id}`);
        const data = await response.json();
        setBus(data);
        console.log(data);
      };
      fetchBus();
    }, [id]);

    return (
      <>
          <Navbar />
          <main>
          <div className="flex items-center justify-center mt-30">
            <div className="flex flex-col bg-white rounded-xl shadow-md w-2/3">

                <div className="flex justify-center mt-5 mb-3">
                  <div className="flex-1/2 text-center py-5">
                    <h1 className="titulo">Detalles del Bus</h1>
                  </div>
                </div>

                <div className="flex justify-center mt-5 mb-10">
                    <div className="w-3/4 flex items-center justify-center">
                        <div className="w-1/2 flex justify-center px-5 bg-purple-200 pt-10 pb-3 border border-purple-900 rounded-lg shadow-lg">
                            <Image src="/bus.png" alt="bus" width={300} height={200} />
                        </div>
                        <div className="w-1/2 flex justify-end">

                            <div className="flex flex-col w-3/5">

                                <div className="flex justify-start p-4 text-start">
                                    <p><b>ID del Bus:</b> {bus?.id}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Número del Bus:</b> {bus?.numero}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Placa:</b> {bus?.placa}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Fecha de Creación:</b> {bus?.fecha_creacion}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Características:</b> {bus?.caracteristicas}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Marca:</b> {bus?.marca.nombre}</p>
                                </div>
                                <div className="flex justify-start p-4 text-start">
                                    <p><b>Activo:</b> {bus?.activo ? "Sí" : "No"}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-5">
                  <div className="flex-1/2 text-center py-5">
                        <Link href='/'>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded btn-link">Volver</button>
                        </Link>
                  </div>
                </div>

            </div>
          </div>
          </main>
      </>
    );
}
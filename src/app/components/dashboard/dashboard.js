"use client";
import Link from "next/link";
import "./dashboard.css";
import { useState } from "react";
export default function Dashboard() {
  const [isMenuOpen, SetIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`dashboard-container ${
        isMenuOpen ? "menu-open" : "menu-closed"
      }`}
    >
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}
      </button>

      <div className={`menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="user-container">
          <div className="img-container"></div>
          <label>Nombre del usuario</label>
        </div>
        <div className="nav-container">
          <ul>
            <Link href="/pages/home">
              <li>Inicio</li>
            </Link>
            <Link href="/pages/ventas">
              <li>Venta</li>
            </Link>
            <Link href="/pages/inventario">
              <li>Inventario</li>
            </Link>
            <Link href="/pages/usuarios">
              <li>Usuarios</li>
            </Link>
            <Link href="/pages/proveedores">
              <li>Proveedores</li>
            </Link>
          </ul>
        </div>
        <div className="sesion-container">
          <button type="button">
            <Link href="/">Cerrar sesión</Link>
          </button>
        </div>
      </div>

      <div className="content"></div>
    </div>
  );
}

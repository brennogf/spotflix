import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import IconePerfil from "../../assets/img/icone_perfil.png";
import LogoNetflix from "../../assets/img/logo.png";
import api from "../../services/api";

import { HeaderContainer, Logo, MenuPerfil, MenuPrincipal } from "./styles";

export default function Header() {
  const [categorias, setCategorias] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function searchCategories() {
      try {
        const response = await api.get("/categorias");
        setCategorias(response.data);
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    }
    searchCategories();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src={LogoNetflix} alt="Spotflix" />
        </Link>
      </Logo>

      <MenuPrincipal>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          {categorias.map((atual, index) => {
            if (index < 3) {
              const link = `/categoria/${atual.name}`;
              return (
                <li key={atual._id}>
                  <Link to={link}>{atual.name}</Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </MenuPrincipal>

      <MenuPerfil ref={dropdownRef}>
        <div className="profile-container">
          <img
            src={IconePerfil}
            alt="Ícone do Perfil"
            className="profile-image"
            onClick={toggleDropdown}
          />

          <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <div className="dropdown-header">
              Menu de Administração
            </div>

            <Link
              to="/cadastro/musica"
              className="dropdown-item"
              onClick={() => setIsDropdownOpen(false)}
            >
              <span className="icon">🎵</span>
              Nova Música
            </Link>

            <div className="dropdown-divider"></div>

            <Link
              to="/cadastro/categoria"
              className="dropdown-item"
              onClick={() => setIsDropdownOpen(false)}
            >
              <span className="icon">📁</span>
              Nova Categoria
            </Link>
          </div>
        </div>
      </MenuPerfil>
    </HeaderContainer>
  );
}

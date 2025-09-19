import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";
import styles from "./styles.module.css";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 0fa8ad1 (Your local changes)

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
	const savedTheme = localStorage.getItem('theme') as AvailableThemes | null;
	return savedTheme ? savedTheme : 'dark';
  });

  const nextThemeIcon = {
	dark: <SunIcon />,	
	light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  }

<<<<<<< HEAD
  };
=======
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
>>>>>>> 0fa8ad1 (Your local changes)

  useEffect(() => {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme); // Armazena a preferencia do usuario no localStorage.
  }, [theme]); // So e e executado quando o tema mudar.

  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ir para a Home"
          title="Ir para a Home"
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Ver historico"
          title="Ver historico"
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configuracoes"
          title="Configuracoes"
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Mudar Tema"
          title="Mudar Tema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}

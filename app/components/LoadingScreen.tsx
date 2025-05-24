/**
 * @name LoadindScreen.tsx
 * @type Component
 */

import React from "react";
import { useLanguage } from "../contexts/language-context";

/**
 * @loadingScreen
 * Fonction principale
 *
 * @description Ecran de chargement affiché temporarement
 * avant que le reste soit généré, simple texte en milieu de page.
 *
 */
const LoadingScreen: React.FC = () => {
  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <div className="bg-white fixed inset-0 z-50 flex items-center justify-center">
      <h1 className="text-xl font-semibold">{texts.loading.text}</h1>
    </div>
  );
};

export default LoadingScreen;

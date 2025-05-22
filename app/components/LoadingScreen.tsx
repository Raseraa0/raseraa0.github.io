/**
 * @name LoadindScreen.tsx
 * @type Component
 */

import texts from "@/lib/data-texts";
import React from "react";

/**
 * @loadingScreen
 * Fonction principale
 *
 * @description Ecran de chargement affiché temporarement
 * avant que le reste soit généré, simple texte en milieu de page.
 *
 */
const LoadingScreen: React.FC = () => {
  return (
    <div className="bg-white fixed inset-0 z-50 flex items-center justify-center">
      <h1 className="text-xl font-semibold">{texts.loading.text}</h1>
    </div>
  );
};

export default LoadingScreen;

/**
 * @name LoadindScreen
 * @description Ecran de chargement
 * Cet écran ne sera affiché que temporairement
 */

import texts from "@/lib/data-texts";
import React from "react";

/**
 * Fonction principale
 * @returns
 *      - Simple écran blanc avec Loading d'écrit
 */
const LoadingScreen: React.FC = () => {
  return (
    <div className="bg-white fixed inset-0 z-50 flex items-center justify-center">
      <h1 className="text-xl font-semibold">{texts.loading.text}</h1>
    </div>
  );
};

export default LoadingScreen;

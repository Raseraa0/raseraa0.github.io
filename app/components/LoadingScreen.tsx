/**
 * @name LoadindScreen
 * @description Ecran de chargement 
 * Cet écran ne sera affiché que temporairement
 */

import React from 'react';

/**
 * Fonction principale
 * @returns 
 *      - Simple écran blanc avec Loading d'écrit
 */
const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <h1 className="text-xl font-semibold">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;

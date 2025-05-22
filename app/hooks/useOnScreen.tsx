
/**
 * @name useOneScreen.tsx
 * @type Hook
 */
'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook qui va retourner 2 éléments.
 * 
 * @return ref: qui est la référence a attribué au composant voulu
 * @return isIntersecting: qui est un indicateur de si l'élément ou la ref
 * pointe est visible a l'écran ou pas
 */
export function useOnScreen<T extends Element>(threshold = 0.1) {

  // Création d'une référence
  const ref = useRef<T>(null);

  // Pour savoir si il y a intersection ou pas
  const [isIntersecting, setIntersecting] = useState(false);

  // Vérification de si le composant qui à ref est à l'écran ou pas
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting] as const;
}

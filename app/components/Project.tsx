import projects from "@/lib/data-projects";
import "../style/project.css";

type Props = {
  id: number;
};

function Project({ id }: Props) {
  const selectedProject = projects.find((project) => project.id === id);
  const bg_col = selectedProject?.color ?? "#000000";

  const darkenColor = (color: string, percent: number) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const newR = Math.floor(r * (1 - percent));
    const newG = Math.floor(g * (1 - percent));
    const newB = Math.floor(b * (1 - percent));

    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB)
      .toString(16)
      .slice(1)}`;
  };

  const darkenedColor = darkenColor(bg_col, 0.2);

  return (
    <div
      className="flex-grow mx-4 my-2 rounded-md border-2 border-blue-7/50 hover:border-blue-6/80"
      style={{
        background: `linear-gradient(45deg, ${darkenedColor}, ${bg_col} 20%, ${darkenedColor} 45%,${bg_col} 70%, ${darkenedColor})`,
      }}
    >
      <div className="p-bg-lines h-full w-full">
        {/* CF EXCALIDRAW JAVAIS UN BON TRUC (OU SCREEN SI Y A PAS)
        cf les note téléphone + en vrai juste mettre la mise en page des projet,
        puis adapter a l'ordinateur, puis la regarder si je met pas glar card a la place
        et ensuite je verrai pour les skills (pas de card pour les skills en vrai je pense) */}
      </div>
    </div>
  );
}

export default Project;

// utiliser des Link pour voyager et pas des a

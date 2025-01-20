import Flag from "react-world-flags";
import { languageToFlag } from "../services/Bandiere";

// Url base del immagine
const baseUrlImage = "https://image.tmdb.org/t/p/";

// Dimensione immagine
const w = "w500";

export function Card({
  title,
  original_title,
  original_language,
  vote_average,
  type,
  image,
}) {
  return (
    <div className="max-w-xs mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Immagine poster */}
      <div className="relative">
        {image ? (
          <img
            src={`${baseUrlImage}${w}${image}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/Immagine poster non trovata.png"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        )}
        {/* Valutazione */}
        {vote_average && (
          <div className="absolute -bottom-7 left-14  text-yellow-400 text-xs px-2 py-1 rounded">
          </div>
        )}
      </div>
      <div className="p-4 pt-1">
        {/* Tipo film o serie tv */}
        <span className="text-sm text-gray-400 uppercase">
          {type.toUpperCase()}
        </span>
        {/* Titolo principale */}
        <h3 className="mt-1 text-xl font-semibold text-white">
          {title || "N/A"}
        </h3>
        {/* Titolo originale */}
        {original_title && (
          <p className="text-sm text-gray-400 mt-2">
            <strong>Titolo Originale:</strong> {original_title}
          </p>
        )}
        {/* Lingua originale */}
        {original_language && (
          <p className="text-sm text-gray-400 mt-1">
            
            <Flag
              code={languageToFlag[original_language]}
              alt={original_language}
              style={{ width: 20, height: 15 }}
            />
          </p>
        )}
      </div>
    </div>
  );
}

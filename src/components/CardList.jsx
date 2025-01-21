import { useGlobalContext } from "../context/GlobalConten";
import { Card } from "./Card";

export function CardList() {
    const { dataFromApi, selectValue } = useGlobalContext();

    // Controllo dei dati
    console.log(dataFromApi, "hello");

    // Filtro per tipo selezionato
    const arrayFiltrato = dataFromApi.filter((d) => {
        // Se `selectValue` è vuoto o uguale a "entrambi", mostra tutti i risultati
        if (!selectValue || selectValue === "entrambi") return true;

        // Filtra per il tipo selezionato (movie o tv)
        return d.type === selectValue;
    });;

    console.log(selectValue, arrayFiltrato, "Valori filtro");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {arrayFiltrato !== undefined &&
                arrayFiltrato.map((obj) => (
                    <Card
                        key={obj.id}
                        title={obj.type === "movie" ? obj.title : obj.name}
                        original_title={
                            obj.type === "movie" ? obj.original_title : obj.original_name
                        }
                        original_language={obj.original_language}
                        vote_average={obj.vote_average}
                        type={obj.type}
                        image={obj.poster_path}
                    />
                ))}
        </div>
    );
}

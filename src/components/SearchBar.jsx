import { useGlobalContext } from "../context/GlobalConten";
import { useState, useEffect } from "react";
import { fetchMovies, fetchTvSeries } from "../services/apiTheMovieDb";
import { Select } from "./InputFilter";

export function SearchBar() {
    // Prelevo la searchQuery dal context globale
    const { searchQuery, setSearchQuery, setDataFromApi } = useGlobalContext();

    // Stato per memorizzare i dati e lo stato di caricamento
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); // Gestione degli errori

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery.trim()) {
                setIsLoading(true); // Imposta il caricamento a true
                setError(null); // Resetta eventuali errori
                try {
                    // Eseguo le chiamate API
                    const [movies, tv] = await Promise.all([
                        fetchMovies(searchQuery),
                        fetchTvSeries(searchQuery),
                    ]);

                    console.log(movies, tv, "Dati api"); // Controlla i dati delle API

                    // Salvo insieme i due array nello stato
                    setData([...movies, ...tv]);
                } catch (error) {
                    console.error("Errore nel recupero dei dati", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        // Esegue il fetch quando il searchQuery cambia
        fetchData();
    }, [searchQuery]);

    useEffect(() => {

        // Se i dati sono stati recuperati, aggiorna il context globale
        if (data.length > 0) {
            console.log("Aggiorno il context", data)
            setDataFromApi(data);
        }
    }, [data, setDataFromApi]);

    const syncInputQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row items-center gap-4 p-4">
                <Select />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={syncInputQuery}
                    placeholder="Inserisci il titolo di un film..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={() => {
                        const currentQuery = searchQuery;
                        setSearchQuery(searchQuery + " ");
                        setSearchQuery(currentQuery);
                    }}
                    className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Invia
                </button>
            </div>
        </div>
    );
}
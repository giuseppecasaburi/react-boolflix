import { useGlobalContext } from "../context/GlobalConten";

export function Select() {
    
  // Prendo dal context sia il valore di select che la funzione per settarlo
  const { selectValue, setSelectValue } = useGlobalContext();

  const syncSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="p-4">
      <select
        name="obj_tipo"
        id="obj_tipo"
        value={selectValue}
        onChange={syncSelect}
        required
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Scegli tipo</option>
        <option value="movie">Film</option>
        <option value="tv">Serie Tv</option>
        <option value="entrambi">Entrambi</option>
      </select>
    </div>
  );
}

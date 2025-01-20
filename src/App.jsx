import { GlobalContextProvider } from "./context/GlobalConten";
// import { CardList } from "./components/CardList";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <GlobalContextProvider>
      <SearchBar />
      {/* <CardList /> */}
    </GlobalContextProvider>
  );
}

export default App;

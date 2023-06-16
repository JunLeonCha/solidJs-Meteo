import { createSignal, on, type Component, For, createEffect } from 'solid-js';

const App: Component = () => {
  const [searchValue, setSearchValue] = createSignal('');
  const [searchResult, setSearchResult] = createSignal<any>([]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`https://www.prevision-meteo.ch/services/json/${searchValue()}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
      });
  };

  return (
    <div class='meteo' style={{ "display": "flex", "flex-direction": "column", "align-items": "center" }}>
      <h1>Application Méteo</h1>
      <input type="text" value={searchValue()} onChange={handleChange} placeholder='Nom de ville' />
      <button onClick={handleSubmit}>Envoyer</button>
      {searchResult() && searchResult().city_info && (
        <div class="result" style={{ "display": "flex", "flex-direction": "column", "align-items": "center" }}>
          <h2>{searchResult().city_info.name}</h2>
          <span>Le {searchResult().current_condition.date}</span>
          <span>à {searchResult().current_condition.hour}</span>
          <span>Le temps est {searchResult().current_condition.condition}</span>
          <span>il fera {searchResult().current_condition.tmp} °</span>
        </div>
      )}
    </div>
  );
};

export default App;

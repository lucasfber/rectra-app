import React, { useEffect, Suspense } from 'react';
import './App.scss';
import './i18n';
import useFetch from './hooks/useFetch';
import Card from './Card/';
import globe from './assets/img/globe.svg';
import brazil from './assets/img/brazil.svg';
import Footer from './Footer';
import ToggleBar from './ToggleBar';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [
    globalResults,
    errorGlobal,
    loadingGlobal,
    requestGlobalResults,
  ] = useFetch();

  const [
    brazilianResults,
    errorBrazilian,
    loadingBrazilian,
    requestBrazilianResults,
  ] = useFetch();

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  useEffect(() => {
    requestGlobalResults('https://covid19.mathdro.id/api');
    requestBrazilianResults('https://covid19.mathdro.id/api/countries/BR');
  }, [requestBrazilianResults, requestGlobalResults]);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Suspense fallback={null}>
        <ToggleBar
          toggleDarkMode={() => setDarkMode(!darkMode)}
          isDarkMode={darkMode}
        />
        <div className="container">
          {globalResults && (
            <Card
              isLoading={loadingGlobal}
              image={globe}
              recovered={globalResults.recovered.value}
              lastUpdate={globalResults.lastUpdate}
              error={errorGlobal}
            />
          )}
          {brazilianResults && (
            <Card
              isLoading={loadingBrazilian}
              image={brazil}
              recovered={brazilianResults.recovered.value}
              lastUpdate={brazilianResults.lastUpdate}
              error={errorBrazilian}
            />
          )}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

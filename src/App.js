import React, { useEffect, Suspense, useState } from 'react';
import './App.scss';
import './i18n';
import useFetch from './hooks/useFetch';
import Card from './Card/';
import globe from './assets/img/globe.svg';
import brazil from './assets/img/brazil.svg';
import Footer from './Footer';
import ToggleBar from './ToggleBar';
import Spinner from './Spinner';

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

  const [darkMode, setDarkMode] = useState(false);

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
          {false && <Spinner />}
          {globalResults && (
            <Card
              isLoading={false}
              image={globe}
              recovered={globalResults.recovered.value}
              lastUpdate={globalResults.lastUpdate}
              error={errorGlobal}
              loading={loadingGlobal}
            />
          )}
          {brazilianResults && (
            <Card
              isLoading={false}
              image={brazil}
              recovered={brazilianResults.recovered.value}
              lastUpdate={brazilianResults.lastUpdate}
              error={errorBrazilian}
              loading={loadingBrazilian}
            />
          )}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

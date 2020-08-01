import React, { useState, Suspense, useEffect } from 'react';
import './App.scss';
import './i18n';
import Card from './Card';
/* import ToggleBar from './ToggleBar'; */
import globe from './assets/img/globe.svg';
import brazil from './assets/img/brazil.svg';
/* import darkGlobe from './assets/img/dark-globe.svg'; */
import Footer from './Footer';
import Spinner from './Spinner';
import useFetch from './hooks/useFetch';

function App() {
  /* const [darkMode, setDarkMode] = useState(false); */
  /* const [loading, setLoading] = useState(false); */
  const [recoveredData, setRecoveredData] = useState({});

  const [globalResults, setGlobalResults, requestGlobalResults] = useFetch();

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
      .then((res) => res.json())
      .then((data) => console.log(data));
    /*     const getData = async () => {
      setLoading(true);
 */
    //const globalResults = await fetch('https://covid19.mathdro.id/api');
    /* const globalRecovered = await globalResults.json(); */
    /*       const getGlobalResults = async () => {
        requestGlobalResults('https://covid19.mathdro.id/api');
      };
      await getGlobalResults();

      const globalRecovered = globalResults;
      console.log('globalREsults => ', globalResults);

      const brazilianResult = await fetch(
        'https://covid19.mathdro.id/api/countries/BR',
      );

      const brazilianRecovered = await brazilianResult.json();

      setRecoveredData({
        globalRecovered: globalResults.recovered.value,
        globalLastUpdate: globalRecovered.lastUpdate,
        brazilianRecovered: brazilianRecovered.recovered.value,
        brazilianLastUpdate: brazilianRecovered.lastUpdate,
      });
      setLoading(false);
    };

    const isDarkModeActive =
      localStorage.getItem('darkMode') !== null
        ? localStorage.getItem('darkMode') === 'true'
        : false;

    setDarkMode(isDarkModeActive);
    getData(); */
  }, []);

  /*   const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.removeItem('darkMode');
      setDarkMode(!darkMode);

      /* manipulating body's pseudo-elements to add styles 
      document.querySelector('body').classList.toggle('dark');
    } else {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', !darkMode);

      /* manipulating body's pseudo-elements to add styles 
      document.querySelector('body').classList.toggle('dark');
    }
  }; */

  return (
    <div className={'App'}>
      <Suspense fallback={null}>
        {/* <ToggleBar toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} /> */}

        <div className="container">
          {false && <Spinner />}
          <Card
            isLoading={false}
            image={globe}
            recovered={recoveredData.globalRecovered}
            lastUpdate={recoveredData.globalLastUpdate}
          />
          {/*           <Card
            isLoading={loading}
            image={brazil}
            recovered={recoveredData.brazilianRecovered}
            lastUpdate={recoveredData.brazilianLastUpdate}
          /> */}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

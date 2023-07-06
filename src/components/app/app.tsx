import MainPage from '../../pages/main-page/main';

type AppProps = {
  numberOfOfferCards: number;
}

function App({numberOfOfferCards} : AppProps) : JSX.Element {
  return (
    <MainPage numberOfOfferCards={numberOfOfferCards}/>
  );
}

export default App;

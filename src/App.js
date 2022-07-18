import style from "./App.module.css"
import Header from "./Components/Header/Header";
import RequestFieldContainer from "./Components/RequestField/RequestFiledContainer";

const App = () =>  {
  return (
    <div className={style.App}>
      <div className={style.MainArea}>
          <Header/>
          <RequestFieldContainer/>
      </div>
    </div>
  );
}

export default App;

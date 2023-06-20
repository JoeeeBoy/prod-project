import Counter from "./components/Counter";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AbautPage/AbautPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOUGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/AboutPage"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/AboutPage"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;

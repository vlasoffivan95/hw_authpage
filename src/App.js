import Header from "./components/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import LoginUser from "./components/LoginUser";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound404";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <main className={styles.appContainer}>
      <Header />
      <Switch>
        <Route path="/" component = {LoginUser} exact />
        <Route path="/login" component={LoginUser} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;

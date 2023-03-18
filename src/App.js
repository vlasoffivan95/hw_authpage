import Header from "./components/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import LoginUser from "./components/LoginUser";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound404";




function App() {
  return (
    <main className={styles.appContainer}>
      <Header />
      {/* <LoginUser/> */}
      {/* <SignUp/> */}
      <NotFound/>
      <Footer />
    </main>
  );
}

export default App;

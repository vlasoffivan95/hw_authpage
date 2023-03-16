import Header from "./components/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import LoginUser from "./components/LoginUser";


function App() {
  return (
    <main className={styles.appContainer}>
      <Header />
      <LoginUser/>
      <Footer />
    </main>
  );
}

export default App;

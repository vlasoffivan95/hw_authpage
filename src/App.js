import Header from "./components/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <main className={styles.appContainer}>
      <Header />
      <Footer />
    </main>
  );
}

export default App;

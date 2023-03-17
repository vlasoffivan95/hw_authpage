import Header from "./components/Header";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import LoginUser from "./components/LoginUser";
import SignUp from "./components/SignUp";



function App() {
  return (
    <main className={styles.appContainer}>
      <Header />
      {/* <LoginUser/> */}
      <SignUp/>
      <Footer />
    </main>
  );
}

export default App;

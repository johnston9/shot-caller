import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PageNotF from './components/PageNotF';
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App} >
      <NavBar />
      <Container className={styles.Main}>
        {/* <Switch> */}
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" render ={() => <h1>Sign in</h1> } />
        <Route exact path="/signup" element={<SignUpForm />} />
        <Route element={<PageNotF />} />
        </Routes>
        {/* </Switch> */}
      </Container>
    </div>
  );
}

export default App;

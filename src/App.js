import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PageNotF from './components/PageNotF';
import Container from "react-bootstrap/Container";
// import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import { Route, Switch } from "react-router-dom";
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import SceneCreateForm from './pages/scenes/SceneCreateForm';
import PostPage from './pages/posts/PostPage';

function App() {

  return (
    <div className={styles.App} >
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        {/* <Routes> */}
        <Route exact path="/" render={() => <h1>Shot Caller</h1>} />
        <Route exact path="/signin" render={() => <SignInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/scenes/create" render={() => <SceneCreateForm />} />
        <Route exact path="/posts/create" render={() => <PostCreateForm />} />
        <Route exact path="/posts/:id" render={() => <PostPage />} />
        <Route render={() => <PageNotF />} />
        {/* </Routes> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;

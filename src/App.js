import styles from './App.module.css';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import "./api/axiosDefaults";
import { Route, Switch } from "react-router-dom";
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import SceneCreateForm from './pages/scenes/SceneCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import FindPostsDepartments from './pages/posts/FindPostsDepartments';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ScenesPage from './pages/scenes/ScenesPage';
import ScenePage from './pages/scenes/ScenePage';
import { useCategoryContext, useDeptContext, useDeptGeneralContext, useNumberContext, useSceneContext } from './contexts/DeptCategoryContext';
import { useActContext } from './contexts/ActContext';
import SceneEditForm from './pages/scenes/SceneEditForm';
import Home from './pages/home/Home';
import ProfilesPage from './pages/profiles/ProfilesPage';
import DeptPostCreate from './pages/departments/DeptPostCreate';
import DeptPostsPage from './pages/departments/DeptPostsPage';
import DeptsGeneral from './pages/departments/DeptsGeneral';
import DeptPostPage from './pages/departments/DeptPostPage';
import DeptPostEdit from './pages/departments/DeptPostEdit';
import Landing from './pages/home/Landing';
import DayCreateForm from './pages/schedule/DayCreateForm';
import ScheduleDays from './pages/schedule/ScheduleDays';
import DayEdit from './pages/schedule/DayEdit';
import DayPage from './pages/schedule/DayPage';
import SceneScheduleEdit from './pages/schedule/SceneScheduleEdit';
import Characters from './pages/characters/Characters';
import CharacterPage from './pages/characters/CharacterPage';
import CharacterCreate from './pages/characters/CharacterCreate';
import CharacterEdit from './pages/characters/CharacterEdit';
import MoodshotCreate from './pages/moodshots/MoodshotCreate';
import MoodshotsPage from './pages/moodshots/MoodshotsPage';
import LocationsPage from './pages/locations/LocationsPage';
import LocationsEdit from './pages/locations/LocationsEdit';
import LocationsCreate from './pages/locations/LocationsCreate';
import LocationPage from './pages/locations/LocationPage';
import { useCharacterContext, useLocationContext } from './contexts/CharLocatContex';
import MoodshotEdit from './pages/moodshots/MoodshotEdit';
import MoodshotPage from './pages/moodshots/MoodshotPage';

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || '';
  const sceneId = useSceneContext();
  const dept = useDeptContext();
  const category = useCategoryContext();
  const number = useNumberContext();
  const act = useActContext();
  const deptGeneral = useDeptGeneralContext();
  const character = useCharacterContext();
  const location = useLocationContext();

  return (
    <div className={`px-2 px-md-4 ${styles.App }`} >
      <NavBar />
      <div className={styles.Main}>
        <Switch>
        {/* <Routes> */}
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/signin" render={() => <SignInForm />} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/home" render={() => <Home />} />
        {/* SCHEDULE*/}
        <Route exact path="/days/create" render={() => <DayCreateForm />} />
        <Route exact path="/edit/days/:id/" render={() => <DayEdit />} />
        <Route
            exact
            path="/days"
            render={() => (
              <ScheduleDays
               message="No results found. Please add a scene" />
            )}
          />
        <Route exact path="/day/:id/" render={() => <DayPage />} />
        <Route exact path="/schedule/scenes/edit/:id/" render={() => <SceneScheduleEdit />} />
        {/* LOCATIONS */}
        <Route exact path="/locations/create" render={() => <LocationsCreate />} />
        <Route 
            exact 
            path="/locations/:id" 
            render={() => (
            <LocationPage 
             />
             )} />
        <Route exact path="/locations/:id/edit" render={() => <LocationsEdit />} />
        <Route
            exact
            path="/locations"
            render={() => (
              <LocationsPage
               message="No results found" />
            )}
          />
        {/* CHARACTERS */}
        <Route
            exact
            path="/characters"
            render={() => (
              <Characters
               message="No results found" />
            )}
          />
        <Route exact path="/characters/create" render={() => <CharacterCreate />} />
        <Route 
            exact 
            path="/characters/:id" 
            render={() => (
            <CharacterPage
             />
             )} />
        <Route exact path="/characters/:id/edit" render={() => <CharacterEdit />} />
        {/* MOODS*/}
        {/* all moodshots */}
        <Route exact path="/moodshot/create" render={() => <MoodshotCreate />} />
        <Route exact path="/moodshots/:id/edit" render={() => <MoodshotEdit />} />
        <Route
            exact
            path="/moodshots"
            render={() => (
              <MoodshotsPage 
               message="No results found. Please add a shot" />
            )}
          />
        <Route 
            exact 
            path="/moodshots/:id" 
            render={() => (
            <MoodshotPage
             />
             )} />
        {/* Moodshots for scenes */}
        <Route exact path="/scene/moodshot/create" render={() => (
          <MoodshotCreate
          sceneId={sceneId}
          number={number} />) } />
        <Route
            exact
            path="/scene/moodshots"
            render={() => (
              <MoodshotsPage
                message="No results found."
                filter={`scene=${sceneId}`}
                sceneId={sceneId}
                number={number}
              />
            )}
          />
        {/* Moodshots for characters */}
        <Route exact path="/character/moodshot/create" render={() => (
          <MoodshotCreate
          characterRole={character}/>) } />
        <Route
            exact
            path="/character/moodshots"
            render={() => (
              <MoodshotsPage
                message="No results found."
                filter={`character=${character}`}
                characterRole={character}
              />
            )}
          />
        {/* Moodshots for locations */}
        <Route exact path="/location/moodshot/create" render={() => (
          <MoodshotCreate
          locationPlace={location}/>) } />
        <Route
            exact
            path="/location/moodshots"
            render={() => (
              <MoodshotsPage
                message="No results found."
                filter={`location=${location}`}
                locationPlace={location}
              />
            )}
          />
        {/* SCENES*/}
        <Route exact path="/scenes/create" render={() => <SceneCreateForm />} />
        <Route
            exact
            path="/scenes"
            render={() => (
              <ScenesPage 
               message="No results found. Please add a scene" />
            )}
          />
        <Route
            exact
            path="/act/scenes"
            render={() => (
              <ScenesPage
                message="No results found."
                filter={`act=${act}`}
              />
            )}
          />
        <Route 
            exact 
            path="/scenes/:id" 
            render={() => (
            <ScenePage
             />
             )} />
        <Route exact path="/scenes/:id/edit" render={() => <SceneEditForm />} />
        {/* show scene post by department on postspage*/}
        <Route
            exact
            path="/departments"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`departments=${dept}&category=${category}`}
                dept={dept}
                category={category}
              />
            )}
        />
        {/* POSTS*/}
        <Route exact path="/posts/create" render={() => <PostCreateForm />} />
        {/* All posts*/}
        <Route
            exact
            path="/posts"
            render={() => (
              <PostsPage 
              message="No results found. Adjust the search keyword." 
              allposts
              />
            )}
          />
        {/* Posts for scene by dept and category*/}
        <Route
            exact
            path="/dept/category"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`scene=${sceneId}&departments=${dept}&category=${category}`}
                sceneId={sceneId}
                number={number}
                dept={dept}
                category={category}
              />
            )}
          />
          {/* all posts and by department */}
          <Route exact path="/findposts/departments" render={() => <FindPostsDepartments />} />
          {/* Feed posts*/}
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                feed
              />
            )}
          />
          {/* Archived posts*/}
          <Route
            exact
            path="/archived"
            render={() => (
              <PostsPage
                message="No results found. Please archive a post."
                filter={`archives__owner__profile=${profile_id}&ordering=-archives__created_at&`}
                archived
              />
            )}
          />
          {/* Liked posts*/}
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Please like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                liked
              />
            )}
          />
        {/* Edit posts*/}
        <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
        {/* Post page*/}
        <Route exact path="/posts/:id" render={() => <PostPage />} />
        {/* DEPARTMENTS*/}
        <Route exact path="/depts/general" render={() => <DeptsGeneral />} />
        <Route exact path="/department/posts/create" render={() => <DeptPostCreate />} />
        <Route exact path="/department/posts" 
            render={() => (
            <DeptPostsPage 
                filter={`departments=${deptGeneral}`}
                deptGeneral={deptGeneral}
            />)} />
        <Route exact path="/department/posts/:id/edit" render={() => <DeptPostEdit />} />
        <Route exact path="/department/posts/:id" render={() => <DeptPostPage />} />
        {/* Profiles*/}
        <Route exact path="/profiles" render={() => <ProfilesPage />} />
        <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
        <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
        <Route render={() => <PageNotFound />} />
        {/* </Routes> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;

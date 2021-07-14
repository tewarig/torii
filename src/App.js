import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  UserProfile,
  useUser,
} from '@clerk/clerk-react';
import { 
  BrowserRouter as Router, 
  Link, 
  Route, 
  Switch, 
  useHistory 
} from 'react-router-dom';
import Navbar from './Comp/Navbar';
import Home from './pages/Home';
import Error from "./pages/Error";
import Gitsearch from './pages/Gitsearch';
import AddOrg from './pages/AddOrg';
import AddEvent from './pages/AddEvent';
import AddProgram from './pages/AddProgram';
import Footer from './Comp/Footer';

// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  // console.log(clerkFrontendApi);
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <Navbar></Navbar>
        <Switch>
          {/* Public routes, accesible whether or not a user is signed in */}
          <Route path="/public" exact>
            <Home></Home>
          </Route>
          <Route path="/Organization" exact>
            <Gitsearch>
              
            </Gitsearch>
          </Route>
          <Route path="/sign-in/(.*)?">
            <SignIn routing="path" path="/sign-in" />
          </Route>
          <Route path="/sign-up/(.*)?">
            <SignUp routing="path" path="/sign-up" />
          </Route>


          {/* Private routes, accesible only if a user is signed in */}
          <PrivateRoute path="/private">
            <div>
              Reached the private route. <Link to="/">Return home.</Link>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/user/(.*)?">
            <UserProfile routing="path" path="/user" />
          </PrivateRoute>
          <PrivateRoute path="/addRepo">
            <AddOrg></AddOrg>

          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>
          <PrivateRoute path="/addProgram">
            <AddProgram></AddProgram>
          </PrivateRoute>

          {/* Catch-all route will render if no other route renders */}
          <Route path="/" exact >
           <Home></Home>
          </Route>
          <Route path="/">
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>
      </ClerkProviderWithNavigate>
    </Router>
  );
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/public">Public route</Link>
      </li>
      <li>
        <Link to="/private">Private route</Link>
      </li>
    </ul>
  );
}

function Greeting() {
  const { firstName } = useUser();
  // console.log({useUser})
  return <div>Hello, {firstName}!</div>;
}

function PrivateRoute(props) {
  // If the route matches but the user is not signed in, redirect to /sign-in
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function ClerkProviderWithNavigate({ children }) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => push(to)}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;
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
import OpenProgram from './pages/OpenProgram';
import OpenSourceEvent from './pages/OpenSourceEvent';
import {  useColorModeValue } from "@chakra-ui/react"
import Sign from './pages/Sign';
import SignU from './pages/SignUp';
import NewsLetter from  '../src/Comp/NewsLetter';





// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  // console.log(clerkFrontendApi);
  const  formBackground = useColorModeValue("gray.100","gray.700");

  return (
    <Router>
      <ClerkProviderWithNavigate>
        <Navbar></Navbar>
        <Switch>
          {/* Public routes, accesible whether or not a user is signed in */}
          <Route path="/public" exact>
            <Home></Home>
          </Route>
          <Route path="/OrganizationSearch" exact>
            <Gitsearch>
              
            </Gitsearch>
          </Route>
          <Route path="/OpenProgram" exact>
            <OpenProgram></OpenProgram>

          </Route>
          <Route path="/OpenSourceEvents">
            <OpenSourceEvent></OpenSourceEvent>
          </Route>


          <Route path="/sign-in/(.*)?">
         <Sign></Sign>
          </Route>
          <Route path="/sign-up/(.*)?">
         <SignU></SignU>
          </Route>
          <Route path="/newsletter">
          <NewsLetter></NewsLetter>
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
          <PrivateRoute path="/addOrgination">
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
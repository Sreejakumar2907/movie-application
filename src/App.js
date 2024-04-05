
import NavBar from "./Components/NavBar";
import { AuthProvider } from "./Context/authProvider";
// import { AuthProvider } from "./Components/AuthProvider";
function App() {
  return (
    <>
<AuthProvider>
<NavBar/>
</AuthProvider>
 
  
    </>
  );
}
export default App;

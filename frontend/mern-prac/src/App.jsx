import {Box ,Button, useColorModeValue} from "@chakra-ui/react";
import {Route,Routes} from 'react-router-dom';
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar"


function App() {
  

  return (
  <>
      <Box minH={"100vh"} bgGradient = {"linear(to-r,white,gray.400)"} width={"full"}>
        <Navbar/> 
        <Routes>
          <Route path = '/'element={<HomePage/>}/>
          <Route path = '/create'element={<CreatePage/>}/>
        </Routes>
        <Bottombar/>
      </Box>
      
  </>
    
  );
}

export default App;

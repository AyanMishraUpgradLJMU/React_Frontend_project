
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from './components/Home';


export default function App() {
 

    return (
      <Router>
          <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <ShoppingCartIcon />
                </IconButton>
                
                <Typography variant="h6"
                    component="div" sx={{ width: 1500 }}>
                    upGrad E-Shop
                </Typography>
           
                  <Button color="inherit" href="/Login">Login</Button>
               
                  <Button color="inherit" href="/Signup">Signup</Button>
                   
            </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Home" element={<Home />} />
        </Routes>
        

        </Router>
    );
}
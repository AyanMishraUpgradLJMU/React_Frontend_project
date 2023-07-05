import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import { useState } from "react";

import './Signup.css';
import './Footer.css';

import Footer from "./Footer";
import Login from "./Login";

async function signupUser(credentials) {
    return fetch('https://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Signup=()=>{

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await signupUser({
          username,
          password
        });
        if ('accessToken' in response) {
          swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
          .then((value) => {
            localStorage.setItem('accessToken', response['accessToken']);
            localStorage.setItem('user', JSON.stringify(response['user']));
            window.location.href = "./Login";
          });
        } else {
          swal("Failed", response.message, "error");
        }
      }

    const paperStyle={padding :100,height:'80vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#FF0000'}
    const btnstyle={margin:'8px 0'}
    const navigate = useNavigate();
    return(
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form className='input-form' noValidate onSubmit={handleSubmit}>
                <div className='first-input'>
                <TextField label='First Name' placeholder='First Name' fullWidth required variant='outlined'/>
                </div>
                <div className='second-input'>
                <TextField label='Last Name' placeholder='Last Name' fullWidth required variant='outlined'/>
                </div>
                <div className='third-input'>
                <TextField label='Email Address' placeholder='Email Address' fullWidth required variant='outlined'
                onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className='fourth-input'>
                <TextField label='Password' placeholder='Password' type='password' fullWidth required variant='outlined'
                onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='fifth-input'>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' fullWidth required variant='outlined'/>
                </div>
                <div className='sixth-input'>
                <TextField label='Contact Number' placeholder='Contact Number' fullWidth required variant='outlined'/>
                </div>
                <div className='signup-btn'>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={() => navigate(<Login />)}>Sign up</Button>
                </div>
                <Typography > Already have an account ?
                     <Link href="./Login" >
                        Sign In 
                </Link>
                </Typography>
                </form>
            </Paper>
            <Footer/>
        </Grid>
        
    )
}

export default Signup
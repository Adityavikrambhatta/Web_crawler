import React, {useEffect } from 'react';
import useStore from '../store';
import '../styles/_mainContent.scss';
import axios from 'axios'

const LoginSignUp = () => {
    const {login, email, password } = useStore()
    return(
        <div className='card-body'>
            <div className='card'>
                <div class="card-header">
                    <span> Login </span>
                    <div> Remember Password</div>
                </div>
                <div>
                    <input type="text" placeholder='Enter email' />
                </div>
                <div>
                    <input type="password" placeholder='Enter password' />
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;
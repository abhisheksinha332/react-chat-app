import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "db7d1ab2-6748-476e-bbb7-3dfe45c63415", 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        } catch (error) {
            seterror('Oops, You Entered Wrong credentials. Please try again ...')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Abhishek's Chat Application</h1>
                <form onSubmit= {handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />  
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />  
                  <div align = "center">
                      <button type="submit" className="button">
                          <span>Enter Chatroom</span>
                      </button>
                  </div>
                  <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )    

}



export default LoginForm;
import './WelcomePage.scss'
import logo from '../../assets/others/loginPage.png';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <main className='page-container'>
            <section>
                <div>
                    <img src={logo} alt="" />
                    <h2>Welcome to Agile3 Team <br />
                        Log in with your account to continue</h2>
                    <Link to='/login'>
                        <button className='login-btn'>Login</button>
                    </Link>
                    <button className='singUp-btn'>Sing Up</button>
                </div>
            </section>
        </main>
    );
};

export default WelcomePage;
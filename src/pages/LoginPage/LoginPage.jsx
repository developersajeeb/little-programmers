import './LoginPage.scss'
import logo from '../../assets/others/loginPage.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const info = { email, password };
        console.log(info);
        if (email.length > 0 && password.length > 0) {
            navigate('/home/group');
            Swal.fire({
                showConfirmButton: false,
                title: 'You have received a team invitation from the Agile3 Team',
                text: 'Something went wrong!',
                html: `<p className: "text-start">Join the Agile3 Team as a new team member</p>
                <div className='member-info'>
                <div>
                    <h4>Muhammad Julfikar Ali</h4>
                    <p>ui.jali@gmail.com</p>
                </div>
            </div>
                `,
                customClass: {
                    title: 'text-lg text-start',
                }
                
            })
        } else {
            console.log("Email and password are required.");
        }

    }

    return (
        <main className="login-container">
            <section>
                <img src={logo} alt="" />
                <h2 className=''>Welcome to <span>Back</span></h2>

                <form className='login-form' onSubmit={handleLogin}>
                    <input type="email" name="email" id="" placeholder='Email address' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <p>Forgot password?</p>
                    <button type='submit'>Continue</button>
                    <p>Don’t have an account? <span>Sign up</span></p>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male'); 
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newUser = {
            username,
            password,
            firstName,
            lastName,
            gender,
            email
        };

        try {
            const response = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
                credentials: 'include'
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User successfully created:', result);
                navigate('/login');
            } else {
                const errResult = await response.json();
                alert(`Sign up failed: ${errResult.message}`);
            }
        } catch (err) {
            console.error(`An error occurred`, err);
            alert("Connection error! Is your backend running?");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div id="signup-div">
            <form onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center', color: 'black' }}>SIGN UP</h1>
                
                <label className="signup-label">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="signup-input" /><br/>

                <label className="signup-label">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="signup-input" /><br/>

                <label className="signup-label">First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="signup-input" /><br/>

                <label className="signup-label">Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="signup-input" /><br/>

                <label className="signup-label">Gender:</label>
                <div style={{ display: 'flex', gap: '15px', color: 'white', marginBottom: '15px' }}>
                    <label>
                        <input type="radio" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} style={{color: 'black'}}/> Male
                    </label>
                    <label>
                        <input type="radio" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female
                    </label>
                </div>

                <label className="signup-label">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="signup-input" /><br/>

                <button id="signup-btn" type="submit" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Sign Up'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <p style={{ fontSize: '16px', color: 'red' }}>
                        Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
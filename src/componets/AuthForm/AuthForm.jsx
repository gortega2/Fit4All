import { useState } from "react";
import "./AuthForm.scss";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "", retypePassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.retypePassword) {
      setError("Passwords do not match!")
      return;
    }
    setError("");
    navigate("/");
  };

  return (
    <div className="auth-container">
        <div className="auth-card">
            <h2 className="auth-card__title">{isSignUp ? "Sign Up" : "Login"}</h2>
            <form className='auth-card__form' onSubmit={handleSubmit}>
                <label className="auth-card__label">
                    Username
                    <input type="text" value={formData.username} onChange={handleChange} placeholder="Enter username" className="auth-card__input" name="username"/>
                </label>

                <label className="auth-card__label">
                    Password
                    <input type="text" value={formData.password} onChange={handleChange} placeholder="Enter password" className="auth-card__input" name='password'/>
                </label>

                {isSignUp && (
                    <label className="auth-card__label">
                    Retype Password
                    <input type="text" value={formData.retypePassword} onChange={handleChange} placeholder="Retype your password" className="auth-card__input" name='retypePassword'/>
                </label>
                )}
                {error && <p className="auth-card__error-message">{error}</p>}
                <button type="submit" className="auth-card__button">
                    {!isSignUp ? "Login" : 'Sign Up'}
                </button>
            </form>
            <p className='auth-card__toggle-text'>
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button className="auth-card__toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? "Login" : "Sign Up"}
                </button>
            </p>
        </div>
    </div>
    
  );
}

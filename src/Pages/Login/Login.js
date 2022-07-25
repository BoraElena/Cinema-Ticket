import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Sing In</h2>
        <div className="login-content"></div>
        <div className="email">
          <label>Email address</label>
          <input
            type="email"
            className="input-email"
            placeholder="Email Address"
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input
            type="password"
            className="input-password"
            placeholder="Password"
            autoComplete=""
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

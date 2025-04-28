pages/login.js

export default function Login() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required style={{ margin: '10px', padding: '10px' }} /><br />
        <input type="password" placeholder="Senha" required style={{ margin: '10px', padding: '10px' }} /><br />
        <button type="submit" style={{ padding: '10px 20px' }}>Entrar</button>
      </form>
    </div>
  );
}
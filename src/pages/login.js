export default function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login</h1>
      <input type="text" placeholder="Email" style={{ padding: '10px', width: '250px', marginBottom: '10px' }} /><br />
      <input type="password" placeholder="Senha" style={{ padding: '10px', width: '250px', marginBottom: '10px' }} /><br />
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>Entrar</button>
    </div>
  );
}

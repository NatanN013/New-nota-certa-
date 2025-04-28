pages/register.js

export default function Register() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Registrar</h1>
      <form>
        <input type="text" placeholder="Nome Completo" required style={{ margin: '10px', padding: '10px' }} /><br />
        <input type="email" placeholder="Email" required style={{ margin: '10px', padding: '10px' }} /><br />
        <input type="password" placeholder="Senha" required style={{ margin: '10px', padding: '10px' }} /><br />
        <button type="submit" style={{ padding: '10px 20px' }}>Registrar</button>
      </form>
    </div>
  );
}
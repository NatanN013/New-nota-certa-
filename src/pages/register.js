export default function Register() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Criar Conta</h1>
      <input type="text" placeholder="Nome" style={{ padding: '10px', width: '250px', marginBottom: '10px' }} /><br />
      <input type="text" placeholder="Email" style={{ padding: '10px', width: '250px', marginBottom: '10px' }} /><br />
      <input type="password" placeholder="Senha" style={{ padding: '10px', width: '250px', marginBottom: '10px' }} /><br />
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>Registrar</button>
    </div>
  );
}

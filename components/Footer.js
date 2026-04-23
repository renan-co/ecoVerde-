export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <p>Projeto Eco Verde - Desenvolvimento Web II</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

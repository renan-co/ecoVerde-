import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ usuario }) {
  const router = useRouter()

  async function sair() {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <header className="topo">
      <div className="container navbar">
        <Link href="/" className="logo">🌱 Eco Verde</Link>
        <nav>
          <ul className="menu">
            <li>
              <Link href="/" className={router.pathname === '/' ? 'ativo' : ''}>
                Início
              </Link>
            </li>

            {!usuario && (
              <li>
                <Link href="/login" className={router.pathname === '/login' ? 'ativo' : ''}>
                  Login
                </Link>
              </li>
            )}

            {!usuario && (
              <li>
                <Link href="/cadastro" className={router.pathname === '/cadastro' ? 'ativo' : ''}>
                  Cadastro
                </Link>
              </li>
            )}

            <li>
              <Link href="/produtos" className={router.pathname === '/produtos' ? 'ativo' : ''}>
                Produtos
              </Link>
            </li>

            <li>
              <Link href="/carrinho" className={router.pathname === '/carrinho' ? 'ativo' : ''}>
                Carrinho
              </Link>
            </li>

            {usuario && (
              <li>
                <button onClick={sair} className="btn-menu-sair">
                  Sair ({usuario.nome.split(' ')[0]})
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

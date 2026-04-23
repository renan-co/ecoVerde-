import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home({ usuario }) {
  return (
    <Layout usuario={usuario}>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="selo">🌱 Fazenda Urbana Sustentável</p>
              <h2>Alimentos frescos, cultivados de forma ecológica no coração da cidade</h2>
              <p>
                A Eco Verde é uma fazenda urbana dedicada à produção sustentável de alimentos.
                Frutas, verduras e ervas frescas, sem agrotóxicos, direto da nossa fazenda para a sua mesa.
              </p>
              <div className="botoes">
                <Link href="/produtos" className="btn">Ver Produtos</Link>
                <Link href="/login" className="btn btn-secundario">Fazer login</Link>
              </div>
            </div>

            <div className="card destaque">
              <h3>Por que escolher a Eco Verde?</h3>
              <p>
                Alimentos cultivados localmente são mais frescos, nutritivos e contribuem
                para um planeta mais sustentável.
              </p>
              <ul className="lista-simples">
                <li>Frutas e verduras frescas toda semana</li>
                <li>Cultivo 100% sem agrotóxicos</li>
                <li>Entrega local, menos carbono no transporte</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="secao secao-fazenda">
          <div className="container">
            <div className="fazenda-top grid-2">
              <div className="fazenda-texto">
                <h2 className="titulo-fazenda-principal">Uma Fazenda Urbana</h2>
                <p>
                  A Eco Verde é uma fazenda urbana dedicada à produção sustentável de alimentos no
                  coração da cidade. Nosso objetivo é oferecer alimentos frescos, cultivados de forma
                  ecológica, enquanto promovemos uma conexão da comunidade com a natureza e com
                  práticas sustentáveis.
                </p>
              </div>
              <figure className="fazenda-figura">
                <img
                  src="/images/fazenda-urbana.jpg"
                  alt="Interior de fazenda vertical com alface cultivada sob luzes LED"
                  className="fazenda-img"
                  width={640}
                  height={400}
                />
              </figure>
            </div>

            <div className="fazenda-motivos">
              <h2 className="titulo-bloco-fazenda">Por que uma Fazenda Urbana?</h2>
              <p className="intro-fazenda">
                As fazendas urbanas são fundamentais nas cidades modernas. Aqui estão os principais
                motivos para implementar uma:
              </p>
              <div className="grid-2 grid-motivos">
                <article className="card card-motivo">
                  <h3>Produção local de alimentos</h3>
                  <p>Oferecem acesso a frutas e vegetais frescos.</p>
                </article>
                <article className="card card-motivo">
                  <h3>Educação e conscientização</h3>
                  <p>Conectam as pessoas com nutrição e natureza.</p>
                </article>
                <article className="card card-motivo">
                  <h3>Sustentabilidade</h3>
                  <p>Reduzem emissões de carbono ao diminuir longas distâncias no transporte.</p>
                </article>
                <article className="card card-motivo">
                  <h3>Melhoria da qualidade de vida</h3>
                  <p>Promovem ambientes mais verdes e convívio entre os moradores.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { getUsuario } = require('../lib/auth')
  const usuario = getUsuario(req)
  return { props: { usuario } }
}

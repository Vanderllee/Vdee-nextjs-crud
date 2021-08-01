import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
      `
    }>
      <Layout title="Cadastro simples">

        <span>Conteudo</span>
        
      </Layout>
    </div>
  )
}

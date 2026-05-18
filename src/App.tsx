import { Layout } from '@/components/Layout'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'

export default function App() {
  return (
    <Layout>
      <Home />
      <Services />
      <About />
      <Contact />
    </Layout>
  )
}

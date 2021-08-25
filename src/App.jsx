import Comments from './components/Comments'
import 'antd/dist/antd.css'
import './styles/index.scss'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <h1>Nature Scenery & Relaxing Music</h1>
      <iframe
        src='https://www.youtube.com/embed/BHACKCNDMW8'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen={true}></iframe>
      <Comments />
    </Layout>
  )
}

export default App

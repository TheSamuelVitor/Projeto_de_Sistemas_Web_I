//import './Home.css'
import { Link } from 'react-router-dom'
import Championships from "../components/Championships/Championships"

function Home() {
    return <Link to="/matches"><Championships /></Link>         
}

export default Home;
import Match from "../components/Match/Match";
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function Matches() {
    return (   
        <>
            <Link to="/" className="btn btn-outline-dark"><BiArrowBack /> Voltar</Link>    
            <div className="row">             
                <Match />
            </div>
        </>
    );
}

export default Matches;
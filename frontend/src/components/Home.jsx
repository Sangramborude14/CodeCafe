import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Home(){
    const navigate = useNavigate()
    function HomeButtons () {
        return (<>
       <div id='div1'>
         <Link to="/CreateBlogs"><button className='home-button'>Create New Blog</button>
        </Link><button className='home-button'>View My Blog</button>
        <Link to="/AllBlogs"><button className='home-button'>View All Blogs</button></Link> 
       </div>
        </>)
    }
    let isLoggedIn = true;
    return (
        <>
        <header>
            <h1 className='heading'onClick={() => navigate("/")}>Welcome to CodeCafe</h1>
        </header>
    <p className='home-p'><i>"a tea spilled is a cup filled"</i></p>

    <div>
        {isLoggedIn && <HomeButtons/>}       
    </div>
        </>
    )
}

export function Home(){
    function HomeButtons () {
        return (<>
        <a href="/blogs/create"><button>Create New Blog</button></a>
        <a href="/blogs/view_personal"><button>View My Blog</button></a>
        <a href="blogs/view_public"><button>View All Blogs</button></a> 
        </>)
    }
    let isLoggedIn = true;
    return (
        <>
        <header>
            <h1>Welcome to CodeCafe</h1>
        </header>
    <p><i>"a tea spilled is a cup filled"</i></p>

    <div>
        {isLoggedIn && <HomeButtons/>}       
    </div>
        </>
    )
}
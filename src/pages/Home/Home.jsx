import "./Home.scss";
import profile from "../../assets/profile-1.jpg";


const Home = () => {
  return (
    <div className="home">
        <div className="details">
            <span className="intro">Hello, I'm</span>
            <div className="name">
                <div>
                    <h1 className="txt">TA <br />RE</h1>
                </div>
                <h1 className="txt lg">K</h1>
                <div className="stack">
                    FULL-STACK <b>DEVELOPER</b>
                </div>
            </div>
        </div>

        <div className="profile-img">
            <img src={profile} alt="profile" />
        </div>
    </div>
  )
}

export default Home
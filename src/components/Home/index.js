// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home">
      <div className="text">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time .Clothes always have been a marker of the era and
          we are in a revolution .Your fashion makes you been seen and heard
          that way you are .so,celebrate the seasons new and exiciting fashion
          in your way .
        </p>
        <button className="btn">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="image"
      />
    </div>
  </div>
)

export default Home

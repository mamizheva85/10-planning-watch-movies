import { useState } from "react";
import { data } from "./data";
import arrowLeft from './arrow-left.jpg'
import arrowRight from './arrow-right.jpg'
import "./App.css";


function App () {

	const [movie, setMovie] = useState(0);
	const {id, name, range, image, year, country, type, description, link} = data[movie];

	const [seeMore, setSeeMore] = useState(false);
	const previousMovie =() => {
		setMovie((movie=> {
			movie--;
			if (movie < 0) {
				return data.length - 1;
			}
			return movie;
		}))
	}
	const nextMovie =() => {
		setMovie((movie=> {
			movie++;
			if(movie > data.length - 1) {
				movie = 0;
			}
			return movie;
		}))
	}

return(<div>
	<h1>{ data.length } фильмов, которые я планирую посмотреть</h1>

	<div className="wrapper">
		<div className="left-arrow">
		<button className="btn-left" onClick={ previousMovie }><img src ={arrowLeft} width="60" height="80" alt="arrow"/></button>
	</div>
	<div className="container">
		<h2>{id} - { name }</h2>
		<p><span>{ range }</span></p>
		<p><span>Год:</span> { year }</p>
		<p><span>Страна:</span> { country }</p>
		<p><span>Жанр:</span> { type }</p>
		<img src={ image } width ="230" height="350" alt="moviePicture"/>
	<div className="text">
		<p >{ seeMore ? description : description.substring(0,196) + "...." } <button className="see-more" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "свернуть": "развернуть"}</button></p>
	</div>
	
	<a className="btn" href={ link }>Смотреть</a>
	</div>
	<div className="right-arrow">
		<button className="btn-right" onClick ={ nextMovie }><img src ={arrowRight} width="60" height="80" alt="arrow"/></button>
	</div>
</div>

</div>)
}

export default App;
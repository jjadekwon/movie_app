import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    // mount되자마자 isLoading은 기본적으로 true
    isLoading: true,
    movie: []
  };

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies()
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 6000)
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading
           ? (<div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
           ) : (
             <div className="movies">
               {movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />))}
             </div>)
          }
      </section>
    )
  }
}




// class component
// 함수가 아니기 때문에 return 없음
// render method 사용
// class App extends React.Component {
//   // state == object
//   // component의 data를 넣을 공간, 바꾸고 싶은 data를 넣음
//   state = {
//     count: 0
//   }

//   add = () => {
//     // 바뀐 값으로 새 state 설정
//     // state를 refresh하고 render() 호출
//     //this.setState({count: this.state.count + 1});

//     // this.state 대신 current를 function 형식으로 사용 - 현재 state를 가져옴
//     this.setState(current => ({count: current.count + 1}));

//     // react는 render()를 refresh하지 않음
//     //this.state.count = 1;
//   };

//   minus = () => {
//     this.setState({count: this.state.count - 1});
//   };

//   // component가 렌더링된 후에 실행
//   componentDidMount() {

//   }

//   // componenet가 업데이트 된 후 (render후 실행)
//   componentDidUpdate() {

//   }

//   // react는 자동으로 모든 class component의 render()를 실행함
//   render() {
//     return (
//       <div>
//         {/* 꼭 this를 써야 함 */}
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   };
// }





// 함수형을 좀 더 권장하는 듯 - 단, state, setState는 못씀
// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name}/>
//     </div> 
//   );
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "http://aeriskitchen.com/wp-content/uploads/2019/03/Kimchi_Soy_Bean_Sprout_Soup_01-.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "samgiopsal",
//     image: "http://aeriskitchen.com/wp-content/uploads/2019/03/Kimchi_Soy_Bean_Sprout_Soup_01-.jpg",
//     rating: 4.7
//   }
// ];

// // Prop type 검사
// Food.propTypes = {
//   name: PropTypes.string.isRequired,  // only string
//   image: PropTypes.string,  // string or undefined
//   rating: PropTypes.number.isRequired
// }

// // function component
// function App() {
//   return (
//     <div>
//       {foodILike.map(food => (
//         <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}/>
//       ))}

//       {/* 함수로 따로 안빼고 위처럼 더 많이 쓰임
//       {foodILike.map(renderfood)} */}
//     </div>
//   );
// }

export default App;

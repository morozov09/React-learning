import { useState } from 'react';
import './App.css';
import Newpost from './Components/Newpost';
import Postlist from './Components/Postlist';

function App() {
  
  
  const [posts, setPosts] = useState([
      {id:1, tittle: 'Губашлёпчик', body: 'Desciption'},
      {id:2, tittle: 'Губашлёпчик', body: 'Desciption'},
      {id:3, tittle: 'Губашлёпчик', body: 'Desciption'},
  ])

  const [posts2, setPosts2] = useState([
    {id:1, tittle: 'Губашлёпчик', body: 'Desciption'},
    {id:2, tittle: 'Губашлёпчик', body: 'Desciption'},
    {id:3, tittle: 'Губашлёпчик', body: 'Desciption'},
])
  
  
  
  return (
    <div className="App">
      <Postlist posts={posts} tittle="Список губашлёпчиков №1" />
      <Postlist posts={posts2} tittle="Список Кузь лакомкиных №2" />
    </div>

  );
}

export default App;

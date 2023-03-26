import logo from './logo.svg';
import './App.css';

const book = {
  author: 'Chyngyz Aitmatov',
  title: 'Zhamilia',
  published: '1958',
  image: 'https://www.kino-teatr.ru/movie/posters/big/4/1814.jpg'
};

const books = [
  { id: 1, title: 'Blackberry', author: 'Sara Johns', isAvailable: true },
  { id: 2, title: 'Enriques Journey', author: 'Sonia Nazario', isAvailable: true },
  { id: 3, title: 'Open House', author: 'Patricia J. Williams', isAvailable: false},
];

function ZineRack() {
  const listZines = books.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'blue'
      }}
    >
      {zine.title}
      {zine.author}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

function Bookshelf () {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + 'cover'}
      />
      }
    </div>
  );
}


function MagicButton() {
  return (
    <div>
            <button>Magic Button</button>
    </div>
    
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">  
         <Bookshelf />  
         <ZineRack />  
         <MagicButton />   
      </header>
    </div>
  );
}

export default App;

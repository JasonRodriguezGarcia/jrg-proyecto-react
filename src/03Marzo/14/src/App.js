import logo from './logo.svg';
import './App.css';
import Bienvenido from './components/Bienvenido/Bienvenido';
import ProfileCard from './components/Bienvenido/ProfileCard';
import ContarClicks from './components/ContarClicks'
import Input from './components/Input';
import Elegible from './components/Elegible';

function App() {
  const nombre1 = "Manué";
  const edad1 = 25;
  const arrayLista = [
    {
      nombre: "Mark Dwain",
      edad: 42,
      bio: "Entusiasta de la tecnología con más de 20 años de experiencia en la industria. Le encanta hacer senderismo.",
      profileImage: "https://picsum.photos/200/300?random=2"
    }, 
    {
      nombre: "Pepe er Quillo",
      edad: 38,
      bio: "Er butanero que va de aquí para allá tira que tira para ver si llega a final de mes, que la cosa está mú achuchá ",
      profileImage: "https://picsum.photos/200/300?random=3"

    },
    {
      nombre: "Pepe er Quillo",
      edad: 38,
      bio: "Er butanero que va de aquí para allá tira que tira para ver si llega a final de mes, que la cosa está mú achuchá ",
      profileImage: "https://picsum.photos/200/300?random=4"

    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Elegible />
        <Input />
        <ContarClicks />


        {/* <Bienvenido nombre = "🤔🤔Tio camuñas ...🙂🙂" edad ={33} /> */}
        <Bienvenido nombre = {nombre1} edad ={edad1} />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <h1>IÑIGOrrrr...!!!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Iñigo!!
        </a>
      </header>
      {arrayLista.map((elemento, index) =>
        <ProfileCard key={index}
        nombre={elemento.nombre}
        edad={elemento.edad}
        bio={elemento.bio}
        profileImage={elemento.profileImage}
    />

      )}

      {/* <ProfileCard 
          nombre="Pepe er Quillo"
          edad={38}
          bio="Er butanero que va de aquí para allá tira que tira para ver si llega a final de mes, que la cosa está mú achuchá "
          profileImage="https://picsum.photos/200/300?random=3"
      />
      <ProfileCard 
          nombre="Pepe er Quillo"
          edad={38}
          bio="Er butanero que va de aquí para allá tira que tira para ver si llega a final de mes, que la cosa está mú achuchá "
          profileImage="https://picsum.photos/200/300?random=4"
      /> */}
    </div>
  );
}

export default App;

import './App.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header titulo="Galería de imagenes con React" />
      <Card
       imagen="https://www.nationalgeographic.com.es/medio/2023/03/17/cenzontle-pajaro_0b18132a_230317114903_800x800.jpg"
        nombre="Pajaro carpintero"
        tipo="Carroñera"/>
        <Card
       imagen="https://t1.ea.ltmcdn.com/es/posts/1/3/2/la_alimentacion_del_oso_polar_21231_orig.jpg"
        nombre="Oso Polar"
        tipo="Carnivoro"/>
        <Card
       imagen="https://images.theconversation.com/files/308306/original/file-20191230-11924-1742m89.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        nombre="Cebra"
        tipo="Herbivoro"/>
        <Footer texto="Todos los derechos reservados" />
    </div>
  );
}

export default App;

import SocialButton from './SocialButton';
import Formulario from './Formulario';
import './Registro.css';

export default function Registro() {
  return (
    <>
      <div id="main">
        <div>
          <h1>Crear una cuenta</h1>
          <SocialButton icono="fa fa-facebook fa-3x"></SocialButton>
          <SocialButton icono="fa fa-github fa-3x"></SocialButton>
          <SocialButton icono="fa fa-linkedin fa-3x"></SocialButton>
          <p>O usa tu email para registrarte</p>
        </div>
        <Formulario></Formulario>
      </div>
    </>
  );
}

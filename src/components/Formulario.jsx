import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
export default function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pasword, setPasword] = useState('');
  const [pasword2, setPasword2] = useState('');

  const validarForm = function () {
    if (
      name.length > 0 &&
      email.length > 0 &&
      email.indexOf('@') > -1 &&
      pasword.length > 0 &&
      pasword2.length > 0 &&
      pasword == pasword2
    ) {
      alert('Sesion Iniciada');
    } else if (name.length == 0) {
      alert('Ingrese el nombre');
    } else if (email.length == 0) {
      alert('Ingresa el correo');
    } else if (email.indexOf('@') == -1) {
      alert('Ingresa un correo valido');
    } else if (pasword == pasword2) {
      alert('Las contraseñas no coinciden');
    }
  };
  const handelName = function (e) {
    e.preventDefault;
    setName(e.target.value);
    console.log(name);
  };
  const handelEmail = function (e) {
    e.preventDefault;
    setEmail(e.target.value);
    console.log(email);
  };

  const handelPassword = function (e) {
    e.preventDefault;
    setPasword(e.target.value);
    console.log(pasword);
  };

  const handelPassword2 = function (e) {
    e.preventDefault;
    setPasword2(e.target.value);
    console.log(pasword2);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Nombre"
            onChange={(e) => {
              handelName(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="tuEmail@ejemplo.com"
            onChange={(e) => {
              handelEmail(e);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              handelPassword(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Repite Contraseña"
            onChange={(e) => {
              handelPassword2(e);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            validarForm();
          }}
        >
          Regitrarse
        </Button>
      </Form>
    </>
  );
}

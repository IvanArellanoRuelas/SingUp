/* eslint-disable react/prop-types */
import './SocialButton.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function SocialButton({ icono }) {
  return (
    <>
      <button>
        <i className={icono}></i>
      </button>
    </>
  );
}

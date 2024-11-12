import "./formlogin.css";

export default function FormLogin() {
  return (
    <div className="loginContainer">
      <div className="logoContainer"></div>
      <div className="formContainer">
        <label htmlFor="">Iniciar sesión</label>
        <form action="">
          <div className="form-control">
            <input
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Ingrese nombre de usuario"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="buttonSubmit">
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

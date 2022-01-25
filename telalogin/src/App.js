function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login"> 
          <form className="login-form">
            <span className="login-title">Faça o Login</span>
            <div className="wrap-input">
              <input type="email"/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input type="password"/>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-btn">Login</button>
            </div>
            <div className="text-dowm">
                <span className="txt1">Não possui conta?</span>

                <a className="txt2" href="#">Crir conta...</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

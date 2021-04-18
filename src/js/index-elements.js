import {userAuthentication} from './auth.js'

//Hero

const isAuth = () => {
  hero.innerHTML = `
    <h1 class="title guest">¡Bienvenido a Bright Academy!</h1>
  `;
}
const isGuest = () => {
  hero.innerHTML = `
    <article class="hero-presentation" id="hero">
    <h1 class="title">¡Bienvenido a Bright Academy!</h1>
    <div class="hero-buttons">
        <span class="tag"> <a href="login.html">Inicia Sesión</a></span> o
        <span class="tag"> <a href="signup.html">Registrate</a> </span> <br>     
        para seguir aprendiendo
    </div>
    </article>
  `;
}

userAuthentication(isAuth, isGuest);
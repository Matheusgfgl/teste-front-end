import axios from 'axios';
import 'babel-polyfill';

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', async event => {
  event.preventDefault();

  const email = document.getElementById('email').value

  const password = document.getElementById('senha').value
  
  const user = {
    email,
    password
  };
  console.log(user)
  if(email === ''){
    alert('Digite um valor para o email')
  }else{
    
      try {
        const res =  await axios.post('https://reqres.in/api/login', user);
        
        
        console.log(`Login realizado`, res);
        console.log(`Login realizado`, res.data.token);
        sessionStorage.setItem('token', res.data.token)
    
     
      } catch (e) {
        alert("Usuario ou senha invalidos");
      }
      var data = sessionStorage.getItem('token');
      if (data){
        window.location.href= "/lista_usuarios.html";
      }
       
    };

  });
//getData.addEventListener('click', handleLogin);

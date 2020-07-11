import axios from 'axios';
import 'babel-polyfill';

   
const getUsers = async () => {
  try 
  {
    const res = await axios.get('https://reqres.in/api/users')
    .then(response =>{ 
        setdata(response.data)   
  })  
   
  } catch (e) {
    console.error(e);
  }
};

  function setdata(data)
  {
    const users = data.data;
    
    const container = document.getElementById('users')
    const ul = document.querySelector('ul');
    
      if (Array.isArray(users) && users.length > 0) {
        users.map(todo => {
          ul.appendChild(createLi(todo));
          });

      } else if (users) 
      {
        ul.appendChild(createLi(users));
      }
      const span = document.createElement('span');
      const lblp = document.createTextNode('Mostrando ' + data.per_page + ' de ' + data.total);
      span.appendChild(lblp); 
      container.appendChild(span); 
  }

  const createLi = user => {
    const li = document.createElement('li');
    const p = document.createElement('p');

    const lblp = document.createTextNode(user.email);
    p.appendChild(lblp); 

    const foto = document.createElement('img');
    foto.src = user.avatar

    const btn = document.createElement('Button');
    const icone = document.createElement('img');
    
    icone.src = "http://127.0.0.1:5501/assets/icon.svg";
    btn.appendChild(icone);

    const h2 = document.createElement('h2');
    const lbl = document.createTextNode(user.first_name + ' ' + user.last_name );        
      
    btn.appendChild(icone); 
    h2.appendChild(lbl);  
    
    li.appendChild(foto)
    li.appendChild(h2)
    li.appendChild(p)
    li.appendChild(btn)
    return li;
  };


getUsers();
let i=0;
function add(){
  i+=1;
  let cl = document.createElement('div');
  cl.classList.add('yes');
  cl.classList.add('container');
  cl.classList.add('d-flex'); 
  cl.classList.add('flex-row'); 
  cl.style="overflow:auto;";


  cl.classList.add('justify-content-between'); 
  cl.classList.add('align-middle');
  let nombre = 'lista'+i;
  console.log(nombre);
  cl.id=nombre;
  cl.classList.add('bg-warning');
  cl.classList.add('p-2');
  cl.classList.add('m-2');
  cl.classList.add('rounded');
  document.getElementById('contenedor').appendChild(cl);

  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let but2 = document.createElement('input');
  let but = document.createElement('button');
  but.classList.add('btn');
  but.classList.add('btn-danger');

  but.onclick = function(){
    document.getElementById(nombre).remove();
  }
  but.textContent="X";
p.classList.add('col-3');
but2.classList.add('col-3');
p2.classList.add('col-3');


  but2.type="checkbox";
  but2.style="width:20px;height:20px";
const d = new Date();
  p2.textContent = d.toLocaleString();  
  p.style="font-size:20px;font-weight:bold;";
  p.textContent='• '+document.getElementById('tarea').value;

  cl.appendChild(p);
  cl.appendChild(p2);
  cl.appendChild(but2);
  cl.appendChild(but);
  
  
}

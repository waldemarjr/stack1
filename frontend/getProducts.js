const url = "http://10.20.30.120:8000/product/read.php";

axios.get(url).then((response) => {


  var data = [];
  data = response.data;

  const tbody = document.getElementById("tbody1");


  for (let register = 0; register < data.length; register++) {
    let tr = document.createElement("tr");
    tr.id = `row_${register}`; 

    tbody.appendChild(tr);

    let codigo = document.createElement("td");
    let nome = document.createElement("td");
    let preco = document.createElement("td");


    codigo.id = `codigo_${register}`;
    nome.id = `nome_${register}`;
    preco.id = `preco_${register}`;

    tr.appendChild(codigo);
    tr.appendChild(nome);
    tr.appendChild(preco);

      
    document.getElementById(`codigo_${register}`).innerHTML = data[register].codigo;
    document.getElementById(`nome_${register}`).innerHTML = data[register].nome;
    document.getElementById(`preco_${register}`).innerHTML = data[register].preco;
 
  }
  

});
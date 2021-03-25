function addItem() {

	//Adicionar um novo item ao topo.

  var newItem = document.createElement("li");
  var inputValue = document.getElementById("meu_input").value;
	var textnode = document.createTextNode(inputValue);
	newItem.appendChild(textnode);

	//Botão close.

	var newClose = document.createElement("input");
	newClose.type = "button";
	newClose.className = "close";
	newItem.appendChild(newClose);


	//Condição para não deixar o input em branco.

	if (inputValue === '') {

		alert("Digite alguma tarefa!");

	} else {

		var list = document.getElementById("minha_lista");

		list.insertBefore(newItem, list.childNodes[0]);

	}

	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var item = this.parentElement;
      item.style.display = "none";
    }
  }

}

// Deletar atraves do botão de close.

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var item = this.parentElement;
    item.style.display = "none";
  }
}

//Add um check list para completar a tarefa.

var checkedItem = document.querySelector("ul");
checkedItem.addEventListener('click', function(evento) {
  if (evento.target.tagName === 'LI') {
    evento.target.classList.toggle('checked');
  }
}, false);


// Apagar todos os concluídos.

	function deleteDone() {

	let checkedList =	document.querySelectorAll(".checked");

	for(var i = 0; i < checkedList.length; i++) {

    checkedList[i].remove();
  }

}	

// Deletar todos os itens da lista.

function deleteAll() {

	let del =	document.querySelectorAll("li");

	for(var i = 0; i < del.length; i++) {

    del[i].remove();
  }

}

/*

let arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++) {
	console.log(i)
}

*/
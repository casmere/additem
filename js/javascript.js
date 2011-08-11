// Week 2 - VFW
// Term 1108
// Scott C. Shamka

function getItems(){
	if(localStorage.getItem('name')){
		var name = localStorage.getItem('appName');
		var category = localStorage.getItem('appCategory');
		var quantity = localStorage.getItem('appQuantity');
		var priority = localStorage.getItem('appPriority');
		var date = localStorage.getItem('appDate');
		var notes = localStorage.getItem('appNotes');
		
		var data = [
		
			name,
			category,
			quantity,
			priority,
			date,
			notes
		
		];
		
		alert("Something", data);
	
	}
}

function storeItems(id){
	var name = document.getElementsByName('name').value;
	var category = document.getElementsByName('category').value;
	var quantity= document.getElementsByName('quantity').value;
	var priority = document.getElementsByName('priority').value;
	var date = document.getElementsByName('date').value;
	var notes = document.getElementsByName('notes').value;
	
	localStorage.setItem('appName', name);
	localStorage.setItem('appCategory', category);
	localStorage.setItem('appQuantity', quantity);
	localStorage.setItem('appPriority', priority);
	localStorage.setItem('appDate', date);
	localStorage.setItem('appNotes', notes);
}

function clearLocal(){
	localStorage.clear();
	return false;
}
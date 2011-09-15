// Week 2 - VFW
// Term 1108
// Scott C. Shamka

var clearLink 	= document.getElementById('clear');
var anchorTags 	= clearLink.getElementsByTagName('a');

// Execute several functions after the DOM is completely loaded.
window.onload = startUp();

function startUp(){
	addOption_list(); // Populates the Select Category List
	document.getElementById('category').focus();
}

function formSubmit(){
	saveData();
}

function getItems(){
	if(localStorage.getItem('appName')){
		var name 		= localStorage.getItem('appName');
		var category 	= localStorage.getItem('appCategory');
		var quantity 	= localStorage.getItem('appQuantity');
		var date 		= localStorage.getItem('appDate');
		var notes 		= localStorage.getItem('appNotes');
		
		var data = [
			
			category,		
			name,
			quantity,
			date,
			notes
		
		];
	
	showData(data);
		
	} else {
	
		var name 	= 'enter your name';
		var date 	= 'date';
		var notes 	= 'enter any extra notes here!';
		
		document.getElementById('appName') = name;
		document.getElementById('appDate') = date;
		document.getElementById('appNotes') = notes;
	}
}

function showData(data){

	
		alert(data);
		
		document.getElementById('form1').style.display = "none";
	
		var showData = document.getElementById('showData');
			showData.style.display = "block";
			
		var dataList = document.getElementById('dataList'); // Accessing the unordered list Node
		
			 						
		// Loop through the data array and list each piece of the array into an array element.
		for(var i = 0;i < data.length;i++){
		
			var newListElement = document.createElement('li'); 	// Creating a "floating" list element
				dataList.appendChild(newListElement); 			// Attaching the list element to the UL node
			
			var listData = document.createTextNode(data[i]);
				newListElement.appendChild(listData);
			
		};
}

function saveData(id){
	var name 		= document.getElementById('name').value;
	var category 	= document.getElementById('category').value;
	var quantity	= document.getElementById('quantity').value;
	var date 		= document.getElementById('date').value;
	var notes	 	= document.getElementById('notes').value;
	
	localStorage.setItem('appName', name);
	localStorage.setItem('appCategory', category);
	localStorage.setItem('appQuantity', quantity);
	localStorage.setItem('appDate', date);
	localStorage.setItem('appNotes', notes);
	
	}

function clearLocal(){
	localStorage.clear();
	return false;
}

function addOption(selectbox,text,value)
{
	var optn = document.createElement("OPTION");
		optn.text = text;
		optn.value = value;
		selectbox.options.add(optn);
}

function addOption_list(selectbox){
	var forList = new Array("Home","School","Work","Other");
		for (var i=0; i < forList.length;++i){

	addOption(document.addItem.category_list, forList[i], forList[i]);
}
}
		
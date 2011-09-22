// Week 2 - VFW
// Term 1108
// Scott C. Shamka

window.onload = startUp();

function startUp(){
	/* prepareEventHandlers(); */
	addOption_list(); // Populates the Select Category List
	document.getElementById('category').focus(); // Focuses on the Category list
}

function formSubmit(){
	saveData();
}

function prepareEventHandlers(){

	document.getElementById("form1").onSubmit = function () {
		saveData();
/*
	// Prevent form from submitting (validating form)
		if (document.getElementById("event").value == "") {
			document.getElementById("event").value = prompt("Please enter an event title.", "");
			
			// Stop form
			return false;
		} else {
			return true;
		}
	}
*/
}

function saveData(){
	
	var category 	= document.getElementById("category").value;
	var event 		= document.getElementById("event").value;
	var date  		= document.getElementById("date").value;
	var notes 		= document.getElementById("notes").value;
	
	localStorage.setItem('appCategory', category);
	localStorage.setItem('appEvent', event);
	localStorage.setItem('appDate', date);
	localStorage.setItem('appNotes', notes);
	
	getData();
	
}

function getData(){
		var category 	= localStorage.getItem("appCategory");
		var event 		= localStorage.getItem("appEvent");
		var date 		= localStorage.getItem("appDate");
		var notes 		= localStorage.getItem("appNotes");
	
		var data = [
		
			category,
			event,
			date,
			notes
	
		];
		
		showData(data);
	
		
}

function showData(data){

		var showData	= document.getElementById('showData'); 
		var form1 		= document.getElementById('form1');

		
		form1.style.display = "none";
	
		showData.style.display = "block";
			
		var dataList = document.getElementById('dataList'); 	// Accessing the unordered list Node
		
			 						
		// Loop through the data array and list each piece of the array into an array element.
		for(var i = 0;i < data.length;i++){
		
			var newListElement = document.createElement('li'); 	// Creating a "floating" list element
				dataList.appendChild(newListElement); 			// Attaching the list element to the UL node
			
			var listData = document.createTextNode(data[i]);	// Creates a text node for each piece of the array
				newListElement.appendChild(listData);			// Attaches the text node to the li element
			
		};
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

function clearLocal(){
	localStorage.clear();
	return false;
	
	var showData	= document.getElementById('showData'); 
	var form1 		= document.getElementById('form1');

	
	showData.style.display 	= "none";
	form1.style.display 	= "block";
}
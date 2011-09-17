// Week 2 - VFW
// Term 1108
// Scott C. Shamka

var clearLink 	= document.getElementById('clear');
var anchorTags 	= clearLink.getElementsByTagName('a');

// Execute several functions after the DOM is completely loaded.
window.onload = startUp();

function startUp(){
	addOption_list(); // Populates the Select Category List
	document.getElementById('category').focus(); // Focuses on the Category list
}

function formSubmit(){
	validateForm();
}

function getItems(){
		var event 		= localStorage.getItem('appEvent');
		var category 	= localStorage.getItem('appCategory');
		var date 		= localStorage.getItem('appDate');
		var notes 		= localStorage.getItem('appNotes');
		
		var data = [
			
			category,		
			event,
			quantity,
			date,
			notes
		
		];
		
		showData(data);
}

function showData(data){
		
		document.getElementById('form1').style.display = "none";
	
		var showData = document.getElementById('showData'); 
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

function saveData(id){
	var event 		= document.getElementById('event').value;
	var category 	= document.getElementById('category').value;
	var date 		= document.getElementById('date').value;
	var notes	 	= document.getElementById('notes').value;
	
	localStorage.setItem('appEvent', event);
	localStorage.setItem('appCategory', category);
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

function validateForm(){
	var getEvent = document.forms[0]['event'].value;
	if (getEvent == ""){
		document.getElementById('event').style.border = "1px solid red";
		var encourage = prompt("Event Title, please.", "");
		if(encourage != null && encourage != ""){
			document.forms[0]['event'].value = encourage;
		}
		return false;
	} else {
		document.getElementById('event').style.border = "1px solid #ccc";
	}
	
			alert("Form Submitted!");

}
		
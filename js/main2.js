// Week 2 - VFW
// Term 1108
// Scott C. Shamka

window.onload = startUp();


var db = getLocalStorage() || dispError('Local Storage not supported.');

function startUp(){
	addOption_list();
}

document.getElementById("form1").onSubmit = function () {
	dbGo();
}

function dispError( message ) {
    errorMessage = '<p class="error">' + message + '</p>';
    haveError = true;
}

function getLocalStorage() {
	try {
       if( !! window.localStorage ) return window.localStorage;
           } catch(e) {
              return undefined;
           }
}

function dbGo() {
	if(errorMessage) return;
    dispResults();
}

/*
function dispResults(){
	 if(errorMessage) {
		element('results').innerHTML = errorMessage;
        return;
     }
	
	var category	= document.getElementById("category").value;
	var event 		= document.getElementById("event").value;
	var date 		= document.getElementById("date").value;
	var notes 		= document.getElementById("notes").value;
	
	
	db.setItem("appCategory", category);
	db.setItem("appEvent", event);
	db.setItem("appDate", date);
	db.setItem("appNotes", notes);
	
	var getCategory = db.getItem("appCategory");
	var getEvent = db.getItem("appEvent");
	var getDate = db.getItem("appDate");
	var getNotes = db.getItem("appNotes");
	
	var data = [
	
			getCategory,
			getEvent,
			getDate,
			getNotes,
	];
	
	
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
*/

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
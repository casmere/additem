// Week 2 - VFW
// Term 1108
// Scott C. Shamka

window.onLoad = startUp();

function startUp(){
	addOption_list(); // Populates the Select Category List
	document.getElementById('category').focus(); // Focuses on the Category list
}

function formSubmit(){
	saveData();
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

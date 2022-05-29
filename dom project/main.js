var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//FORM SUBMIT EVENT//
form.addEventListener('submit', addItem);

//DELETE EVENT
itemList.addEventListener('click' , removeItem);

//FILTER ELEMENT
filter.addEventListener('keyup' , filterItems);

//ADD ITEM
function addItem(e){
    e.preventDefault();
   

//GET INPUT VALUE
var newItem = document.getElementById('item').value;

//CREATE NEW LI ELEMENT
var li = document.createElement('li');

//ADD CLASS
li.className = 'list-group-item';

//ADD TEXTNODE WITH INPUT VALUE
li.appendChild(document.createTextNode(newItem));

//craete delete element
var deleteBtn = document.createElement('button');

//ADD CLASSES TO DEL BUTTON
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//APPENDTEXTNODE
deleteBtn.appendChild(document.createTextNode('X'));

//APPEND BUTTON TO LI
li.appendChild(deleteBtn)

//APPEND LI TO LISTs
itemList.appendChild(li);
}

//REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

 //FILTER ITEMS
 function filterItems(e){
     //convert to lowercase
     var text = e.target.value.toLowerCase();
     
    //GETLIST
    var items = itemList.getElementsByTagName('li');
   
    // //CONVERT TO AN ARRAY
    Array.from(items).forEach(function(item){
         var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display = 'block';
       }else{
           item.style.display = 'none';
       }

     })
}
// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'hello';
// console.log(document.forms[10]);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'goodbie';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>hi</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// //GIVES ERROR
// items.style.backgroundColor = '#f4f4f4';

// for(var i=0 ; i < items.length ; i++){
// items[i].style.backgroundColor = '#f4f4f4';
//}

//GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// //GIVES ERROR
// items.style.backgroundColor = '#f4f4f4';


// for(var i=0 ; i < li.length ; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';


// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';

// //QUERYSELECTORALL
// // var titles = document.querySelectorAll('.title');
// // console.log(titles);
// // titles[0].textContent = 'hello';

// // var odd = document.querySelectorAll('li:nth-child(odd)');

// // var even = document.querySelectorAll('li:nth-child(even)');

// // for(var i = 0; i < odd.length; i++)
// // {
// // odd[i].style.backgroundColor = '#f4f4f4';
// // even[i].style.backgroundColor = '#cccccc';
// // }

// //TRAVERSING THE DOM

// var itemList = document.querySelector('#items');
// // //PARENTNODE PROPERTY
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode);

// // //PARENTELEMENT PROPERTY

// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement.parentElement);

// //CHILDNODES
// //console.log(itemList.childNodes);

// //CHILDREN NODES
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FIRSTCHILD
// console.log(itemList.firstChild);
// //FIRSTELEMENTCHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='hello 1';

// //LASTCHILD
// console.log(itemList.lastChild);
// //LASTELEMENTCHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='hello 4';

// //NEXTSIBILING
// console.log(itemList.nextSibiling);
// //NEXTELEMENTSIBILING
// console.log(itemList.lastElementChild);


// //PREVIOUS SIBILING
// console.log(itemList.previousSibiling);
// //PREVIOUSELEMENTSIBILING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// CREATE ELEMENT

// CREATE DIV
//  var newDiv = document.createElement('div');
//  console.log(newDiv);

// //ADD CLASS NAME
// newDiv.className = 'hello';

// //ADD ID
// newDiv.id = 'hello 1';

// // ADD ATTRIBUTE
// newDiv.setAttribute('title','hello div');

// //CREATE TEXTNODE
// var newDivText = document.createTextNode('hello world');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

/////PART 3

//EVENTS(MOUSE EVENTS ,KEYBOARD EVENTS)

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
    //console.log('button clicked');
    //document.getElementById('header-title').textContent = 'changed';
    //document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    //console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey);

    var button = document.getElementById('button');

    var box = document.getElementById('box');
    


    // button.addEventListener('click' , runEvent);
    // button.addEventListener('dblclick' , runEvent);
    // button.addEventListener('mousedown' , runEvent);
    // button.addEventListener('mouseup' , runEvent);


    //box.addEventListener('mouseenter' , runEvent);
    //box.addEventListener('mouseleave', runEvent);
    //box.addEventListener('mouseover' , runEvent);
    //box.addEventListener('mouseout', runEvent);
    //box.addEventListener('mousemove', runEvent);
}

 var itemInput = document.querySelector('input[type="text"]');
 var form = document.querySelector('form');
 
 var select = document.querySelector('select');

//  itemInput.addEventListener('keydown', runEvent);
//  itemInput.addEventListener('keyup', runEvent);
//  itemInput.addEventListener('keypress', runEvent);
//  itemInput.addEventListener('focus', runEvent); 
//  itemInput.addEventListener('blur', runEvent);
//  itemInput.addEventListener('cut', runEvent); 
//  itemInput.addEventListener('paste', runEvent);
//  itemInput.addEventListener('input', runEvent);
// select.addEventListener('change' , runEvent);
// select.addEventListener('input' , runEvent);
form.addEventListener('submit' ,runEvent);
 

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3> '+e.target.value+'</h3>';       
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';

   
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40 )";
}
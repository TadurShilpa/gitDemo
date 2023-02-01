var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter =document.getElementById('filter');

//Form submit event 
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);
//Add item
function addItem(e)
{
    e.preventDefault();

   // console.log(1);
   
//Get input value
var newItem = document.getElementById('item').value;
var newItem1 = document.getElementById('item1').value;
//Create new li element
var li = document.createElement('li');
//var li1= document.createElement('li1');
//Add Class
li.className ='list-group-item';
//li1.className='list-group-item';

//Add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(newItem1));

//Create del button to element
var deleteBtn = document.createElement('button');
//add edit button
var editBtn = document.createElement('edit');

//Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Add classes to edit button
editBtn.className = 'btn btn-danger btn-sm float-right mr-2 edit';

//Append text Node
deleteBtn.appendChild(document.createTextNode('X'));

//Append button to li
li.appendChild(deleteBtn);

//Append li to list
itemList.appendChild(li);


//Append text Node to edit 
editBtn.appendChild(document.createTextNode('edit'));

//Append button to li edit
li.appendChild(editBtn);

//Append li to list edit
itemList.appendChild(li);
}

//Remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


//Filter Items
function filterItems(e)
{
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);
//Get lis
var items =itemList.getElementsByTagName('li');

//Convert to an array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description =item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1
     || description.toLowerCase().indexOf(text) != -1)
     {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  

}
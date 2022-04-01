const theme = document.getElementById('theme');
const newitem = document.getElementById('additem');
const todo = document.querySelector('.items ul');
const itemsleft = document.querySelector('.lastrow span');
const list_length = document.querySelectorAll("#ul li").length;




theme.addEventListener('click', () => {
    if (document.getElementById('theme').checked){
        document.querySelector('body').className="dark-theme";
    }
    else{
        document.querySelector('body').className="light-theme";
    }

    
    
});


newitem.addEventListener('keypress', (e) => {
    
    if (e.charCode === 13 && newitem.value.length>0) {
        addnewitem(newitem.value);
        newitem.value='';
    }
    update_list_length();

});

function addnewitem(text) {
    const element = document.createElement('li');

    element.classList.add('row');
    element.innerHTML= `
        <label class="item">
        <input type="checkbox" id="todo" name="todo" >
        <label for="todo"></label>
        <span class="text">${text}</span>
        </label>
        <input type="button" class="remove" id="${get_fresh_ID()}" name="remove" onClick="remove_item(this.id)">
        <label for="remove"></label>`;
    

    todo.append(element)
    itemsleft.inner
}

function remove_item(clicked_id){
    console.log(clicked_id)
    if (clicked_id == 'removeall'){
        listall = document.getElementById('listss')
        listall.innerHTML=''
    }
    else {
    itemtoremove = document.getElementById(clicked_id);
    itemtoremove.parentElement.remove();
    }
    update_list_length();

}

function removeitem(item){
    item.remove();
}

/*todo.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        removeitem(e.target.parentElement);
    }
})*/

function update_list_length(){
    itemsleft.textContent = document.getElementById("listss").getElementsByTagName("li").length; 
}


function delete_task(){
    e.target.parentElement.remove();

}

function get_fresh_ID(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
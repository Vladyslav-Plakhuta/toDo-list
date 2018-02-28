function toDoList() {
    this._taskList = tasklist;
    this._nextId = nextId;
}
toDoList.prototype.createTask = function(){
        this.isFilled = true;
}
window.onload = function(){
    document.getElementById('append').addEventListener('click', function(){
        var inpt = document.getElementById('input').value
        if(inpt.length!==0){
            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var checkbox = '<input type="checkbox" class="chb" value="no">';
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = checkbox;
            cell2.innerHTML = inpt;
        }
    });
    document.getElementById('done').addEventListener('click', function(){
        var elements = document.getElementsByClassName("chb");
        for (var j = 0; j < elements.length; j++) {
            if (elements[j].checked === true) {
                document.getElementById("myTable").rows[j].style.textDecoration = 'line-through';
            }
        }
    });
    document.getElementById('undone').addEventListener('click', function(){
        var elements = document.getElementsByClassName("chb");
        for (var j = 0; j < elements.length; j++) {
            if (elements[j].checked === true) {
                document.getElementById("myTable").rows[j].style.textDecoration = 'none';
            }
        }
    });
    document.getElementById('remove').addEventListener('click', function(){
        var elements = document.getElementsByClassName("chb");
        for (var j = 0; j < elements.length; j++) {
            if (elements[j].checked === true) {
                document.getElementById("myTable").deleteRow(j);
            }
        }
    });
    document.getElementById('remove all').addEventListener('click', function(){
        var tb = document.getElementById('myTable');
        tb.innerHTML = "";
    });
}



function List() {
    this.isFilled = false;
}
var taskListLength = []; 
List.prototype.isFilled = function(){
    if(taskListLength>=10){
        this.isFilled = true;
    }
}
window.onload = function(){
    var index = 0;
    document.getElementById('append').addEventListener('click', function(){
        index++;
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var checkbox = '<input type="checkbox" class="chb" value="no">';
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = checkbox;
        cell2.innerHTML = "task";
        cell3.innerHTML = index;
        
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
        index = 0;
    });
}



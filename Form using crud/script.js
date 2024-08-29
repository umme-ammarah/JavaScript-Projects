document.getElementById("student-form").addEventListener('submit',function(e){
    e.preventDefault()
    var name = document.getElementById("name").value
    var Lname = document.getElementById("last_name").value
    var age = document.getElementById("age").value
    var ClassName = document.getElementById("classNo").value


    var table = document.getElementById("student-table").querySelector("tbody")
    var newRow = table.insertRow();
     var td0= newRow.insertCell(0)
     var td1= newRow.insertCell(1)
     var td2= newRow.insertCell(2)
     var td3= newRow.insertCell(3)
     var td4= newRow.insertCell(4)
   

   td0.innerHTML=name;
   td1.innerHTML=Lname;
   td2.innerHTML=age;
   td3.innerHTML=ClassName;
   td4.innerHTML='<button  onclick="edit(this)"><i class="fa-solid fa-user-pen" style="color: #74C0FC;"></i></button> <button onclick="deleteRow(this)"><i class="fa-solid fa-trash" style="color: #dd3308;"></i></button>'

  document.getElementById("student-form").reset()
})

function deleteRow(button){
  var tr = button.parentNode.parentNode
  tr.remove();
  
}

function edit(button){
    var tr = button.parentNode.parentNode;
    editIndex=tr.rowIndex-1;
    var name = tr.cells[0].innerHTML
    var Lname = tr.cells[1].innerHTML   
    var age = tr.cells[2].innerHTML
    var ClassName= tr.cells[3].innerHTML
    
    document.getElementById("edit-name").value=name;
    document.getElementById("edit-last_name").value=Lname;
    document.getElementById("edit-age").value=age;
    document.getElementById("edit-classNo").value=ClassName;

  document.getElementById("edit-form").classList.remove("d-none");
  document.getElementById("student-form").classList.add("d-none");


}
document.getElementById("edit-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var edit_name = document.getElementById("edit-name").value
    var edit_Lname = document.getElementById("edit-last_name").value
    var edit_age = document.getElementById("edit-age").value
    var edit_ClassName = document.getElementById("edit-classNo").value

    var table = document.getElementById("student-table").querySelector("tbody");
  var tr= table.rows[editIndex];
  tr.cells[0].innerHTML=edit_name;
  tr.cells[1].innerHTML=edit_Lname;
  tr.cells[2].innerHTML=edit_age;
  tr.cells[3].innerHTML=edit_ClassName;
document.getElementById("edit-form").classList.add("d-none");
document.getElementById("student-form").classList.remove("d-none");

 

});

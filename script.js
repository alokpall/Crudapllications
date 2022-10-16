var selectedRow=null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);

    }
    reserForm();


}


//retreve the data
function readFormData(){
    var formData = {};
    formData["StudentName"] = document.getElementById("StudentName").value;
    formData["Section"] = document.getElementById("Section").value;
    formData["Branch"] = document.getElementById("Branch").value;
    formData["RollNumber"] = document.getElementById("RollNumber").value;
    return formData;
 
    




}
// insert the data

function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.StudentName;

    var cell2 =newRow.insertCell(1);
         cell2.innerHTML = data.Section;

    var cell3 =newRow.insertCell(2);
        cell3.innerHTML = data.Branch;

    var cell4 =newRow.insertCell(3);
        cell4.innerHTML = data.RollNumber;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML= `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
             

}

//Edit the Data

function onEdit(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById('StudentName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Section').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Branch').value = selectedRow.cells[2].innerHTML;
    document.getElementById('RollNumber').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.StudentName;
    selectedRow.cells[1].innerHTML = formData.Section;
    selectedRow.cells[2].innerHTML = formData.Branch;
    selectedRow.cells[3].innerHTML = formData.RollNumber;

}

// Delete the Data

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    reserForm();
}

//Reset the Data


function reserForm(){
    document.getElementById('StudentName').value = '';
    document.getElementById('Section').value = '';
    document.getElementById('Branch').value = '';
    document.getElementById('RollNumber').value = '';
}
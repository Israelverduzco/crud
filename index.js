var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//Retener los datos
function readFormData(){
    var formData = {};
    formData["proveedor"] = document.getElementById("proveedor").value;
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insertar el dato
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.proveedor;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.productCode;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.product;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.qty;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.perPrice;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onModif(this)'>Modificar</button> <button onClick='onDelete(this)'>Eliminar</button>`
}

//Editar los datos
function onModif(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('proveedor').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productCode').value = selectedRow.cells[1].innerHTML;
    document.getElementById('product').value = selectedRow.cells[2].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[3].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.proveedor;
    selectedRow.cells[1].innerHTML = formData.productCode;
    selectedRow.cells[2].innerHTML = formData.product;
    selectedRow.cells[3].innerHTML = formData.qty;
    selectedRow.cells[4].innerHTML = formData.perPrice;
}

//Eliminar los datos
function onDelete(td){
    if(confirm('¿Esta seguro de eliminar?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Restablecer los datos
 function resetForm(){
  document.getElementById('proveedor').value = '';
  document.getElementById('productCode').value = '';
  document.getElementById('product').value = '';
  document.getElementById('qty').value = '';
  document.getElementById('perPrice').value = '';
 }

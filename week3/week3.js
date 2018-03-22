document.getElementById('btSave').onclick=function(){
  
    LastName=document.getElementById('ln').value;
    FirstName=document.getElementById('fn').value;
    PhoneNumber=document.getElementById('pn').value;
//각각의 값을 받음
    

    table = document.getElementById('mytable');

    tr=document.createElement("tr");
    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");
    td4=document.createElement("td");

    
    
    td1.innerText = LastName;
    td2.innerText = FirstName;
    td3.innerText = PhoneNumber;
    td4.innerHTML = "<input type='button'  value='delete' onClick='removeRow(this);'>";
    // innerhtml 은 javascript 에서 html 태그 가능하게함

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    

    table.appendChild(tr);
}
function removeRow(a){ 
    var o=a.parentNode.parentNode.rowIndex;
     //parentnode 모체 반환  rowindex가로줄전체

    document.getElementById('mytable').deleteRow(o);
}
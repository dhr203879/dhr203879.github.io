var datainfor = new Array();
document.getElementById('btSave').onclick=function(){
  
    LastName=document.getElementById('ln').value;
    FirstName=document.getElementById('fn').value;
    PhoneNumber=document.getElementById('pn').value;
//각각의 값을 받음
    var p = new Object();
    p.LastName    = LastName;
    p.FirstName   = FirstName;
    p.PhoneNumber = PhoneNumber;
    datainfor.push(p);
    var JDI = JSON.stringify(datainfor);
    updateTable(p);
    
}
function updateTable(p) {
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

    document.getElementById('mytable').deleteRow(o)
}

function tablesort(n){
        var table,  rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    
        table  = document.getElementById("mytable");
        switching = true;
       
         dir = "asc"; 
       
          while (switching) {
           switching = false; 
           rows =  table.getElementsByTagName("tr"); 
           //rows를 유사배열로만듬
         
           for (i = 1; i < (rows.length - 1); i++) {
       
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i + 1].getElementsByTagName("td")[n];
    
             if (dir  == "asc") {
       
                if (x.innerHTML.toLowerCase()  > y.innerHTML.toLowerCase()) {
       
                  shouldSwitch= true;
                  break;
                }
              } 
              else if (dir == "desc") {
       
                if (x.innerHTML.toLowerCase()  < y.innerHTML.toLowerCase()) {
       
    
                  shouldSwitch= true;
                  break;
       
               }
              }
           }
       
           if (shouldSwitch) {
       
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              switchcount  ++; 
       
           } 
                else {
       
                  if (switchcount == 0 && dir == "asc") {
                      dir = "desc";
                      switching = true;
       
              }
           }
         }
       }

function ajax(){

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
    
        if(this.readyState==4 && this.status==200){
           var response=JSON.parse(this.responseText);
           var list=[];   // empty array  
           for(var i=0;i<response.length;i++){ 
               let obj=response[i];

            // Creating row and its elements 
               var row=document.createElement('tr');
               var id=document.createElement('td');
               var title=document.createElement('td');
               var output=document.createElement('td');
            // let completed=document.createElement('td');
               output.innerHTML=`<td> <input type="checkbox" class="checkzz"></td>`; 
               id.innerHTML=obj.id;
               title.innerHTML=obj.title;
            // completed.innerHTML=obj.completed;
           

            // appending elements to html table
               row.appendChild(id);
               row.appendChild(title);
               row.appendChild(output);
            // row.appendChild(completed);
               table.appendChild(row);
              

            //  making completed true statement checkboxes disabled and checked
               if(response[i].completed==true){ 
                list.push(row);
                $(list).find('input[type="checkbox"]').attr('disabled', true);
                $(list).find('input[type="checkbox"]').attr('checked', true); 
                $(list).css("background","#F0F0F0");
               }
               
            }
            

        // creating a new promise and alert when 5 checkboxes are checked
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        var check = [];
        return new Promise(function (resolve,reject) {
        checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
        check = 
        Array.from(checkboxes)   //   checkboxes to an array
        .filter(function(i){     
           return i.checked;    //   filtered to remove unchecked checkboxes
        })  
        if(check.length==95){
        resolve(alert("Congrats. 5 Tasks have been Successfully Completed"));
            }
          });
         });
       });

      }
    
    }
 
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
   //  
  ajax();
    
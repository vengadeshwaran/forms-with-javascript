
const btn = document.getElementById('bttn');
btn.addEventListener('click', (event) => {
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var adrs  = document.getElementById("address").value;
    var pcode = document.getElementById("pincode").value;
    
    //Option Select Box
    var selectBox = document.querySelector("#gender").value;
    //Check Box
    let checkboxes = document.querySelectorAll('input[name="food"]:checked');
    var stat  = document.getElementById("state").value;
    var cntry = document.getElementById("country").value;

    //values added depends on button with check box
    console.log(fname, lname, adrs,pcode,selectBox,stat,cntry);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
        console.log(checkbox.value);

        //values stored table
        var tableElement = document.getElementById("tabl");
        var trRow = tableElement.insertRow();
        var tdCell0 = trRow.insertCell();
        tdCell0.innerText = fname;
        var tdCell1 = trRow.insertCell();
        tdCell1.innerText = lname;
        var tdCell2 = trRow.insertCell();
        tdCell2.innerText = adrs;
        var tdCell3 = trRow.insertCell();
        tdCell3.innerText = pcode;
        var tdCell4 = trRow.insertCell();
        tdCell4.innerText = selectBox;
        var tdCell5 = trRow.insertCell();
        tdCell5.innerText = checkbox.value;
        var tdCell6 = trRow.insertCell();
        tdCell6.innerText = stat;
        var tdCell7 = trRow.insertCell();
        tdCell7.innerText = cntry;
    
        //Clear All Value after upload data to table
        document.getElementById("firstname").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("address").value = "";
        document.getElementById("pincode").value = "";
        document.getElementById("state").value = "";
        document.getElementById("country").value = "";
    
        //Option Select Box
        document.querySelector("#gender").value = "";
        choosefood.value = "";
    });
    alert(values);
}); 

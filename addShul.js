

async function saveShulData () {

    let shul={};

    shul.name = document.getElementById("shulName").value;
    shul.address = document.getElementById("shulAddress").value;
    shul.nusach = document.querySelector("input[name='nusach']:checked").value;
    shul.shacharit = document.getElementById("shacharitH").value + ":" + document.getElementById("shacharitM").value  ;
    shul.mincha = document.getElementById("minchaH").value + ":" + document.getElementById("minchaM").value;
    shul.maariv = document.getElementById("maarivH").value + ":" + document.getElementById("maarivM").value

     var shulArray = [];
     var shulData = await getJsonFromServer ();
     if (Array.isArray(shulData.record)) shulArray=shulData.record
     else shulArray.push(shulData.record);
        
     shulArray.push(shul);

    updateJsonToServer(shulArray);
    //windows.location.href ("index.html")
}



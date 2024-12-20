

async function updateShulData () {

    var shulQuery = new URLSearchParams(window.location.search);
    var shulNum =shulQuery.get('shul');

    let shul={};

    shul.name = document.getElementById("shulName").value;
    shul.address = document.getElementById("shulAddress").value;
    shul.nusach = document.querySelector("input[name='nusach']:checked").value;
    shul.shacharit = document.getElementById("shacharitH").value + ":" + document.getElementById("shacharitM").value  ;
    shul.mincha = document.getElementById("minchaH").value + ":" + document.getElementById("minchaM").value;
    shul.maariv = document.getElementById("maarivH").value + ":" + document.getElementById("maarivM").value

     var shulArray = [];
     var shulData = await getJsonFromServer ();
     shulArray=shulData.record;
     
     shulArray.splice (shulNum,1,shul);
     
    await updateJsonToServer(shulArray);
    window.open ("index.html", "_self");
}

async function getShulData() {
    
    var shulQuery = new URLSearchParams(window.location.search);
    var shulNum =shulQuery.get('shul');
    
    var shulArray = [];
     var shulsData = await getJsonFromServer ();
     if (Array.isArray(shulsData.record)) shulArray=shulsData.record

     var shulData=shulArray[shulNum];
     
     document.getElementById("shulName").value = shulData.name;
     document.getElementById("shulAddress").value = shulData.address;

    document.getElementById(shulData.nusach).checked=true;

     const shachrit = shulData.shacharit.split(":");
     document.getElementById("shacharitH").value = shachrit[0];
     document.getElementById("shacharitM").value = shachrit[1];

     const mincha = shulData.mincha.split(":");
     document.getElementById("minchaH").value = mincha[0];
     document.getElementById("minchaM").value = mincha[1];

     const maariv = shulData.maariv.split(":");
     document.getElementById("maarivH").value = maariv[0];
     document.getElementById("maarivM").value = maariv[1];
}

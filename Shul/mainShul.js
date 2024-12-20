async function loadData () {
    const res = await getJsonFromServer();
    const shulArray = res.record;

    for (var i=0; i<shulArray.length ; i++ ){
        shulData = shulArray [i];
        document.getElementById("shulTable").innerHTML += "<tr id='newLine" + i +"'></tr>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.name + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.address + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.nusach + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.shacharit + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.mincha + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td>" + shulData.maariv + "</td>"
        document.getElementById("newLine"+i).innerHTML += "<td><img src='Edit.jpg' style='height:30px; width:30px' onclick ='editShul (" + i + ")' ></td>"
        document.getElementById("newLine"+i).innerHTML += "<td><img src='Delete.jpg' style='height:50px; width:100px' onclick ='deleteShul (" + i + ")' ></td>"
    }
}

async function deleteShul (j) {
    const res = await getJsonFromServer();
    const shulArray = res.record;

    shulArray.splice (j,1);
    await updateJsonToServer(shulArray);

    location.reload ();

}

 function editShul (s){

    window.open ("editShul.html?shul="+s,"_self")
}

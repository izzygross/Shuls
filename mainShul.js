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
    }
}

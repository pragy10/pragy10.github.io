const patients=[
    {pid: 1, name:"Alen", age:39},
    {pid: 2, name:"Deena", age:47},
    {pid: 3, name:"Diana", age:21},
    {pid: 4, name:"Jack", age:54},
    {pid: 5, name: "Jain", age:23},
    {pid: 6, name: "Kelvin", age:61},
    {pid: 7, name:"Louis", age:69},
    {pid: 8, name:"Rex", age:49}
];

function sortDesc(patients){
    let res = patients.sort((a,b)=>b.age-a.age);
    return res
}

function pidPresent(patients,id){
    let x = false;
    for(let i=0;i<patients.length;i++){
        if(patients[i].pid==id){
            x = true;
        }
    }

    if(x){
        return "Patient ID "+id+" is present";
    }else{
        return "Patient ID "+id+" not present";
    }
}

function filter(patients,min,max){
    let arr = [];
    for(let i=0;i<patients.length;i++){
        if(patients[i].age>=min && patients[i].age<=max){
            arr.push(patients[i]);
        }
    }

    return arr;
}

function display(){
    const pidInput = parseInt(document.getElementById("pidInput").value);
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    document.getElementById("Sorted").getElementsByTagName("tbody")[0].innerHTML = "";
    document.getElementById("Present").textContent = "";
    document.getElementById("Filter").getElementsByTagName("tbody")[0].innerHTML = "";

    const sorted = sortDesc(patients);
    const sortedTable = document.getElementById("Sorted").getElementsByTagName("tbody")[0];
    sorted.forEach(patient => {
        const row = sortedTable.insertRow();
        row.insertCell().textContent = patient.pid;
        row.insertCell().textContent = patient.name;
        row.insertCell().textContent = patient.age;
    });

    const present = pidPresent(patients, pidInput);
    document.getElementById("Present").textContent = present ? `Patient ID ${pidInput} is present.` : `Patient ID ${pidInput} is not present.`;

    if(!isNaN(min)&&!isNaN(max)){
        const filtered = filter(patients,min,max);
        const filterTable = document.getElementById("Filter").getElementsByTagName("tbody")[0];
        filtered.forEach(patient => {
            const row = filterTable.insertRow();
            row.insertCell().textContent = patient.pid;
            row.insertCell().textContent = patient.name;
            row.insertCell().textContent = patient.age;
        });
    }else{
        document.getElementById("Filter").getElementsByTagName("tbody")[0].innerHTML = "<tr><td colspan='3'>Please enter ages properly.</td></tr>";
    }

}
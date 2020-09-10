function compOutput(){
    const people = [
        {name: "Glen", luckyNumber: 84},
        {name: "Lisa", luckyNumber: 21},
        {name: "Paul", luckyNumber: 56},
        {name: "Helen", luckyNumber: 77},
        {name: "Jake", luckyNumber: 14},
        {name: "Jeevan", luckyNumber: 93},
        {name: "Kyle", luckyNumber: 49},
        {name: "Yusuf", luckyNumber: 80},
        {name: "Joe", luckyNumber: 19},
	    {name: "Avi", luckyNumber: 35},
    ]
    
    //console.log(people.length); //= 10

    const randomPerson = people[Math.floor(Math.random() * people.length)];
    var x = document.getElementById("compOutput");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }

    document.getElementById("compOutputName").innerHTML = randomPerson.name + "<br>";
    document.getElementById("compOutputText").innerHTML = "Your lucky number was: " + randomPerson.luckyNumber;
} 

compOutput();


var namee,profileImage,gender,department,day,month,year,notes,salary;
var dataDisplay;
function submit() {
    namee = document.getElementById("text").value;

    var ele = document.getElementsByName('profile img');
          
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            profileImage=ele[i].value
        }
    }


    var gen = document.getElementsByName('gender');

    for(i = 0; i < gen.length; i++) {
        if(gen[i].checked){
            gender=gen[i].value
        }
    }

    var dep = document.getElementsByName('department');
    deps=[]
    for(i = 0; i < dep.length; i++) {

        if(dep[i].checked){
            department=dep[i].value
            deps.push(department)   
        }
    }
    
    day = document.querySelector('#day').value;
    month = document.querySelector('#month').value;   
    year = document.querySelector('#year').value;

    notes = document.getElementById('note').value;

    salary = document.querySelector('#salary').value;



   /* dataDisplay = {
        "name" : namee,
        "profileImg" : profileImage,
        "gender" : gender,
        "department" : department,
        "day" : day,
        "month" : month,
        "year" : year,
        "notes" : notes,
        "salary" : salary
    }
    

    console.log(dataDisplay);
   */
};

$(document).ready(function () {
    
    $("#Save").click(function () {

        console.log(namee)
        var person = new Object();
        person.name = namee;
        person.profileImg = profileImage;
        person.gender = gender;
        person.department = department;
        person.day = day;
        person.month = month;
        person.year = year;
        person.notes = notes;
        person.salary = salary;
        $.ajax({
            //url: 'http://localhost:3413/api/person',
            url:'http://localhost:3000/data',
            type: 'POST',
            dataType: 'json',
            data: person,
            success: function (data, textStatus, xhr) {
                console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(person);
                console.log('Error in Operation');
            }
        });
    });
});



/*
$("#Save").click(function () {
    $.ajax({
        url: 'http://localhost:3000/data',
        type: 'PUT',
        dataType: 'json',
        data: dataDisplay,
        success: function (data, textStatus, xhr) {
            console.log(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });
});


*/





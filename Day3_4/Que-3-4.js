let lovable = [{
    name: "Manisha",
    age: "21",
    country: "India",
    Hobbies: ['code', 'love', 'sing']
}, {
    name: "Sahul",
    age: "24",
    country: "India",
    Hobbies: ['teach', 'love', 'comedy']
}, {
    name: "Tanvi",
    age: "20",
    country: "Indonesia",
    Hobbies: ['talk', 'love', 'cartoon']
}, {
    name: "Pooja",
    age: "22",
    country: "Japan",
    Hobbies: ['baby', 'love', 'crying']
}];

function display(lovable) {
    lovable.forEach(element => {
        console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
    });
}

function op_1() {
    for (let i = 0; i < lovable.length; i++) {
        if (lovable[i].age < 30) {
            const element = lovable[i];
            console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
        }
    }
}

function op_2() {
    for (let i = 0; i < lovable.length; i++) {
        if (lovable[i].country == "India") {
            const element = lovable[i];
            console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
        }
    }
}
display(lovable);
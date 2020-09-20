window.onload=function(){
 let buses = [];
 if(localStorage.getItem("buses")==null){
 let stringbuses=JSON.stringify(buses);
 console.log(stringbuses);
 localStorage.setItem("buses", buses);
 }
};
function display(bus_data=undefined) {
 let resbuses;
 let samplearray='';
 if(bus_data==undefined){
 resbuses=JSON.parse(localStorage.getItem("buses"));
 }
 else{
 resbuses = bus_data;
 }

 resbuses.forEach(function(element, index) {
 let presetrow = `
 <tr>
 <td>${index+1}</td>
 <td>${element.name}</td>
 <td>${element.source}</td>
 <td>${element.destination}</td>
 <td>${element.number}</td>
 <td>${element.passengerCapacity}</td>
 <td><button onclick="delete_ele(${index})" class="del_btn">delete</button>
 </td>
 </tr>`;
 samplearray+=(presetrow);


 });

 console.log(typeof(resbuses));
 document.getElementById('tablerows').innerHTML = samplearray;
}
function insert(e) {
 e.preventDefault()
 let bus = {};
 let ins_name = document.getElementById("ins-name").value;
 let ins_source = document.getElementById("ins-source").value;
 let ins_dest = document.getElementById("ins-dest").value;
 let ins_number = document.getElementById("ins-number").value;
 let ins_passcap = document.getElementById("ins-passcap").value;
 bus.name = ins_name;
 bus.source=ins_source;
 bus.destination=ins_dest;
 bus.number=ins_number;
 bus.passengerCapacity=ins_passcap;
 let retbus=JSON.parse(localStorage.getItem("buses"));
 retbus.push(bus);
 strrtbuses=JSON.stringify(retbus);
 localStorage.setItem("buses",strrtbuses);
let retbus1 = JSON.parse(localStorage.getItem("buses"));
 display(retbus1);

 return false;
}
display();
function search() {
 let ser_ele = document.getElementById("searching").value;
 let arrbus= JSON.parse(localStorage.getItem("buses"));
 let bus_arr = arrbus.filter(function (element) {
 if (element.source.indexOf(ser_ele) != -1) {
 return element.source.indexOf(ser_ele) != -1;
 }
 else if (element.destination.indexOf(ser_ele) != -1) {
 return element.destination.indexOf(ser_ele) != -1;
 };
 })
 display(bus_arr);
}
function delete_ele(index){
 let rtbuses1 = JSON.parse(localStorage.getItem("buses"));
 rtbuses1.splice(index, 1);
 display(rtbuses1);
 localStorage.setItem("buses", JSON.stringify(rtbuses1));
}
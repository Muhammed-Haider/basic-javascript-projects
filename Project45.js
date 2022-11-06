var name="Haider";
console.log("How are you "+ name+ ""+"?");
const name1= "aLi";
let uppercase=name1.toUpperCase();
let lowercase=name1.toLowerCase();
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
//This program is made to achieve titlecase

  console.log(name1[0].toUpperCase()+""+name1.slice(1).toLowerCase());
  
//Haider 10/22/2022 This program is made to reveal my favourite quote.
 var quote=`Imam Ali(a.s) said"Your half of the beauty comes from the way you speak"`;
console.log(quote);
 var famous_person="Imam Ali(a.s)";
var quote2=famous_person+" "+"said"+" "+`"Your half of the beauty comes from the way you speak"`;
console.log(quote2);
var nameofperson= "Asfan\nyaa\tr";
console.log(nameofperson);
var nameofperson=("Asfandyaar");
console.log(nameofperson);
var multiplication=4*2;
var division=16/2;
var subtraction=16-8;
var addition=4+4;
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(addition);
 console.log(4+4);
 console.log(32/4);
 console.log(16-8);
 console.log(4*2);
 const favouritenumber=14;
 let favouritenumberprint="My favourite number is "+favouritenumber;
 console.log(favouritenumberprint);
 let arrayfriends=["Musa","Zahid","Hassan","Ali"];
 arrayfriends[0];
 arrayfriends[1];
 arrayfriends[2];
 arrayfriends[3];
 console.log( arrayfriends[0]);
 console.log( arrayfriends[1]);
 console.log( arrayfriends[2]);
 console.log( arrayfriends[3]);
 let arraymsg=" where are you?";
 console.log(arrayfriends[0]+arraymsg);
 console.log(arrayfriends[1]+arraymsg);
 console.log(arrayfriends[2]+arraymsg);
 console.log(arrayfriends[3]+arraymsg);
 let arraytransport=["bike","car","bicycle","bus","boat"];
 console.log("I would like to ride a "+ " " + arraytransport[0]);
 console.log("I would like to travel in a "+ " "+arraytransport[1]);
 console.log(arraytransport[2]+" "+"is good for health" );
 console.log("We will go on trip with"+" "+arraytransport[3]);
 console.log(arraytransport+" "+"is to travel through sea");
 let guestlist=["Ali","Ahmed","Abdullah"];
 console.log(guestlist);
let invitation="Sorry we have only invited two people for dinner  ";
let sorryinvite="Sorry you are not invited";    
/*onsole.log(invitation+guestlist[0]);
console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);*/
console.log( invitation);
guestlist.splice(1,1,"Amir");
guestlist.pop();
console.log(guestlist);
console.log(guestlist[0]+ " you are invited for dinner.");
console.log(guestlist[1]+ "you are invited for dinner");
guestlist.pop();
guestlist.pop();
console.log(guestlist);

 let favlocations =["Italy","Maldives","Sweden","Finland","Denmark"];
console.log(favlocations);
favlocations.sort();
console.log(favlocations);
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);
let length1=(guestlist.length);
console.log(length1);

let mountains=["chenab","jhelum","ravi","setluj"];

//This all is that was removed in 15
/*console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);
console.log("I found a bigger table"+" "+guestlist);
guestlist.unshift("Ahmed");
guestlist.splice(3,0,"Asim");
//Apppend not done write now working on it.
let invitation2= "We are very excited to invite you to our dinner party ";
console.log(invitation2+guestlist[0]);
console.log(invitation2+guestlist[1]);
console.log(invitation2+guestlist[2]);
console.log(invitation2+guestlist[3]);
console.log("I")*/
//After 20 start from starting from here

let obj1={ country:"Paistan",currency:"Ruppee",population:"220 million"};
console.log(obj1);
let akif='BMW';
console.log("Is 'BMW'==akif ?I predict its true");
console.log( 'BMW'=='akif');
let comp='Hxy';
console.log("If 'Hxy'==Hxy?I predict its true");
console.log('Hxy'=='Hxy');
let comp1='123';
console.log("If '123'== 321?I predict its false");
console.log('123'=='321');
let comp2='123';
console.log("If '123'== 321?I predict its false");
console.log('123'==321);
let comp3='123';
console.log("If '123'== 123?I predict its False");
console.log('123'==123);
let comp4=123;
console.log("If '123'== 123?I predict its True");
console.log(123==123);
let com5="aramco";
console.log(`"Is "aramco"=='Aramco'?I predict its false` );
console.log("aramco"=='Aramco');
let com6="aramco";
console.log(`"Is "aramco"=='aramco'?I predict its True` );
console.log("aramco"=='aramco');
let comp7=1+2;
console.log("Is 1+2==1+1+1? I predict its True");
console.log(1+2==1+1+1);
//Ex24 Conditional Test
 let comparison= 'Hash';
 console.log("'Hash'='hash'?");
 console.log('Hash'=='hash');
 console.log("'Hash'!='hash'");
 console.log('Hash'!='hash');
 let comparison1='sport'
 console.log("'sport'='sports'");
 console.log('sport'=='sports');
 let comparison2=12;
 console.log("12==13");
 console.log("12!=13");
 console.log(12!=13);
 console.log("12>=13");
 console.log(12>=13);
 console.log("12>13");
 console.log(12>13);
 console.log("12<13");
 console.log(12>13);
 console.log("12<=13");
 console.log(12<=13);

 let coperator=13>12 && 5>3;
 console.log(coperator);
 let coperator2=13<=12 || 1>0;
 console.log(coperator2);

 let unknownarray=["bat","ball","wicket","helmet"];
 unknownarray.includes("bat");
 console.log(unknownarray.includes("bat"));
 console.log(unknownarray.includes("bank"));
 //Q#25
 let alien_colour='Green';
 if(alien_colour =='Green'){
console.log("Player just earned 5 points")}
else{
console.log("You earned 10 points");
};
alien_colour='Green';
 if(alien_colour =='Yellow'|| alien_colour=='Red'){
console.log("Player just earned 10 points")}
else{

};
//Ex#26
let alien_colour1='Green'
if(alien_colour1=='Green')
{
  console.log("You earned 5 points for shooting the alien")
}else  {
console.log("Player just earned 10 points ")
}

if(alien_colour1!='Green')
{
  console.log("You earned 10 points for shooting the alien")
}else  {
console.log("Player just earned 5 points ")
}

//EX#27
if(alien_colour=='Green'){
  console.log("You earned 5 points")
}else if(alien_colour=='Yellow'){
  console.log("Player just earned 10 points")
}else if (alien_colour=='Red'){
  console.log("Player just earned 15 points")
};

//Ex#28
let personage=2
if(personage==2){
  console.log("This person is Baby")
}else if(personage>2&&personage<4)
{
  console.log("That person is a Toddler")
}
else if (personage>4&&personage<13){
  console.log("This person is a kid")
}
else if (personage>13&&personage<20){
  console.log("This person is a Toddler")
}
else if (personage>20&&personage<65){
  console.log("This person is an Adult")
}else{
  console.log("This person is an elder")
};

//Ex29 
let favourite_fruits=['apple','banana','grapes'];
if(favourite_fruits.includes('apple')){
console.log("You really like bananas")
}if (favourite_fruits.includes('banana')){
  console.log("You really like bananas")
}
if(favourite_fruits.includes('mango')){

}
if(favourite_fruits.includes('orange')){

}
if(favourite_fruits.includes('grapes')){
  console.log("You really like grapes")
}
//Ex 30 
let user_names=['user_ali','iam072','admin','syedshahmir','gfxmentor'];
for(let i=0;i<5;i++){
if('admin'==user_names,[i]){
  console.log("Hello admin would you like to see a status report?")
}if(user_names=='user_ali',[i]){
  console.log('Hello user_ali thank you for logging in again')
} if(user_names=='iam072',[i]){
  console.log("Hello iam072 thank you for logging in again")
} if(user_names=='syedshahmir',[i]){
  console.log("Hello syedshahmir thank you for logging in again")
} if(user_names=='gfxmentor',[i]){
  console.log("Hello gfxmentor thank you for logging in again")
}
}

//Ex31
let xyz=[];
console.log("We need to find some users");
user_names.slice(0,4);
console.log("Users Found");

//Ex32
let current_users=['muhammad1','haider2','ali3','hassan4','hussain5'];
let new_users=['ateeq6','atif','haider2','sadiq7','ali3'];
for( let a=0;a<5;a++){
for(let b=0;b<5;b++){
if(current_users[a]==new_users[b]){
  console.log("The person will need to enter a new username.")
}else if( current_users[a]!=new_users[b]){
  console.log("Username is available")
}
}
}

//EX 33
let ordinalnumb=[1,2,3,4,5,6,7,8,9];
for(let z=0;z<10;z++){
  if (1==ordinalnumb[z]){
    console.log("1ST")
  } if (2==ordinalnumb[z]){
console.log("2ND")
    } if (3==ordinalnumb[z]){
      console.log("3RD")
  } if ( 4==ordinalnumb[z]){
console.log( "4TH")
  }if(5==ordinalnumb[z]){
    console.log("5TH")
  }  if(6==ordinalnumb[z]){
    console.log("6TH")
  }if(7==ordinalnumb[z]){
    console.log("7TH")
  }if(8==ordinalnumb[z]){
    console.log("8TH")
  }if(9==ordinalnumb[z]){
     console.log("9TH");
  }
}
//Ex34
let pizza=['tikka','fajita','supreme'];
for (let x = 0; x < 3; x++) {
  console.log('I like'+" "+pizza[x]+" "+'pizza');
}
console.log('I really like pizza in fast food and the flavors I really love the most are'+' '+pizza+' '+'tastiest ones.'+ 'I really love pizza!');

//Ex35
let pets=['sparrow','pigoen','huming bird'];
for(let x=0;x<3;x++){
  console.log(pets[x])
  console.log(pets[x]+" "+'is a beautiful bird');
};
console.log('These animals are good for barkat');
//Ex36
function make_shirt(size,text) {
 console.log('Your shirts size is' +' '+ size +' '+ 'and the text printed on it is'+' '+ text)
 
}
make_shirt(30,'burgerscript');

//Ex37
let size1='large';
let text1='I love javascript';
function make_shirt1(size1,text1){
  if(size1=='Large'||size1=='large'){
  console.log(`Your shirt size is large and the text printed on it is 'I love javascript'`)
}
else if (size1=='Medium'||size1=='medium'){
  console.log(`Your shirt size is medium and text printed on it is 'Big boys play at night'`)}
  else{
 console.log(`Your shirt size is small and the message printed on it is 'I serve humanity'`)
  }

}

make_shirt1('large');
//Ex38
function describe_city(city,country) {
  console.log(city + ' is in  '+country)
  
}
describe_city('Lahore','Pakistan');
describe_city('Islamabad','Pakistan');
describe_city('Karachi','Pakistan');
//Ex39
function city_country(city1,country1){

console.log(`"${city1} , ${country1}"`)
}city_country('karachi','pakistan');
city_country('venice','Italy')
city_country('mali','maldives')

//Ex40
function make_album(artistname,albumtitle,Tracks) {
  let albums={'ArtistName':artistname,
  'albumtitle': albumtitle,
'Number of track':Tracks}
  console.log(albums)
  
}make_album('Arooj Aftab','Mohabbat',1);
make_album('Atif Aslam','Hona tha pyaar',2)
make_album('Justin','Babe',1)
//Ex 41
let magiciansnames=['dale','phillips','david'];
function show_magicians(){
  for(let i=0;i<3;i++) {
    console.log(magiciansnames[i])
  }
};
show_magicians();

//Ex42
function make_great() {
  for ( let i=0;i<3;i++) {
    console.log(magiciansnames[i]+' the great')
  }
  
}
make_great();

//Ex43

make_great();
show_magicians();


//Ex44
function sandwiches(ingredients) {
  let sandwich=[ingredients]
  console.log(sandwich);
}
sandwiches('I want a sandwich with olives');
sandwiches('I want cheese extra');
sandwiches('I want extra potatoes');

//Ex45
function carinfo(manufacturer1,model1,arbnumb,colour1,size1 ) 
{
let obj1={Manufacturer: manufacturer1,
  model:model1,
arbitrarynumber:arbnumb,
colour:colour1,
size:size1}
console.log(obj1)
}
carinfo('Pakistan',2023,123,'red',10);
var name="Haider";
console.log("How are you "+ name+ ""+"?");
const name1= "aLi";
let uppercase=name1.toUpperCase();
let lowercase=name1.toLowerCase();
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
//This program is made to achieve titlecase

  console.log(name1[0].toUpperCase()+""+name1.slice(1).toLowerCase());
  
//Haider 10/22/2022 This program is made to reveal my favourite quote.
 var quote=`Imam Ali(a.s) said"Your half of the beauty comes from the way you speak"`;
console.log(quote);
 var famous_person="Imam Ali(a.s)";
var quote2=famous_person+" "+"said"+" "+`"Your half of the beauty comes from the way you speak"`;
console.log(quote2);
var nameofperson= "Asfan\nyaa\tr";
console.log(nameofperson);
var nameofperson=("Asfandyaar");
console.log(nameofperson);
var multiplication=4*2;
var division=16/2;
var subtraction=16-8;
var addition=4+4;
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(addition);
 console.log(4+4);
 console.log(32/4);
 console.log(16-8);
 console.log(4*2);
 const favouritenumber=14;
 let favouritenumberprint="My favourite number is "+favouritenumber;
 console.log(favouritenumberprint);
 let arrayfriends=["Musa","Zahid","Hassan","Ali"];
 arrayfriends[0];
 arrayfriends[1];
 arrayfriends[2];
 arrayfriends[3];
 console.log( arrayfriends[0]);
 console.log( arrayfriends[1]);
 console.log( arrayfriends[2]);
 console.log( arrayfriends[3]);
 let arraymsg=" where are you?";
 console.log(arrayfriends[0]+arraymsg);
 console.log(arrayfriends[1]+arraymsg);
 console.log(arrayfriends[2]+arraymsg);
 console.log(arrayfriends[3]+arraymsg);
 let arraytransport=["bike","car","bicycle","bus","boat"];
 console.log("I would like to ride a "+ " " + arraytransport[0]);
 console.log("I would like to travel in a "+ " "+arraytransport[1]);
 console.log(arraytransport[2]+" "+"is good for health" );
 console.log("We will go on trip with"+" "+arraytransport[3]);
 console.log(arraytransport+" "+"is to travel through sea");
 let guestlist=["Ali","Ahmed","Abdullah"];
 console.log(guestlist);
let invitation="Sorry we have only invited two people for dinner  ";
let sorryinvite="Sorry you are not invited";    
/*onsole.log(invitation+guestlist[0]);
console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);*/
console.log( invitation);
guestlist.splice(1,1,"Amir");
guestlist.pop();
console.log(guestlist);
console.log(guestlist[0]+ " you are invited for dinner.");
console.log(guestlist[1]+ "you are invited for dinner");
guestlist.pop();
guestlist.pop();
console.log(guestlist);

 let favlocations =["Italy","Maldives","Sweden","Finland","Denmark"];
console.log(favlocations);
favlocations.sort();
console.log(favlocations);
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);
let length1=(guestlist.length);
console.log(length1);

let mountains=["chenab","jhelum","ravi","setluj"];

//This all is that was removed in 15
/*console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);
console.log("I found a bigger table"+" "+guestlist);
guestlist.unshift("Ahmed");
guestlist.splice(3,0,"Asim");
//Apppend not done write now working on it.
let invitation2= "We are very excited to invite you to our dinner party ";
console.log(invitation2+guestlist[0]);
console.log(invitation2+guestlist[1]);
console.log(invitation2+guestlist[2]);
console.log(invitation2+guestlist[3]);
console.log("I")*/
//After 20 start from starting from here

let obj1={ country:"Paistan",currency:"Ruppee",population:"220 million"};
console.log(obj1);
let akif='BMW';
console.log("Is 'BMW'==akif ?I predict its true");
console.log( 'BMW'=='akif');
let comp='Hxy';
console.log("If 'Hxy'==Hxy?I predict its true");
console.log('Hxy'=='Hxy');
let comp1='123';
console.log("If '123'== 321?I predict its false");
console.log('123'=='321');
let comp2='123';
console.log("If '123'== 321?I predict its false");
console.log('123'==321);
let comp3='123';
console.log("If '123'== 123?I predict its False");
console.log('123'==123);
let comp4=123;
console.log("If '123'== 123?I predict its True");
console.log(123==123);
let com5="aramco";
console.log(`"Is "aramco"=='Aramco'?I predict its false` );
console.log("aramco"=='Aramco');
let com6="aramco";
console.log(`"Is "aramco"=='aramco'?I predict its True` );
console.log("aramco"=='aramco');
let comp7=1+2;
console.log("Is 1+2==1+1+1? I predict its True");
console.log(1+2==1+1+1);
//Ex24 Conditional Test
 let comparison= 'Hash';
 console.log("'Hash'='hash'?");
 console.log('Hash'=='hash');
 console.log("'Hash'!='hash'");
 console.log('Hash'!='hash');
 let comparison1='sport'
 console.log("'sport'='sports'");
 console.log('sport'=='sports');
 let comparison2=12;
 console.log("12==13");
 console.log("12!=13");
 console.log(12!=13);
 console.log("12>=13");
 console.log(12>=13);
 console.log("12>13");
 console.log(12>13);
 console.log("12<13");
 console.log(12>13);
 console.log("12<=13");
 console.log(12<=13);

 let coperator=13>12 && 5>3;
 console.log(coperator);
 let coperator2=13<=12 || 1>0;
 console.log(coperator2);

 let unknownarray=["bat","ball","wicket","helmet"];
 unknownarray.includes("bat");
 console.log(unknownarray.includes("bat"));
 console.log(unknownarray.includes("bank"));
 //Q#25
 let alien_colour='Green';
 if(alien_colour =='Green'){
console.log("Player just earned 5 points")}
else{
console.log("You earned 10 points");
};
alien_colour='Green';
 if(alien_colour =='Yellow'|| alien_colour=='Red'){
console.log("Player just earned 10 points")}
else{

};
//Ex#26
let alien_colour1='Green'
if(alien_colour1=='Green')
{
  console.log("You earned 5 points for shooting the alien")
}else  {
console.log("Player just earned 10 points ")
}

if(alien_colour1!='Green')
{
  console.log("You earned 10 points for shooting the alien")
}else  {
console.log("Player just earned 5 points ")
}

//EX#27
if(alien_colour=='Green'){
  console.log("You earned 5 points")
}else if(alien_colour=='Yellow'){
  console.log("Player just earned 10 points")
}else if (alien_colour=='Red'){
  console.log("Player just earned 15 points")
};

//Ex#28
let personage=2
if(personage==2){
  console.log("This person is Baby")
}else if(personage>2&&personage<4)
{
  console.log("That person is a Toddler")
}
else if (personage>4&&personage<13){
  console.log("This person is a kid")
}
else if (personage>13&&personage<20){
  console.log("This person is a Toddler")
}
else if (personage>20&&personage<65){
  console.log("This person is an Adult")
}else{
  console.log("This person is an elder")
};

//Ex29 
let favourite_fruits=['apple','banana','grapes'];
if(favourite_fruits.includes('apple')){
console.log("You really like bananas")
}if (favourite_fruits.includes('banana')){
  console.log("You really like bananas")
}
if(favourite_fruits.includes('mango')){

}
if(favourite_fruits.includes('orange')){

}
if(favourite_fruits.includes('grapes')){
  console.log("You really like grapes")
}
//Ex 30 
let user_names=['user_ali','iam072','admin','syedshahmir','gfxmentor'];
for(let i=0;i<5;i++){
if('admin'==user_names,[i]){
  console.log("Hello admin would you like to see a status report?")
}if(user_names=='user_ali',[i]){
  console.log('Hello user_ali thank you for logging in again')
} if(user_names=='iam072',[i]){
  console.log("Hello iam072 thank you for logging in again")
} if(user_names=='syedshahmir',[i]){
  console.log("Hello syedshahmir thank you for logging in again")
} if(user_names=='gfxmentor',[i]){
  console.log("Hello gfxmentor thank you for logging in again")
}
}

//Ex31
let xyz=[];
console.log("We need to find some users");
user_names.slice(0,4);
console.log("Users Found");

//Ex32
let current_users=['muhammad1','haider2','ali3','hassan4','hussain5'];
let new_users=['ateeq6','atif','haider2','sadiq7','ali3'];
for( let a=0;a<5;a++){
for(let b=0;b<5;b++){
if(current_users[a]==new_users[b]){
  console.log("The person will need to enter a new username.")
}else if( current_users[a]!=new_users[b]){
  console.log("Username is available")
}
}
}

//EX 33
let ordinalnumb=[1,2,3,4,5,6,7,8,9];
for(let z=0;z<10;z++){
  if (1==ordinalnumb[z]){
    console.log("1ST")
  } if (2==ordinalnumb[z]){
console.log("2ND")
    } if (3==ordinalnumb[z]){
      console.log("3RD")
  } if ( 4==ordinalnumb[z]){
console.log( "4TH")
  }if(5==ordinalnumb[z]){
    console.log("5TH")
  }  if(6==ordinalnumb[z]){
    console.log("6TH")
  }if(7==ordinalnumb[z]){
    console.log("7TH")
  }if(8==ordinalnumb[z]){
    console.log("8TH")
  }if(9==ordinalnumb[z]){
     console.log("9TH");
  }
}
//Ex34
let pizza=['tikka','fajita','supreme'];
for (let x = 0; x < 3; x++) {
  console.log('I like'+" "+pizza[x]+" "+'pizza');
}
console.log('I really like pizza in fast food and the flavors I really love the most are'+' '+pizza+' '+'tastiest ones.'+ 'I really love pizza!');

//Ex35
let pets=['sparrow','pigoen','huming bird'];
for(let x=0;x<3;x++){
  console.log(pets[x])
  console.log(pets[x]+" "+'is a beautiful bird');
};
console.log('These animals are good for barkat');
//Ex36
function make_shirt(size,text) {
 console.log('Your shirts size is' +' '+ size +' '+ 'and the text printed on it is'+' '+ text)
 
}
make_shirt(30,'burgerscript');

//Ex37
let size1='large';
let text1='I love javascript';
function make_shirt1(size1,text1){
  if(size1=='Large'||size1=='large'){
  console.log(`Your shirt size is large and the text printed on it is 'I love javascript'`)
}
else if (size1=='Medium'||size1=='medium'){
  console.log(`Your shirt size is medium and text printed on it is 'Big boys play at night'`)}
  else{
 console.log(`Your shirt size is small and the message printed on it is 'I serve humanity'`)
  }

}

make_shirt1('large');
//Ex38
function describe_city(city,country) {
  console.log(city + ' is in  '+country)
  
}
describe_city('Lahore','Pakistan');
describe_city('Islamabad','Pakistan');
describe_city('Karachi','Pakistan');
//Ex39
function city_country(city1,country1){

console.log(`"${city1} , ${country1}"`)
}city_country('karachi','pakistan');
city_country('venice','Italy')
city_country('mali','maldives')

//Ex40
function make_album(artistname,albumtitle,Tracks) {
  let albums={'ArtistName':artistname,
  'albumtitle': albumtitle,
'Number of track':Tracks}
  console.log(albums)
  
}make_album('Arooj Aftab','Mohabbat',1);
make_album('Atif Aslam','Hona tha pyaar',2)
make_album('Justin','Babe',1)
//Ex 41
let magiciansnames=['dale','phillips','david'];
function show_magicians(){
  for(let i=0;i<3;i++) {
    console.log(magiciansnames[i])
  }
};
show_magicians();

//Ex42
function make_great() {
  for ( let i=0;i<3;i++) {
    console.log(magiciansnames[i]+' the great')
  }
  
}
make_great();

//Ex43

make_great();
show_magicians();


//Ex44
function sandwiches(ingredients) {
  let sandwich=[ingredients]
  console.log(sandwich);
}
sandwiches('I want a sandwich with olives');
sandwiches('I want cheese extra');
sandwiches('I want extra potatoes');

//Ex45
function carinfo(manufacturer1,model1,arbnumb,colour1,size1 ) 
{
let obj1={Manufacturer: manufacturer1,
  model:model1,
arbitrarynumber:arbnumb,
colour:colour1,
size:size1}
console.log(obj1)
}
carinfo('Pakistan',2023,123,'red',10);
var name="Haider";
console.log("How are you "+ name+ ""+"?");
const name1= "aLi";
let uppercase=name1.toUpperCase();
let lowercase=name1.toLowerCase();
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
//This program is made to achieve titlecase

  console.log(name1[0].toUpperCase()+""+name1.slice(1).toLowerCase());
  
//Haider 10/22/2022 This program is made to reveal my favourite quote.
 var quote=`Imam Ali(a.s) said"Your half of the beauty comes from the way you speak"`;
console.log(quote);
 var famous_person="Imam Ali(a.s)";
var quote2=famous_person+" "+"said"+" "+`"Your half of the beauty comes from the way you speak"`;
console.log(quote2);
var nameofperson= "Asfan\nyaa\tr";
console.log(nameofperson);
var nameofperson=("Asfandyaar");
console.log(nameofperson);
var multiplication=4*2;
var division=16/2;
var subtraction=16-8;
var addition=4+4;
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(addition);
 console.log(4+4);
 console.log(32/4);
 console.log(16-8);
 console.log(4*2);
 const favouritenumber=14;
 let favouritenumberprint="My favourite number is "+favouritenumber;
 console.log(favouritenumberprint);
 let arrayfriends=["Musa","Zahid","Hassan","Ali"];
 arrayfriends[0];
 arrayfriends[1];
 arrayfriends[2];
 arrayfriends[3];
 console.log( arrayfriends[0]);
 console.log( arrayfriends[1]);
 console.log( arrayfriends[2]);
 console.log( arrayfriends[3]);
 let arraymsg=" where are you?";
 console.log(arrayfriends[0]+arraymsg);
 console.log(arrayfriends[1]+arraymsg);
 console.log(arrayfriends[2]+arraymsg);
 console.log(arrayfriends[3]+arraymsg);
 let arraytransport=["bike","car","bicycle","bus","boat"];
 console.log("I would like to ride a "+ " " + arraytransport[0]);
 console.log("I would like to travel in a "+ " "+arraytransport[1]);
 console.log(arraytransport[2]+" "+"is good for health" );
 console.log("We will go on trip with"+" "+arraytransport[3]);
 console.log(arraytransport+" "+"is to travel through sea");
 let guestlist=["Ali","Ahmed","Abdullah"];
 console.log(guestlist);
let invitation="Sorry we have only invited two people for dinner  ";
let sorryinvite="Sorry you are not invited";    
/*onsole.log(invitation+guestlist[0]);
console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);*/
console.log( invitation);
guestlist.splice(1,1,"Amir");
guestlist.pop();
console.log(guestlist);
console.log(guestlist[0]+ " you are invited for dinner.");
console.log(guestlist[1]+ "you are invited for dinner");
guestlist.pop();
guestlist.pop();
console.log(guestlist);

 let favlocations =["Italy","Maldives","Sweden","Finland","Denmark"];
console.log(favlocations);
favlocations.sort();
console.log(favlocations);
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);

favlocations.reverse();
console.log(favlocations);
let length1=(guestlist.length);
console.log(length1);

let mountains=["chenab","jhelum","ravi","setluj"];

//This all is that was removed in 15
/*console.log(invitation+guestlist[1]);
console.log(invitation+guestlist[2]);
console.log("I found a bigger table"+" "+guestlist);
guestlist.unshift("Ahmed");
guestlist.splice(3,0,"Asim");
//Apppend not done write now working on it.
let invitation2= "We are very excited to invite you to our dinner party ";
console.log(invitation2+guestlist[0]);
console.log(invitation2+guestlist[1]);
console.log(invitation2+guestlist[2]);
console.log(invitation2+guestlist[3]);
console.log("I")*/
//After 20 start from starting from here

let obj1={ country:"Paistan",currency:"Ruppee",population:"220 million"};
console.log(obj1);
let akif='BMW';
console.log("Is 'BMW'==akif ?I predict its true");
console.log( 'BMW'=='akif');
let comp='Hxy';
console.log("If 'Hxy'==Hxy?I predict its true");
console.log('Hxy'=='Hxy');
let comp1='123';
console.log("If '123'== 321?I predict its false");
console.log('123'=='321');
let comp2='123';
console.log("If '123'== 321?I predict its false");
console.log('123'==321);
let comp3='123';
console.log("If '123'== 123?I predict its False");
console.log('123'==123);
let comp4=123;
console.log("If '123'== 123?I predict its True");
console.log(123==123);
let com5="aramco";
console.log(`"Is "aramco"=='Aramco'?I predict its false` );
console.log("aramco"=='Aramco');
let com6="aramco";
console.log(`"Is "aramco"=='aramco'?I predict its True` );
console.log("aramco"=='aramco');
let comp7=1+2;
console.log("Is 1+2==1+1+1? I predict its True");
console.log(1+2==1+1+1);
//Ex24 Conditional Test
 let comparison= 'Hash';
 console.log("'Hash'='hash'?");
 console.log('Hash'=='hash');
 console.log("'Hash'!='hash'");
 console.log('Hash'!='hash');
 let comparison1='sport'
 console.log("'sport'='sports'");
 console.log('sport'=='sports');
 let comparison2=12;
 console.log("12==13");
 console.log("12!=13");
 console.log(12!=13);
 console.log("12>=13");
 console.log(12>=13);
 console.log("12>13");
 console.log(12>13);
 console.log("12<13");
 console.log(12>13);
 console.log("12<=13");
 console.log(12<=13);

 let coperator=13>12 && 5>3;
 console.log(coperator);
 let coperator2=13<=12 || 1>0;
 console.log(coperator2);

 let unknownarray=["bat","ball","wicket","helmet"];
 unknownarray.includes("bat");
 console.log(unknownarray.includes("bat"));
 console.log(unknownarray.includes("bank"));
 //Q#25
 let alien_colour='Green';
 if(alien_colour =='Green'){
console.log("Player just earned 5 points")}
else{
console.log("You earned 10 points");
};
alien_colour='Green';
 if(alien_colour =='Yellow'|| alien_colour=='Red'){
console.log("Player just earned 10 points")}
else{

};
//Ex#26
let alien_colour1='Green'
if(alien_colour1=='Green')
{
  console.log("You earned 5 points for shooting the alien")
}else  {
console.log("Player just earned 10 points ")
}

if(alien_colour1!='Green')
{
  console.log("You earned 10 points for shooting the alien")
}else  {
console.log("Player just earned 5 points ")
}

//EX#27
if(alien_colour=='Green'){
  console.log("You earned 5 points")
}else if(alien_colour=='Yellow'){
  console.log("Player just earned 10 points")
}else if (alien_colour=='Red'){
  console.log("Player just earned 15 points")
};

//Ex#28
let personage=2
if(personage==2){
  console.log("This person is Baby")
}else if(personage>2&&personage<4)
{
  console.log("That person is a Toddler")
}
else if (personage>4&&personage<13){
  console.log("This person is a kid")
}
else if (personage>13&&personage<20){
  console.log("This person is a Toddler")
}
else if (personage>20&&personage<65){
  console.log("This person is an Adult")
}else{
  console.log("This person is an elder")
};

//Ex29 
let favourite_fruits=['apple','banana','grapes'];
if(favourite_fruits.includes('apple')){
console.log("You really like bananas")
}if (favourite_fruits.includes('banana')){
  console.log("You really like bananas")
}
if(favourite_fruits.includes('mango')){

}
if(favourite_fruits.includes('orange')){

}
if(favourite_fruits.includes('grapes')){
  console.log("You really like grapes")
}
//Ex 30 
let user_names=['user_ali','iam072','admin','syedshahmir','gfxmentor'];
for(let i=0;i<5;i++){
if('admin'==user_names,[i]){
  console.log("Hello admin would you like to see a status report?")
}if(user_names=='user_ali',[i]){
  console.log('Hello user_ali thank you for logging in again')
} if(user_names=='iam072',[i]){
  console.log("Hello iam072 thank you for logging in again")
} if(user_names=='syedshahmir',[i]){
  console.log("Hello syedshahmir thank you for logging in again")
} if(user_names=='gfxmentor',[i]){
  console.log("Hello gfxmentor thank you for logging in again")
}
}

//Ex31
let xyz=[];
console.log("We need to find some users");
user_names.slice(0,4);
console.log("Users Found");

//Ex32
let current_users=['muhammad1','haider2','ali3','hassan4','hussain5'];
let new_users=['ateeq6','atif','haider2','sadiq7','ali3'];
for( let a=0;a<5;a++){
for(let b=0;b<5;b++){
if(current_users[a]==new_users[b]){
  console.log("The person will need to enter a new username.")
}else if( current_users[a]!=new_users[b]){
  console.log("Username is available")
}
}
}

//EX 33
let ordinalnumb=[1,2,3,4,5,6,7,8,9];
for(let z=0;z<10;z++){
  if (1==ordinalnumb[z]){
    console.log("1ST")
  } if (2==ordinalnumb[z]){
console.log("2ND")
    } if (3==ordinalnumb[z]){
      console.log("3RD")
  } if ( 4==ordinalnumb[z]){
console.log( "4TH")
  }if(5==ordinalnumb[z]){
    console.log("5TH")
  }  if(6==ordinalnumb[z]){
    console.log("6TH")
  }if(7==ordinalnumb[z]){
    console.log("7TH")
  }if(8==ordinalnumb[z]){
    console.log("8TH")
  }if(9==ordinalnumb[z]){
     console.log("9TH");
  }
}
//Ex34
let pizza=['tikka','fajita','supreme'];
for (let x = 0; x < 3; x++) {
  console.log('I like'+" "+pizza[x]+" "+'pizza');
}
console.log('I really like pizza in fast food and the flavors I really love the most are'+' '+pizza+' '+'tastiest ones.'+ 'I really love pizza!');

//Ex35
let pets=['sparrow','pigoen','huming bird'];
for(let x=0;x<3;x++){
  console.log(pets[x])
  console.log(pets[x]+" "+'is a beautiful bird');
};
console.log('These animals are good for barkat');
//Ex36
function make_shirt(size,text) {
 console.log('Your shirts size is' +' '+ size +' '+ 'and the text printed on it is'+' '+ text)
 
}
make_shirt(30,'burgerscript');

//Ex37
let size1='large';
let text1='I love javascript';
function make_shirt1(size1,text1){
  if(size1=='Large'||size1=='large'){
  console.log(`Your shirt size is large and the text printed on it is 'I love javascript'`)
}
else if (size1=='Medium'||size1=='medium'){
  console.log(`Your shirt size is medium and text printed on it is 'Big boys play at night'`)}
  else{
 console.log(`Your shirt size is small and the message printed on it is 'I serve humanity'`)
  }

}

make_shirt1('large');
//Ex38
function describe_city(city,country) {
  console.log(city + ' is in  '+country)
  
}
describe_city('Lahore','Pakistan');
describe_city('Islamabad','Pakistan');
describe_city('Karachi','Pakistan');
//Ex39
function city_country(city1,country1){

console.log(`"${city1} , ${country1}"`)
}city_country('karachi','pakistan');
city_country('venice','Italy')
city_country('mali','maldives')

//Ex40
function make_album(artistname,albumtitle,Tracks) {
  let albums={'ArtistName':artistname,
  'albumtitle': albumtitle,
'Number of track':Tracks}
  console.log(albums)
  
}make_album('Arooj Aftab','Mohabbat',1);
make_album('Atif Aslam','Hona tha pyaar',2)
make_album('Justin','Babe',1)
//Ex 41
let magiciansnames=['dale','phillips','david'];
function show_magicians(){
  for(let i=0;i<3;i++) {
    console.log(magiciansnames[i])
  }
};
show_magicians();

//Ex42
function make_great() {
  for ( let i=0;i<3;i++) {
    console.log(magiciansnames[i]+' the great')
  }
  
}
make_great();

//Ex43

make_great();
show_magicians();


//Ex44
function sandwiches(ingredients) {
  let sandwich=[ingredients]
  console.log(sandwich);
}
sandwiches('I want a sandwich with olives');
sandwiches('I want cheese extra');
sandwiches('I want extra potatoes');

//Ex45
function carinfo(manufacturer1,model1,arbnumb,colour1,size1 ) 
{
let obj1={Manufacturer: manufacturer1,
  model:model1,
arbitrarynumber:arbnumb,
colour:colour1,
size:size1}
console.log(obj1)
}
carinfo('Pakistan',2023,123,'red',10);

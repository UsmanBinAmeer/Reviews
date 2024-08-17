const user = [{
    imgurl: 'assets/chotu.jpg',
    name: 'Chotu',
    designation: 'Student',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..'
},
{
    imgurl: 'assets/tanzeel.jpg',
    name: 'Tanzeel Khan',
    designation: 'Student',
    description: 'Tanzeel is a good student'
},
{
    imgurl: 'assets/usman.jpg',
    name: 'Usman Ameer',
    designation: 'Student',
    description: 'Usman is a good student.'
},
{
    imgurl: 'assets/innu.jpg',
    name: 'Muhammad Sufiyan',
    designation: 'Mern Stack Developer',
    description: 'Sir Sufiyan is a very good teacher.'
},
{
    imgurl: 'assets/download.jpg',
    name: 'Haider',
    designation: 'Mern Stack Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
}]


var usercounter = 0

const previousHandler = () => {
    if (usercounter > 0) {
        usercounter--;
        console.log(usercounter, '===>>> usercounter');

        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    } else {
        usercounter = user.length - 1
        console.log(usercounter, '===>>> usercounter');
        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    }
}


const nextHandler = () => {
    if (usercounter > user.length - 1) {
        usercounter = 0;
        console.log(usercounter, '===>>> usercounter');
        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    } else {
        usercounter++;
        console.log(usercounter, '===>>> usercounter');
        document.querySelector('#image').src = user[usercounter].imgurl
        document.querySelector('#anyname').textContent = user[usercounter].name
        document.querySelector('#designation').textContent = user[usercounter].designation
        document.querySelector('#description').textContent = user[usercounter].description
    }
} 

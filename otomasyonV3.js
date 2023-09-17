let students2 = [
    {
        id:1,
        photo:"https://randomuser.me/api/portraits/men/74.jpg",
        name: "Ali",
        surname: "Yılmaz",
        age: 27,
        gender: "Erkek"
    },
    {   id:2,
        photo:"https://randomuser.me/api/portraits/men/82.jpg",
        name: "Atakan",
        surname: "Gergin",
        age: 39,
        gender: "Erkek"
    },
    {   id:3,
        name: "Hasan",
        surname: "Kıraç",
        age: 27,
        gender: "Erkek"
    },
    {
        id:4,
        name: "Ayla",
        surname: "Yılmaz",
        age: 22,
        gender: "Kadın"
    },
    {
        id:5,
        name: "Esin",
        surname: "Girik",
        age: 22,
        gender: "Kadın"
    },
    {
        id:6,
        name: "Mert",
        surname: "Müldür",
        age: 25,
        gender: "Erkek"
    },
    {   
        id:7,
        name: "Mitsubishi",
        surname: "Kawasaki",
        age: 20,
        gender: "Erkek"
    },
    {
        id:8,
        name: "Kemal",
        surname: "Ermemiş",
        age: 33,
        gender: "Erkek"
    },
    {
        id:9,
        name: "John",
        surname: "Osimen",
        age: 25,
        gender: "Erkek"
    },
    {
        id:10,
        name: "Leyla",
        surname: "Toprak",
        age: 22,
        gender: "Kadın"
    },
    {
        id:11,
        name: "Barış",
        surname: "Özcanus",
        age: 33,
        gender: "Erkek"
    },
    {
        id:12,
        name: "Emel",
        surname: "Kirazoğlu",
        age: 23,
        gender: "Kadın"
    },
    {
        id:13,
        name: "Tuana",
        surname: "Yıldız",
        age: 19,
        gender: "Kadın"
    },
    {
        id:14,
        name: "Kerem",
        surname: "Karatürkoğlu",
        age: 23,
        gender: "Erkek"
    },
    {
        id:15,
        name: "Semih",
        surname: "Kılışdaroğlu",
        age: 20,
        gender: "Erkek"
    },
    {
        id:16,
        name: "Rana",
        surname: "Karakurt",
        age: 22,
        gender: "Kadın"
    },
    {
        id:17,
        name: "Aysu",
        surname: "Çiçek",
        age: 22,
        gender: "Kadın"
    },
    {
        id:18,
        name: "Gül",
        surname: "Diken",
        age: 27,
        gender: "Kadın"
    },
    {
        id:19,
        name: "Ayumi",
        surname: "Takashiwa",
        age: 24,
        gender: "Kadın"
    },
    {
        id:20,
        name: "Ayşen",
        surname: "Tatlıtuğ",
        age: 27,
        gender: "Kadın"
    }
];
let students = [...students2];

let studentID = 20;

let lsStudents = localStorage.getItem('students');
if(lsStudents) {
    students = JSON.parse(lsStudents)
};

function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}


// if(localStorage.studentID){
//     studentID = Number(localStorage.studentID);
// }

function generateId(){
    studentID++;
    localStorage.studentID = studentID;
    return studentID;
}
const studentLists = document.querySelector('#studentLists');
function renderStudents(nwStudent){
    studentLists.innerHTML = '';
    for(let nwStudent  of students) {
        let tableRow = document.createElement('tr');
       tableRow.innerHTML += `<tr><td>${nwStudent.id}</td>
    <td><img src="${nwStudent.photo}"/></td><td>${nwStudent.name}</td>
    <td>${nwStudent.surname}</td><td>${nwStudent.age}</td><td>${nwStudent.gender}</td></tr>
    `;
    document.getElementById('studentLists').appendChild(tableRow);
    }
}
renderStudents();

const addStudent = document.querySelector('#addStudent');
addStudent.addEventListener('click', pushStudent);

function pushStudent(){
    let nStudent = {};
     nStudent.photo = prompt('Profil fotoğrafı Linkini Giriniz');
     nStudent.name = prompt('Yeni Öğrencinin Adını Giriniz');
     nStudent.surname = prompt('Yeni Öğrencinin Soyadını Giriniz');
     nStudent.age = prompt('Öğrenci Yaşını Giriniz');
     nStudent.gender = prompt('Öğrencinin Cinsiyeti');

    students.push(nStudent);
    saveStudents();
};

 // {
        //     id:generateId(),
        //     photo: studentsPhoto,
        //     name: studentsFirstName,
        //     surname: studentsLastName,
        //     age: studentsAge,
        //     gender: studentGender
        // }

deleteAllButton.addEventListener('click', deleteAllStudent);
function deleteAllStudent(){
    localStorage.clear();
    studentLists.innerHTML = '';
}

deleteButton.addEventListener('click', askId);
function findStudentIndex(studentId){
    for(let i = 0; i < students.length; i++) {
        if(students[i].id === studentId){
            return i;
        }
    }
    return -1;
}

function removeStudent(studentId){
    const studentIndex = findStudentIndex(studentId);
    if(studentIndex > -1){
        students.splice(studentIndex, 1);
        
        saveStudents();
    }else {

    }
    renderStudents();
}

function askId(studentId){
    studentId = Number(prompt("Silmek İstediğin Öğrenci ID'yi belirt "))
    removeStudent(studentId);
};
const sTable = document.querySelectorAll('#sTable');

let students2 = [
    {
        id:1,
        name: "Ali",
        surname: "Yılmaz",
        age: 27,
        gender: "Erkek"
    },
    {   id:2,
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

if(localStorage.studentID){
    studentID = Number(localStorage.studentID);
}

function generateId(){
    studentID++;
    localStorage.studentID = studentID;
    return studentID;
}

const addStudent = document.querySelector('#addStudent');
addStudent.addEventListener('click', pushStudent);

function pushStudent(){
    let studentsPhoto = prompt('Profil fotoğrafı Linkini Giriniz');
    let studentsFirstName = prompt('Yeni Öğrencinin Adını Giriniz');
    let studentsLastName = prompt('Yeni Öğrencinin Soyadını Giriniz');
    let studentsAge = prompt('Öğrenci Yaşını Giriniz');
    let studentGender = prompt('Öğrencinin Cinsiyeti');

    students.push(
        {
            id:generateId(),
            photo: studentsPhoto,
            name: studentsFirstName,
            surname: studentsLastName,
            age: studentsAge,
            gender: studentGender
        }
    )

    studentLists.innerHTML += `<tr><td>${studentID}</td>
    <td><img src="${studentsPhoto}"/></td><td>${studentsFirstName}</td>
    <td>${studentsLastName}</td><td>${studentsAge}</td><td>${studentGender}</td></tr>
    `
};

//const aboutIntroP = ['I love to explore...in my dream.\nMorning is nightmares, Night is happiness! I love peace and simplicity, but why does real life seem so different...\nMy motto is "Even though, I am not the best but I will try my best untill succeed"', 'ฉันรักการสำรวจมาก...แต่เป็นในฝันน่ะ\nยามเช้าคือฝันร้าย ค่ำคืนสิความสุข! ฉันรักความสงบ ความเรียบง่าย แต่ทำไมชีวิตจริงถึงไม่ใช่แบบนั้นนะ...\nคติประจำใจของฉัน "แม้ว่าฉันจะไม่ใช่คนที่เก่งที่สุด แต่ฉันจะพยายามจนกว่าจะสำเร็จ"']; // const ค่าที่ไม่เปลี่ยนปลง
const quotE = ["I'm not the 'BEST' but I'll try my best until 'SUCCESS'", "หนูไม่ใช่คนที่ 'เก่งที่สุด' แต่หนูจะพยายามจนกว่า 'สำเร็จ'"] 
const aboutName = ['Pimpawee Petchareun', 'พิมพ์ปวีณ์ เพชรเจริญ']
const aboutSchool = ['Kanjanapisek Wittayalai Nakhon Pathom', 'กาญจนาภิเษกวิทยาลัย นครปฐม']
const aboutProgram = ['Mathematics and English', 'คณิตศาสตร์ และภาษาอังกฤษ']
const aboutBirth = ['12 October 2006 (17 years old)', '12 ตุลาคม 2549 (17 ปี)']
const aboutHobbies = ['Coding, Listen music, Photography, Editing', 'เขียนโค้ด ฟังเพลง ถ่ายภาพ ตัดต่อ']
const landingQuote = ["Welcome to Pimpawee'portfolio website. Let's get to know me!", "ยินดีต้อนรับทุกท่าน เข้าสู่เว็บไซต์ของ 'พิมพ์ปวีณ์' เรามาทำความรู้จักกันดีกว่า!"]
const changeLan = ['เปลี่ยนภาษา', 'Change Language']
const aboutMe = ['About Me', 'ประวัติส่วนตัว']
const activity = ['Activities', 'กิจกรรม']
const perFormance = ['Performance', 'ผลงาน']
//const cer = ['Certificate', 'เกียรติบัตร']
const topicName = ['Name: ', 'ชื่อ - สกุล: '];
const topicSch = ['School: ', 'โรงเรียน: ']
const topicSProgram = ['Program: ', 'สายการเรียน: ']
const topicBirth = ['Birth: ', 'วันเกิด: ']
const topicEmail = ['Email: ', 'อีเมล: ']
const topicHobbies = ['Hobbies: ', 'งานอดิเรก: ']

//const mySkill1 = ['Editing and Photography','การตัดต่อ (ภาพ/วิดีโอ)']
//const mySkill2 = ['Programing','การเขียนโปรแกรม']
//const mySkill3 = ['Artistic','หัวศิลป์']
//const mySkill4 = ['Manner and Kindness','มารยาท และนิสัย']
//const mySkill5 = ['Socializing','การเข้าสังคม']

const LANGUAGE = {
    'EN':0,
    'TH':1
};
let myLanguage = LANGUAGE.EN; //let ใช้แทน var เปลี่ยนค่าได้ง่าย

function changeMessage()
{
    //var aboutIntroPElement = document.getElementById('about-intro-p');
    var quotEElement = document.getElementById('quote');
    var aboutNameElement = document.getElementById('about-n');
    var aboutSchoolElement = document.getElementById('about-sch');
    var aboutProgramElement = document.getElementById('about-p');
    var aboutBirthElement = document.getElementById('about-b');
    var aboutHobbiesElement = document.getElementById('about-h');
    var landingQuoteElement = document.getElementById('landing-quote');
    var changeLanElement = document.getElementById('change-lan');
    var aboutMeElement = document.getElementById('aboutme');
    var activityElement = document.getElementById('activities');
    var perFormanceElement = document.getElementById('performance');
    //var cerElement = document.getElementById('certificate');
    var nameElement = document.getElementById('name');
    var schElement = document.getElementById('sch');
    var programElement = document.getElementById('program');
    var birthElement = document.getElementById('birth');
    var emailElement = document.getElementById('email');
    var hobbiesElement = document.getElementById('hobby');

    //var mySkill1Element = document.getElementById('skill1')
    //var mySkill2Element = document.getElementById('skill2')
    //var mySkill3Element = document.getElementById('skill3')
    //var mySkill4Element = document.getElementById('skill4')
    //var mySkill5Element = document.getElementById('skill5')

    if (myLanguage === LANGUAGE.EN)
    {
        myLanguage = LANGUAGE.TH //เปลี่ยนภาษาเป็นอิ้ง
    } else{
        myLanguage = LANGUAGE.EN // ถ้าไม่ใช่ไทย เปลี่ยนเป็นอิ้ง
    }
    //aboutIntroPElement.innerText = aboutIntroP[myLanguage];
    quotEElement.innerText = quotE[myLanguage];
    aboutNameElement.innerText = aboutName[myLanguage];
    aboutSchoolElement.innerText = aboutSchool[myLanguage];
    aboutProgramElement.innerText = aboutProgram[myLanguage];
    aboutBirthElement.innerText = aboutBirth[myLanguage];
    aboutHobbiesElement.innerText = aboutHobbies[myLanguage];
    landingQuoteElement.innerText = landingQuote[myLanguage];
    changeLanElement.innerText = changeLan[myLanguage];
    aboutMeElement.innerText = aboutMe[myLanguage];
    activityElement.innerText = activity[myLanguage];
    perFormanceElement.innerText = perFormance[myLanguage];
    //cerElement.innerText = cer[myLanguage];
    nameElement.innerText = topicName[myLanguage];
    schElement.innerText = topicSch[myLanguage];
    programElement.innerText = topicSProgram[myLanguage];
    birthElement.innerText = topicBirth[myLanguage];
    emailElement.innerText = topicEmail[myLanguage];
    hobbiesElement.innerText = topicHobbies[myLanguage];

    //mySkill1Element.innerText = mySkill1[myLanguage];
    //mySkill2Element.innerText = mySkill2[myLanguage];
    //mySkill3Element.innerText = mySkill3[myLanguage];
    //mySkill4Element.innerText = mySkill4[myLanguage];
    //mySkill5Element.innerText = mySkill5[myLanguage];
}
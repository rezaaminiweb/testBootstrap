try{
const List = document.getElementsByClassName('menuLi')[0]
const ulmob = document.getElementsByClassName('ulnav2mob')[0]
const menuClose = document.getElementsByClassName('menuClose')[0]
const divelement = document.getElementsByClassName('divelement')[0]
divelement.addEventListener('click',()=>{
    ulmob.style.left=-100+'%'
    divelement.classList.remove('spanopcl')

    divelement.classList.add('spanop')
})
List.addEventListener('click',()=>{
ulmob.style.left=0+'%'
divelement.classList.remove('spanop')

divelement.classList.add('spanopcl')
})
menuClose.addEventListener('click',()=>{
    ulmob.style.left=-100+'%'
    divelement.classList.remove('spanopcl')

    divelement.classList.add('spanop')
})
}
catch{

}
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
try{
    const iconsearch = document.getElementsByClassName('bi-search')[0]
    const ulabsbars = document.getElementsByClassName('ulabsbars')[0]

    i=1
    iconsearch.addEventListener('click',(e)=>{
       if(i%2){
        ulabsbars.style.opacity = 1
        ulabsbars.style.visibility = 'visible'
        e.target.classList.remove('bi-search')
        e.target.classList.add('bi-x')
        e.target.classList.add('serchbars')
        i++
       }else{
        ulabsbars.style.opacity = 0
        ulabsbars.style.visibility = 'hidden'
        e.target.classList.remove('bi-x')
        e.target.classList.add('bi-search')
        e.target.classList.remove('serchbars')
i++
       } 
       
    })

}catch{

}
try{
    const video = document.getElementById('video')
    const clickvideo = document.getElementById('clickvideo')
    const iconplay = document.getElementById('iconplay')
    let R = 1
    console.log(video.end)
    clickvideo.addEventListener('click',(e)=>{
        if(R%2){
            clickvideo.classList.toggle('classvideo0')
            
             iconplay.classList.remove('bi-play')
             iconplay.classList.add('bi-pause')
             video.classList.add('classvideo1')
             video.classList.remove('classvideo0')
             video.play()
            
            R++

        }else{
            clickvideo.classList.toggle('classvideo0')
            
             iconplay.classList.add('bi-play')
             iconplay.classList.remove('bi-pause')
             video.classList.add('classvideo0')
             video.classList.remove('classvideo1')
             video.pause()
            R++
        }
        
        
    })
    video.addEventListener('click',(e)=>{
        if(R%2){
            clickvideo.classList.toggle('classvideo0')
            iconplay.classList.add('bi-pause')
                    iconplay.classList.remove('bi-play')

            
                    
            R++
        }else{
            clickvideo.classList.toggle('classvideo0')
                    iconplay.classList.add('bi-play')
                    iconplay.classList.remove('bi-pause')
            
            R++
        }
        

    })
}catch{

}
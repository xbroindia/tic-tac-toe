let boxes =document.querySelectorAll(".box")
let replay=document.querySelector(".btn2")
let win =document.querySelector(".win");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let p1 =document.querySelector(".p1");
let p2 =document.querySelector(".p2");
let reset = document.querySelector("#reset")
let player=true;
const patterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let score1 = 0
let score2 = 0

boxes.forEach(
    (box) =>{
        box.addEventListener("click",()=>{
            if(player === true){
                box.innerText= "X";
                player=false;
                box.style.color="white";
            }
            else{
                box.innerText="O";
                player=true;
                box.style.color="red";
            }
            box.disabled=true;
            check()
        });
    });

function check(){
     for(let pattern of patterns){
        let post1 =boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 =boxes [pattern[2]].innerText;
        if(post1 != "" && post2  != "" && post3 != ""){
            if(post1 === post2 && post2 === post3){
                 if(post1 === "X"){
                    win.innerText="winner is X"
                    win.style.display="block";
                    score1 +=1
                    s1.innerText = score1
                    // p1.style.display="none"
                    // p2.style.display="none"
                 }
                 else{
                    win.innerText="winner is O"
                    win.style.display="block";
                    score2 +=1
                    s2.innerText = score2
                    // p1.style.display="none"
                    // p2.style.display="none"
                 };
            }
         }
     }
     draw()
}
function draw() {
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled &&!Array.from(boxes).some(box => box.innerText === "")) {
        win.innerText = "game is draw";
        win.style.display = "block";
        p1.style.display = "none";
        p2.style.display = "none";
    }
}
replay.addEventListener("click",()=>{
        boxes.forEach((box)=>{
             box.innerText="";
            box.disabled =false
        })
})

reset.addEventListener("click",()=>{
       window.location.reload()
})
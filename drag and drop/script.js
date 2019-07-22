let ball = document.querySelectorAll('.ball');
let pole = document.querySelector('.stadion');


let hair_m = () =>{   
        let cord = event.target.getBoundingClientRect();
        let shiftX = event.pageX - cord.left;
        let shiftY = event.pageY - cord.top;
        
        event.target.style.position = 'absolute';
        moveAt(event, shiftX, shiftY);

        pole.onmousemove = () =>{
            moveAt(event, shiftX, shiftY);
        };

        event.target.onmouseup = () =>{
            pole.onmousemove = null;
            for(let hair of ball){
                hair.onmouseup = null;
            } ;    
        };    
    };

    for(let hair of ball ){
        hair.addEventListener('mousedown', hair_m);
    }
    
    function moveAt(e, x, y){
        e.target.style.top = (e.pageY - y) + 'px';
        e.target.style.left = (e.pageX - x) + 'px';
    }
    ball.ondragstart = () => {return false};


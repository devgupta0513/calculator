let string =" ";
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (d)=>{
        if(d.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value=string;

        }
         else if(d.target.innerHTML=='AC'){
            string = " ";
            document.querySelector('input').value=string;

        }
        else if(d.target.innerHTML=='DEL'){
           string= string.slice(0,-1);
           document.querySelector('input').value=string;
        }
       
           else{
        string = string + d.target.innerHTML;
        
        document.querySelector('input').value=string;}
        
        

    })

})
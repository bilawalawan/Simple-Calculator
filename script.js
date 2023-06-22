var string = "";
var buttons = document.querySelectorAll('.btns');

console.log(typeof buttons);
buttons.forEach((val) => {
    val.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            var result = eval(string);
            // console.log(result);
            document.getElementById('input').value = result; 
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.getElementById('input').value = string; 
        }
        else{
            string = string + e.target.innerHTML
            document.getElementById('input').value = string; 
        }
            
        // console.log(result);
    })
})
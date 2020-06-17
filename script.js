
const col = document.querySelectorAll('.col');
const valueAccepter = document.querySelector('.choice');

let filled = [false, false, false, false, false, false, false, false, false]
let unfilled;


let userChoice = 'O';
col.forEach(cell => {
    cell.addEventListener('click', function(){
        if(cell.innerText == "")
        {
            console.log(cell.id);
            filled[cell.id - 1] = true;
            cell.innerText = userChoice;
            computerTurn();
            // valueAccepter.classList.add("mystyle");
            // console.log(valueAccepter.classList.add("visible"));

        }
        
        
    });
});




function computerTurn()
{
    unfilled = [];
    for(let i = 0; i < 9; i++)
    {
        if(!filled[i])
        {

            unfilled.push(i);
        }
    }

    let computerSelected = unfilled[Math.floor(Math.random() * unfilled.length)];

    setTimeout(function()
    {
        col[computerSelected].innerText = 'X';
        filled[computerSelected] = true;
        console.log(unfilled);
    }, 500);


    
}
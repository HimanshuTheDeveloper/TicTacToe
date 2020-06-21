
const col = document.querySelectorAll('.col');
const valueAccepter = document.querySelector('.choice');

let filled = [false, false, false, false, false, false, false, false, false]
let unfilled;


let userChoice = 'O';
col.forEach(cell => {
    cell.addEventListener('click', function(){
        if(cell.innerText == "")
        {
            // console.log(cell.id);
            filled[cell.id - 1] = true;
            cell.innerText = userChoice;
            computerTurn();
            
            // valueAccepter.classList.add("mystyle");
            // console.log(valueAccepter.classList.add("visible"));

        }
        
        
    });
});

function checkWinner()
{

    checkDiagonal();
    checkVertical();
    checkHorizontal();
}

function checkHorizontal()
{
    for(let i = 0; i < 3; i++)
    {
        console.log(`i = ${i}`);
        if(col[0 + (i * 3)].innerText != "" &&
            col[1 + (i * 3)].innerText != "" &&
            col[2 + (i * 3)].innerText != "")
        {
            if(col[0 + (i * 3)].innerText == col[1 + (i * 3)].innerText &&
                col[0 + (i * 3)].innerText == col[2 + (i * 3)].innerText)
            {
                console.log(`You Win: Horizontally row = ${i + 1}`);
            }
        }
    }
}
function checkVertical()
{
    for(let i = 0; i < 3; i++)
    {
        console.log(`i = ${i}`);
        if(col[0 + i].innerText != "" &&
            col[3 + i].innerText != "" &&
            col[6 + i].innerText != "")
        {
            if(col[0 + i].innerText == col[3 + i].innerText &&
                col[0 + i].innerText == col[6 + i].innerText)
            {
                console.log(`You Win: Vertically col = ${i + 1}`);
            }
        }
    }
}

function checkDiagonal() {

    let dg1 = [
                col[0].innerText, 
                col[4].innerText, 
                col[8].innerText
            ];    
    let dg2 = [
                col[2].innerText, 
                col[4].innerText, 
                col[6].innerText
            ];     

    if(dg1[0] != "" && dg1[1] != "" && dg1[2] != "" )
    {
        if(dg1[0] == dg1[1] && dg1[0] == dg1[2])
        {
            
            console.log(`You Win: Main Diagonal`);
        }
    }
    if(dg2[0] != "" && dg2[1] != "" && dg2[2] != "" )
    {
        if(dg2[0] == dg2[1] && dg2[0] == dg2[2])
        {
            console.log(`You Win: Anti Diagonal`);
        }
    }
}


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
        // console.log(unfilled);
        checkWinner();
    }, 500);


    
}
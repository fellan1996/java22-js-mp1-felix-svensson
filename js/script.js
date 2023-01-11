let num;
const arrayOfNumbersAsText = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//Creates the five headlines
for(let i = 0; i < 5; i++){
    createUniqueHeadline(i);
}


//Creates the flexbox container that contains the three columns
createBigPanel();

for(let i = 0; i < 3; i++) {
    //Creates one column per loop
    createColumn(i);

    //each case in the switch-case is activated once
    switch (i) {
        //Adds numbers and designs the left column
        case 0: 
            for(let j = 0; j < 10; j++) {
                firstColumnContent(j);
            }
            break;
        //Adds numbers and designs the center column
        case 1:
            for(let j = 0; j < 10; j++) {
                secondColumnContent(j);
            }
            break;
        //Adds numbers and designs the right column
        case 2:
            for(let j = 0; j < 10; j++) {
                thirdColumnContent(j);
            }
            break;
        }
}

function createUniqueHeadline(i) {
    const h1 = document.createElement('h1');
    h1.innerText = `Rad ${i+1}`;
    
    h1.style.background = `hsl(${120 + i*20}, 90%, 85%)`;
    h1.style.color = '#6a68f6';
    h1.style.fontSize = `${0.5 + i*0.7}rem`;
    h1.style.textAlign = 'center';
    
    document.body.append(h1);
}

function createBigPanel(){
    const bigPanel = document.createElement('section');
    document.body.append(bigPanel);
    bigPanel.setAttribute('class', 'big-panel');
    bigPanel.style.display = 'flex';
    bigPanel.style.gap = '15%'
    bigPanel.style.justifyContent = 'center';
    bigPanel.style.padding = '5%'
    bigPanel.style.border = '1px solid black'
}

function createColumn(i) {
    const column = document.createElement('div');
    column.setAttribute('class', `small-column-${i+1}`)
    const getBigPanel = document.querySelector('.big-panel');
    getBigPanel.append(column);
    column.style.border = '0.7rem solid #a8a8f0';
    column.style.width = '3rem';
}

function firstColumnContent(j) {
    num = document.createElement('p');
    const getColumn = document.querySelector('.small-column-1')
    getColumn.append(num);
    num.innerText =  j ;
    num.style.margin = '0';

    setBackgroundForNum(j, 4, 0);
}

function secondColumnContent(j) {
    num = document.createElement('p');
    const getColumn = document.querySelector('.small-column-2')
    getColumn.append(num);
    num.innerText = 9 - j ;
    num.style.margin = '0';
    num.style.textAlign = 'center';

    setBackgroundForNum(j, 1, 1);
}

function thirdColumnContent(j) {
    num = document.createElement('p');
    const getColumn = document.querySelector('.small-column-3')
    getColumn.append(num);
    num.innerText = arrayOfNumbersAsText[j];
    num.style.margin = '0';
    num.style.textAlign = 'right';

    setBackgroundForNum(j, 5, 0);
}

function setBackgroundForNum(j, specialNumFromTheTop, evenNumbersBlackOrWhite) {
    if( j == specialNumFromTheTop){
        num.style.background = '#a8a8f0';
    }else if(j %2 === evenNumbersBlackOrWhite){
        num.style.background = 'black';
        num.style.color = 'white';
    }
}



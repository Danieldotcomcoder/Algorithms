function permutationEquation(p) {

    let sp = p.join('').split('');
    let arr = [];
   console.log(sp.indexOf((sp.indexOf((1).toString())+1).toString())+1);
    for (let i = 1 ; i <= p.length ; i++) {
        let y = sp.indexOf((sp.indexOf((i).toString())+1).toString())+1
        arr.push(y);
        

    }  

    console.log(arr);
}

permutationEquation([43, 40, 28 ,32, 50 ,29 ,45 ,49 ,2 ,5 ,23, 7 ,31 ,35 ,38 ,4 ,16 ,8 ,20 ,33 ,13 ,39 ,9 ,17 ,18 ,37 ,42 ,25 ,14 ,41 ,10 ,27 ,3 ,48 ,26 ,19 ,47 ,24 ,21 ,6 ,11 ,34 ,30 ,22 ,44 ,46, 1 ,12 ,36,15])
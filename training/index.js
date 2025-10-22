const word = (str)=>{
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

word("Miguelangel");
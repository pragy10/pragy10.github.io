function display(){
    let adults = parseInt(document.f1.t1.value);
    let children = parseInt(document.f1.t2.value);
    let total = adults*10 + children*5;
    document.f1.t3.value = total;
}
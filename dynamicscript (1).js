function comment(){
    let x=String(document.getElementById("comme1").value);
    let com=x.length;
    let text="";
    for(let i=String(0);i<com;i++){
        text+=x[i];
    }
    text+="";
    document.getElementById("comm2").innerHTML=text;
}

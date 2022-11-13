/**
 * 
 * Autor: Gustavo da Silva Soares
 * 
 * Site: gustavo-soares-dev.github.io
 * 
 */

var at = false;

function change(){
    if(at == true){
        at = false;
        document.getElementById("ca").style.opacity = 0;
        document.getElementById("ca").style.width = "0px";
    } else{
        at = true;
        document.getElementById("ca").style.opacity = 1;
        document.getElementById("ca").style.width = "115px";
    }
}

function calcular(){
    var re = document.getElementById("reagentes").value;
    var pr = document.getElementById("produtos").value; 
    var ca = document.getElementById("ca").value;
    var ent = re - pr;
    document.getElementById("reagentes").value = "";
    document.getElementById("produtos").value = "";
    document.getElementById("ca").value = "";

    if(at == true && ca == ""){
        alert("Insira a energia do complexo ativado!");
        return;
    }

    if(isNaN(ent) == true){
        alert("Insira apensa números");
        return;
    }
    if(pr == re){
        alert("Essa reação não existe!");
        return;
    }

     re>pr?document.getElementById("res1").innerHTML = "A reação é exotérmica":document.getElementById("res1").innerHTML = "A reação é endotérmica";

     document.getElementById("res2").innerHTML = "A variação de entalpia é de " + ent;

    if(at == true){
        var eat = ca - re;
        if(isNaN(eat) == true){
            alert("Insira apensa números!");
            return;
        }
        document.getElementById("res3").innerHTML = "A energia de ativação é " + eat;

    }

    }


window.onload = addLinks();

function addLinks(){
    var elem = document.getElementById("labSidebar");
    for (var i = 1; i < 11; i++){
        let a = document.createElement("a");
        a.textContent = "Лабораторная работа " + i;
        a.id = "lr" + i + "link";
        a.href = '#';
        a.addEventListener("click", function(){swapFrame(a)});
        elem.appendChild(a);
        let br = document.createElement("br");
        elem.appendChild(br);
    }
}

function swapFrame(elem){
    console.log("swapFrame got called");
    var labframe = document.getElementById("labframe");
    switch(elem.id){
        case 'lr1link':
            labframe.src = "lr1.html";
            break;
        case 'lr2link':
            labframe.src = "lr2.html";
            break;
        case 'lr3link':
            labframe.src = "lr3.html";
            break;
        case 'lr4link':
            labframe.src = "lr4.html";
            break;
        case 'lr5link':
            labframe.src = "lr5.html";
            break;
        case 'lr6link':
            labframe.src = "lr6.html";
            break;
        case 'lr7link':
            labframe.src = "lr7.html";
            break;
        case 'lr8link':
            labframe.src = "lr8.html";
            break;
        case 'lr9link':
            labframe.src = "lr9.html";
            break; 
        case 'lr10link':
            labframe.src = "lr10.html";
            break;
    }
}
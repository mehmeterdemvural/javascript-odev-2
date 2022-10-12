let newDivDOM = document.querySelector("#newDiv");
let listDOM = document.querySelector("#list");

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

let toastBodyDom = document.querySelector(".toast-body");
let taskDOM = document.querySelector("#task");

function newElement(onclick) {
    if (taskDOM.value && taskDOM.value[0] != " ") {
        let newLi = document.createElement("li");
        listDOM.appendChild(newLi);
        let liCounter = document.getElementsByTagName("li").length;
        newLi.id = `li-${liCounter}`;
        taskDOM.value = `${taskDOM.value[0].toUpperCase()}${taskDOM.value.slice(1).toLowerCase()}`;
        newLi.innerHTML = taskDOM.value;
        // localStorage.setItem(`kayıt-${liCounter}`, taskDOM.value);
        taskDOM.value = "";
        toastFunction("Veri, Başarılı Bir Şekilde Eklenmiştir.");


        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        newLi.appendChild(span);
   
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display ="none"
            }
        }

    } else {
        toastFunction("Boş Veri Girişi Yapamazsınız.");
    }
}

function toastFunction(message) {
    const toast = new bootstrap.Toast(toastLiveExample);
    toastBodyDom.innerHTML = message;
    toast.show()
}


var myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);






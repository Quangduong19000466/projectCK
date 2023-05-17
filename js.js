const favorit = document.getElementById('favorit')
let i = 1;

favorit.onclick = function () {
    favorit.setAttribute('style', 'color:red');
    favorit.onclick = function () {
        favorit.setAttribute('style', ' color: #ccc;');
    }

}



// xu li pop up produc
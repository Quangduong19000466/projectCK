const favorit = document.getElementById('favorit');
const favorit1 = document.getElementById('favorit1');
const favorit2 = document.getElementById('favorit2');
const favorit3 = document.getElementById('favorit3');
const favorit4 = document.getElementById('favorit4');
if (favorit) {
    favorit.addEventListener("click", function () {
        favorit.setAttribute('style', 'color:red');
        favorit.addEventListener("click", function () {
            favorit.setAttribute('style', 'color:#ccc');
        })
    })

}
if (favorit1) {
    favorit1.addEventListener("click", function () {
        favorit1.setAttribute('style', 'color:red');
        favorit1.addEventListener("click", function () {
            favorit1.setAttribute('style', 'color:#ccc');
        })
    })

}
if (favorit2) {
    favorit2.addEventListener("click", function () {
        favorit2.setAttribute('style', 'color:red');
        favorit2.addEventListener("click", function () {
            favorit2.setAttribute('style', 'color:#ccc');
        })
    })

}
if (favorit3) {
    favorit3.addEventListener("click", function () {
        favorit3.setAttribute('style', 'color:red');
        favorit3.addEventListener("click", function () {
            favorit3.setAttribute('style', 'color:#ccc');
        })
    })

}

if (favorit4) {
    favorit4.addEventListener("click", function () {
        favorit4.setAttribute('style', 'color:red');
        favorit4.addEventListener("click", function () {
            favorit4.setAttribute('style', 'color:#ccc');
        })
    })

}









const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelector(".product-content-left-small-img img")
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
if (img1) {
    img1.addEventListener("click", function () {
        bigImg.src = img1.src;
    })
}
if (img2) {
    img2.addEventListener("click", function () {
        bigImg.src = img2.src;
    })
}
if (img3) {
    img3.addEventListener("click", function () {
        bigImg.src = img3.src;
    })
}
if (img4) {
    img4.addEventListener("click", function () {
        bigImg.src = img4.src;
    })
}





const bigimg_index = document.querySelector(".big_img_index img");

if (bigimg_index) {
    bigimg_index.addEventListener("click", function () {
        //bigImg.src = "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/17/2b26c16981bdc6ec8559e90fae283c32.jpg"
        console.log("1")
    })
}

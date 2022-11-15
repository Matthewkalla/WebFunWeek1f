
function addLike(element){
    console.log('The element has been clicked');
    var elementID = document.querySelector(element);
    var like = elementID.innerText;
    var likeInt = parseInt(like);
    likeInt += 1;

    elementID.innerText = likeInt;
}

// function addLike1(){
//     var like = document.querySelector('#like1').innerText;
//     var likeInt = 0;
//     likeInt = parseInt(like);
//     likeInt += 1;
//     document.querySelector('#like1').innerText = likeInt;
// }
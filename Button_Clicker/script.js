function changeText(element){
    console.log('element has been clicked');
    
    if(element.innerText == 'Logout'){
        element.innerText = 'Login';
    }

    else{
        element.innerText = 'Logout';
    }
}

function deletion(element){
    element.remove();
}
function displayImage(event) {
  event = event || window.event;
  var targetElement = event.target || event.srcElement
  if (targetElement.tagName == 'IMG') {
    document.getElementById('showImage').src = targetElement.getAttribute('src')
  }else{
    return;
  }
}




// carousal image with next previous image

function changeImage(value){
  if(value == '-'){
    if (i < imageArray.length){
        i = i+1
    }else{
        i = 1
    }
  }else{
    if (i < imageArray.length + 1 && i >1){
      i = i-1
  }else{
      i = imageArray.length
  }
  }
    sliderContent.innerHTML = '<img src= '+imageArray[i-1]+'>'
}

// owl carousal


function displayImage(event) {
    event = event || window.event;
    var targetElement = event.target || event.srcElement
    if (targetElement.tagName == 'IMG') {
        document.getElementById('showImage').src = targetElement.getAttribute('src')
    } else {
        return;
    }
}








// on click display image and description

function displayImageFromArray() {
    debugger
    var curImage = document.getElementById('showImage');
    const array = [{
        imageArray: [
            { src: '../images/bags/bag5.jpg' },
            { src: '../images/bags/bag6.jpg' },
            { src: '../images/bags/bag7.jpg' },
            { src: '../images/bags/bag8.jpg' }
        ],
        discription: 'discription'
    }, {
        imageArray: [{ src: '../images/bags/bag1.jpg' },
            { src: '../images/bags/bag2.jpg' },
            { src: '../images/bags/bag3.jpg' },
            { src: '../images/bags/bag4.jpg' }
        ],
        discription: 'discription1'
    }, {
        imageArray: [{ src: '../images/bags/bag1.jpg' },
            { src: '../images/bags/bag2.jpg' },
            { src: '../images/bags/bag3.jpg' },
            { src: '../images/bags/bag4.jpg' }
        ],
        discription: 'discription2'
    }]
    curImage.src = array[0].imageArray[0].src
    document.getElementById('image1').src = array[0].imageArray[0].src
    document.getElementById('image2').src = array[0].imageArray[1].src
    document.getElementById('image3').src = array[0].imageArray[2].src
    document.getElementById('image4').src = array[0].imageArray[3].src
    document.getElementById('discription').innerHTML = array[0].discription

    array.forEach(function(element, elementIndex) {
        console.log(element)
    });




}


// on click display image and description end


// carousal image with next previous image




function changeImage(value) {
    var sliderContent = document.getElementById('box')
    var imageArray = []
    var newImageArray = []
    imageArray.push({
        imagePath: '../images/bags/bag1.jpg',
    }, {
        imagePath: '../images/bags/bag2.jpg',
    }, {
        imagePath: '../images/bags/bag3.jpg',
    }, {
        imagePath: '../images/bags/bag4.jpg',
    }, {
        imagePath: '../images/bags/bag5.jpg',
    })






    imageArray.forEach(function(element, elementIndex) {
        newImageArray.push(element.imagePath)
    });
    var i = imageArray.length
    if (value == '-') {
        if (i < imageArray.length) {
            i = i + 1
        } else {
            i = 1
        }
    } else {
        if (i < imageArray.length + 1 && i > 1) {
            i = i - 1
        } else {
            i = imageArray.length
        }
    }
    sliderContent.innerHTML = '<img src= ' + imageArray[i - 1].imagePath + '>'
}

// owl carousal
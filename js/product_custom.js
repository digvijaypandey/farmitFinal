const array = [{
    imageArray: [{ src: '../images/bags/bag5.jpg' },
        { src: '../images/bags/bag6.jpg' },
        { src: '../images/bags/bag7.jpg' },
        { src: '../images/bags/bag8.jpg' }
    ],
    description: { head: 'description', name: 'Bag', details: 'The preferred choice of a vast test of acclaimed DJs.dsfg, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable descriptionperformance' }
}, {
    imageArray: [{ src: '../images/bags/bag1.jpg' },
        { src: '../images/bags/bag2.jpg' },
        { src: '../images/bags/bag3.jpg' },
        { src: '../images/bags/bag4.jpg' },
        { src: '../images/bags/bag5.jpg' }
    ],
    description: { head: 'description', name: 'Bag1', details: 'The preferred choice of a vast test of acclaimed DJs. Punchy, 124234ocused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance' }
}, {
    imageArray: [{ src: '../images/bags/bag5.jpg' },
        { src: '../images/bags/bag6.jpg' },
        { src: '../images/bags/bag3.jpg' },
        { src: '../images/bags/bag7.jpg' },
        { src: '../images/bags/bag8.jpg' }
    ],
    description: { head: 'description', name: 'Bag2', details: 'The preferred choice of a vast test of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear hellos suitable for live performance' }

}, {
    imageArray: [{ src: '../images/bags/bag6.jpg' },
        { src: '../images/bags/bag7.jpg' },
        { src: '../images/bags/bag3.jpg' },
        { src: '../images/bags/bag1.jpg' },
        { src: '../images/bags/bag4.jpg' }
    ],
    description: { head: 'description', name: 'Bag3', details: 'The preferred choice odummy datat of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance' }

}, {
    imageArray: [{ src: '../images/bags/bag8.jpg' },
        { src: '../images/bags/bag3.jpg' },
        { src: '../images/bags/bag7.jpg' },
        { src: '../images/bags/bag1.jpg' },
        { src: '../images/bags/bag5.jpg' }
    ],
    description: { head: 'description', name: 'Bag4', details: 'The preferred choice of a vast test of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance' }

}]

var bottmThumbData = [];


array.forEach(function(bottmThumb, bottominsex) {

    bottmThumbData.push(bottmThumb.imageArray[0])
    console.log(bottmThumbData)

})


$(document).ready(function() {
    for (i = 1; i < bottmThumbData.length; i++) {
        document.getElementById('head').innerHTML = array[1].description.head;
        document.getElementById('name').innerHTML = array[1].description.name;
        document.getElementById('details').innerHTML = array[1].description.details;
        document.getElementById(i).src = bottmThumbData[i].src
            // document.getElementById(i).src = '../images/bags/bag' + i + '.jpg'

    }
    document.getElementById('showImage').src = '../images/bags/bag' + 1 + '.jpg'
});

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

function displayImageFromArray(value) {
    var curImage = document.getElementById('showImage');
    var sideThumbnail = []
    this.sideThumbnail = ''


    if (array.length < value) {
        alert('no record found')
    } else {

        for (i = 0; i < array.length; i++) {
            if (value == i) {
                document.getElementById('head').innerHTML = array[i].description.head;
                document.getElementById('name').innerHTML = array[i].description.name;
                document.getElementById('details').innerHTML = array[i].description.details;

                array[i].imageArray.forEach(function(element, elementIndex) {
                    sideThumbnail.push(element)
                    console.log(sideThumbnail)
                    sideThumbnail.forEach(function(sideElement, sideElementIndex) {
                        console.log(array[i].imageArray);
                        if (sideThumbnail.length <= array[i].imageArray.length) {

                            if (sideElementIndex == 0) {
                                document.getElementById('image1').src = sideElement.src
                                document.getElementById('image1').style.display = "block"
                                document.getElementById('showImage').src = sideElement.src
                            } else if (sideElementIndex == 1) {
                                document.getElementById('image2').src = sideElement.src
                                document.getElementById('image2').style.display = "block"
                            } else if (sideElementIndex == 2) {
                                document.getElementById('image3').src = sideElement.src
                                document.getElementById('image3').style.display = "block"
                            } else if (sideElementIndex == 3) {
                                document.getElementById('image4').src = sideElement.src
                                document.getElementById('image4').style.display = "block"
                            } else if (sideElementIndex == 4) {
                                document.getElementById('image5').src = sideElement.src
                                document.getElementById('image5').style.display = "block"
                            }
                        } else {
                            for (i = 1; i < sideThumbnail.length; i++) {

                                document.getElementById('image' + i).style.display = "none";
                            }
                        }

                    })
                });
            }
        }
    }



    curImage.src = array[value].imageArray[0].src
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




$(document).ready(function() {

    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });

});
let allImages = document.getElementsByTagName('img');

Object.keys(allImages).forEach(key => {

    if (allImages[key].parentNode.nodeName == 'A') {

        let wrapper = allImages[key].parentNode.parentNode.parentNode;

        wrapper.classList.add('js-card-hover');
    }
})
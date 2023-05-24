function show(img) {
    let showImgage = $('img.imageShow');
    var fileName = img.src.replace(/^.*[\\\/]/, '');
    showImgage[0].src = 'images/' + fileName;

    let showBoard = $('#showBoard');
    showBoard.show();
}
function hide() {
    let showBoard = $('#showBoard');
    showBoard.hide();
}


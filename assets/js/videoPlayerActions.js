// It will make an ajax call
function likeVideo(button, videoId) {
  $.post('ajax/likeVideo.php', { videoId: videoId }).done(function (data) {
    // Update button image
    let likeButton = $(button);
    let dislikeButton = $(button).siblings('.dislikeButton');

    likeButton.addClass('active');
    dislikeButton.removeClass('active');

    // parse the data
    let result = JSON.parse(data);
    updateLikesValue(likeButton.find('.text'), result.likes);
    updateLikesValue(dislikeButton.find('.text'), result.dislikes);
  });
}

function updateLikesValue(element, num) {
  let likesCountVal = element.text() || 0;
  element.text(parseInt(likesCountVal) + parseInt(num));
}

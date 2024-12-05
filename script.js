let icon_share = document.querySelector('.icon_share');
let share_article = document.querySelector('.share-article');

icon_share.addEventListener('click', () => {

    share_article.classList.toggle('active');
    icon_share.classList.toggle('active');
    if(icon_share.classList.contains('active'))
    {
        icon_share.src = './images/icon-share-white.svg';
    }else{
        icon_share.src = './images/icon-share.svg';
    }

});
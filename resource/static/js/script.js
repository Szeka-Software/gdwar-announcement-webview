var reader;

function click_banner(ele) {
    var id = ele.id;
    var title = ele.querySelector('#title');
    var content = ele.querySelector('#content');
    var openBtn = ele.querySelector('#openBtn');
    var closeBtn = ele.querySelector('#closeBtn');
    var newTag = ele.querySelector('#new');
    var clickYet = title.style.display != 'none' && content.style.display == 'none';

    if (clickYet) {
        setCookie('gdwar_events', id);
        if (newTag != null) {
            newTag.style.display = 'none';
        }
        content.style.display = 'block';
        title.style.display = 'none';
        closeBtn.style.display = 'block';
        openBtn.style.display = 'none';
    } else {
        content.style.display = 'none';
        title.style.display = 'block';
        closeBtn.style.display = 'none';
        openBtn.style.display = 'block';
    }
    console.log('cookie now', getCookie('gdwar_events'));
}

function setCookie(cname, cvalue, exdays) {
    var cookie = getCookie(cname).split(',');
    cookie == '' ? cookie = [] : cookie = cookie;
    console.log('set', cookie)
    if (cookie.includes(cvalue) || cookie.includes(cvalue.toString())) {
        return;
    } else {
        cookie.push(cvalue);
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cookie.toString() + ";" + expires + ";path=/";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function render() {
    var platform = document.getElementsByName('platform')[0].content;
    var viewedList = getCookie('gdwar_events').split(',');
    var element = "";
    var pathname = window.location.pathname.split('/').filter(e => e);
    pathname.pop();
    var subPath = pathname.toString().replace(',', '/');
    var events = await fetch(`${window.location.origin}/announcement/resource/${platform}/event/events.json`).then(res => res.json());
    events.forEach(event => {
        switch (event.type.toLowerCase()) {
            case 'announcement':
                element += renderAnnouncement(platform, event, viewedList);
                break;
            case 'tutorial':
                element += renderTutorial(platform, event, viewedList);
                break;
            default:
                break;
        }
    });
    document.getElementById('events').innerHTML = element;
}

function renderAnnouncement(platform, event, viewedList) {
    var element = "";
    element += `<div class="board" id=${event.id} onclick="click_banner(this)"><div class="bannerArea">`;
    element += `<img id="banner" class="banner separator" src="../resource/${platform}/banner/${event.image}"></img>`;
    if (!viewedList.includes(event.id.toString())) {
        element += '<img id="new" class="banner-new" src="../resource/static/images/new.png">';
    }
    if (event.title != '' || event.title != null || event.content != '' || event.content != null) {
        element += '<img id="closeBtn" class="banner-btn" src="../resource/static/images/close.png" style="display: none;"><img id="openBtn" class="banner-btn" src="../resource/static/images/open.png"></div><div class="detail"><div id="title" class="title" style="display: block;">';
        element += `<p class="whiteText ellipsis-1 font5vw">${event.title}</p></div>`;
        element += '<div id="content" class="content" style="display: none;"><p class="whiteText font5vw">';
        element += `${event.content}`;
        element += '</p></div>';
    }
    element += '</div><img src="../resource/static/images/divider.png"></div>';
    return element;
}

function renderTutorial(platform, event, viewedList) {
    var element = "";
    element += `<div class="board" id=${event.id} onclick="click_banner(this)"><div class="bannerArea">`;
    element += `<img id="banner" class="banner separator" src="../resource/${platform}/banner/${event.image}"></img>`;
    if (!viewedList.includes(event.id.toString())) {
        element += '<img id="new" class="banner-new" src="../resource/static/images/new.png">';
    }
    if (event.title != '' || event.title != null || event.content != '' || event.content != null) {
        element += '<img id="closeBtn" class="banner-btn" src="../resource/static/images/close.png" style="display: none;"><img id="openBtn" class="banner-btn" src="../resource/static/images/open.png"></div><div class="detail"><div id="title" class="title" style="display: block;">';
        element += `<p class="whiteText ellipsis-1 font5vw">${event.title}</p></div>`;
        element += '<div id="content" class="content" style="display: none;">';
        event.content.forEach((img, index) => {
            element += `<img class="center-img" src="../resource/${platform}/banner/${img}">`;
            if (index + 1 != event.content.length) {
                element += '<img class="center-img arrow-size" src="../resource/static/images/arrow_mid.png">';
            }
        });
        element += '</div>';
    }
    element += '</div><img src="../resource/static/images/divider.png"></div>';
    return element;
}

function init() {
    render();
    // console.log('init cookie', getCookie('gdwar_events'));
}

window.onload = init;
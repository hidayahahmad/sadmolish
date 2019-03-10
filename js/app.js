window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

openTest = function(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('test.html');
}

function openHistory(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('history.html');
}

function openActivities(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('activities.html');
}

function openDiary(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('diary.html');
}

function openEntertainment(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('entertainment.html');
}

function openAbout(){
  var myNavigator = document.getElementById('myNavigator');
  myNavigator.pushPage('about.html');
}

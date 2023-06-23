/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var jsmediatags = window.jsmediatags;
var taglist = document.getElementById("taglist");

jsmediatags.read("/VoltacceptYT/assets/My Past (Instrumental).mp3", {
  onSuccess: function(tag) {
    taglist.innerHTML = tag;
  },
  onError: function(error) {
    console.log(error);
  }
});

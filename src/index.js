import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

$(document).ready(function () {
  /* Video Lightbox */
  if (!!$.prototype.simpleLightboxVideo) {
      $('.video').simpleLightboxVideo();
  }

  /*ScrollUp*/
  if (!!$.prototype.scrollUp) {
      $.scrollUp();
  }

  /*Responsive Navigation*/
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").on("click",function() {
      if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
      } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
      }
  });

  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-mobile ul a").on("click",function() {
      if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul").removeClass("expanded").slideUp(250);
          $("#nav-trigger span").removeClass("open");
      }
  });


  $('#content').waypoint(function (direction) {
      if (direction === 'down') {
          $('#header').addClass('nav-solid fadeInDown');
      }
      else {
          $('#header').removeClass('nav-solid fadeInDown');
      }
  });

});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// change require to es6 import style
import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let seconds = 0;

setInterval(() => { seconds += 1; $('#main').html(`You've been on this page for ${seconds} seconds.`); }, 1000);

$(document).ready(function() {
  
//checkbox add class
$('#checkbox1').on('change', function() {
  $('#checkbox1').prop('checked', $(this).is(':checked')).parent().toggleClass('active');
});
$('#checkbox2').on('change', function() {
  $('#checkbox2').prop('checked', $(this).is(':checked')).parent().toggleClass('active');
});
$('#checkbox3').on('change', function() {
  $('#checkbox3').prop('checked', $(this).is(':checked')).parent().toggleClass('active');
});

//range slider
const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(50) // Init value


});
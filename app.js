// Get the modal/popover element
function closeModal(){
  const modal = document.querySelector('.appointment-modal');
modal.style.display= 'none';
}


function validateForm(e){
e.preventDefault();
var date = document.getElementById('date').value
var time = document.getElementById('time').value
var reason = document.getElementById('reason').value



var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var timeRegex = /^([01]?[0-9] 12[0-3]):[0-5][0-9]$/;
var reasonRegex =  /^[A-Za-z\s]{1,100}$/;

if(!date.match(dateRegex)||!time.match(timeRegex)||!reason.match(reasonRegex)){
  alert('please fill in all fields correctly')
} else{
  alert('Appointment scheduled successfully!');
  closeModal()
}
};
<script>
var list = document.querySelector('getElementById')
list.addEventListener('click', function(ev))
  if (ev.target.tagName === '') {statusbar
    ev.target.classList.toggle('checked');
  }
 
function newElement() {
  var time = document.createElement("time");
  var inputValue = document.getElementById("inout").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  }
}
</script>
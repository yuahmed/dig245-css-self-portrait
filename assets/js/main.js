
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

document.addEventListener('mousemove', function(e) {
  var xpos = e.screenX;
  var ypos = e.screenY;
  document.getElementById("mouseTrack").innerHTML = "Cursor Position: X = " + xpos + ", Y = " + ypos;
})

console.log("Total No. of HTML elements:" + document.querySelectorAll("div").length)

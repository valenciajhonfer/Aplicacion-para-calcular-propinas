function Calcular() { 
    var vr1 = document.getElementById('t1').value; 
    var vr2 = document.getElementById('t2').value; 
   
    var p2 = (parseFloat(vr1)); document.getElementById('paga').innerHTML= p2;
    var p = (parseFloat(vr1)*parseFloat(vr2))/100; document.getElementById('promedio').innerHTML = p; 
    var p3 = (parseFloat(vr1)*parseFloat(vr2))/100 + parseFloat(vr1); document.getElementById('total').innerHTML = p3;
}



 

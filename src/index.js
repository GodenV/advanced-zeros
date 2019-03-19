module.exports = function getZerosCount(number, base) { 
  var kolzero=0; 
  var i=2;  
  var step=0; 
  var buf;
  while(base!=1) { 
  while(base%i==0) { 
  base/=i; 
  step++; 
  } 
  buf = Math.floor(chek(number,i)/step);
  if((kolzero>buf || kolzero==0) && step !=0) { 
  kolzero=buf; 
  } 
  step=0; 
  i++; 
  } 
  return Math.floor(kolzero); 
  } 

  function chek(number,n) { 
  var count=0; 
  var buf = n; 
  while(number>=n) { 
  count+=(number-(number%n))/n; 
  n*=buf; 
  } 
  return count; 
  }
var Minimal_Angle = (h, m) => 
{
   let a;
   if (h == 12) {
     h = 0;
   }
    if (m == 60) {
      m = 0;
      h += 1;
    }
       if(h>12){
        h = h-12;
     }
     
    h=(h*30)+(0.5*m)
    m=m*6
    a=m-h
    if(a<0){
      a=a*-1;
    }
    if(a<=180){
      return (a);
    }
    else{
      a=a-180;
      return (a);
    }    
};
 

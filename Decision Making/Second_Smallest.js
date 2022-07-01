
const findSndSmallest = (x,y,z) => {
    if((x>y && x<z) || (x>z && x<y)){
        return (x);
      }
        else if ((y>x && y<z) || (y>z && y<x)){
          return (y);
        }
        else {
          return (z);
        }
    };
    
    
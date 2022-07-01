
const findGrades = (a) => {
    switch (true) {
      case a<=10:
      return ("E");
    
      case (11<=a && a<=20): 
      return ("D");
    
      case (21<=a && a<=30):
      return ("C");
    
      case (31<=a && a<=40): 
      return ("B");
    
      case (41<=a && a<=50): 
      return ("A");
    }
      
  };
  
  
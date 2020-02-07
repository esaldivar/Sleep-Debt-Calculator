const getSleepHours = day => {
    switch (day) {
      case 'monday':return 8;
      break;
      case 'tuesday': return 8;
      break;
      case 'wednesday': return 7;
      break;
      case 'thursday': return 7;
      break;
      case 'friday': return 6;
     break;
      case 'saturday': return 6;
      break;
      case 'sunday': return 9;
      break;
      default: return 'Error';
    }
    };
    
    // end of getSleepHours 
    

    // /i was having such a hard time with the code below because I was treating it was surrounded by {} rather than just defined as a sum.
    const getActualSleepHours = () => 
      getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    
    
    // test the function above 
    
    const getIdealSleepHours = () => {
      const idealSleepHours = 8;
      return idealSleepHours * 7;
    };
    
     // console.log(getIdealSleepHours()); // test function above
    
    const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
      if(actualSleepHours  === idealSleepHours) {
        console.log('You got the perfect amount of sleep this week!');
      } // equal sleep and ideal brace
      else if(actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than you need.  Hey sleepyhead, don\'t you think you got too much sleep this week?');
      } // more sleep than ideal
      else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than you need. You need to get more sleep.');
      } // less than ideal --- end of comparison
    }; // last line of calculateSleepDebt
    
    calculateSleepDebt();
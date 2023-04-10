function getSumOfEvenNumbersOfInterval(intervalStart: number, intervalEnd: number): number {
    let sumOfEvenNumberOfInterval = 0;
  
    for (let i = intervalStart; i <= intervalEnd; i++) {
      if (i % 2 == 0) {
        sumOfEvenNumberOfInterval += i;
      }
    }
    return sumOfEvenNumberOfInterval;
  }
const sequenceSum = (begin, end) => {
    // BEGIN
  if (begin === end) {
    return begin;
  }
  if (begin > end) {
    return NaN;
  }

  return sequenceSum (begin + 1, end) + begin;

    // END
  };
  
export default sequenceSum;
  
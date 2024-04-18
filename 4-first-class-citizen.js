const run = (text) => {
    // BEGIN
    function takeLast(string, n) {
        let dlina = string.length;
        if (dlina === 0 || n > dlina)
            return null;
        return string.slice(dlina - n).split('').reverse().join('');
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;
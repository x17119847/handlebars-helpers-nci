module.exports = {
  
  // Is Selected - adds "selected" to HTML select boxes when "input" matches "value"
  isSelected: (input, value) => {
    return input == value ? 'selected' : '';
  },

  // Apply Value - adds "value" to the input when the value.id is equal to id.
  applyValue: (id, values) => {
    if(values) {
      for(val of values) {
        if(val.paxTypeId == id && val.price >= 0) return val.price;
      }
    }
  },

  // Times (for loop) - creates a short cut for making multiple iterations.
  times: (n, block) => {
    let accum = '';
    for (var i = 0; i < n; ++i)
      accum += block.fn(i);
    return accum;
  }
}
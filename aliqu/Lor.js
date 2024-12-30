// Assume 'this' is a jQuery object containing multiple elements
this.each(function(i, cont) {
    // 'i' is the index of the current element in the collection
    // 'cont' is the current element (DOM element)
    
    // Example: Add a class to each element
    $(cont).addClass('highlight');
    
    // Example: Log the index and content of each element
    console.log('Element ' + i + ': ' + $(cont).text());
});

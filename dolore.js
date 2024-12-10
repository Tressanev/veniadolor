// Example item object
const item = {
  id: 1,
  name: 'Sample Item',
  createdTime: '2024-06-22T04:53:10Z',
  // Other properties...
};

// Extract the createdTime property and assign it to created_time_str
const created_time_str = item['createdTime'];

// Log the extracted value
console.log(created_time_str); // Output: 2024-06-22T04:53:10Z

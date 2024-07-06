// Exporting a const instance of WeakMap
export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    // Initialize the counter for the endpoint if it doesn't exist in the WeakMap
    weakMap.set(endpoint, 0);
  }

  // Increment the counter for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is 5 or more, throw an error if it is
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

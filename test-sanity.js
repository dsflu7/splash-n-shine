import { serverClient } from '$lib/server/sanity';

async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...');
    
    // Test basic connection
    const result = await serverClient.fetch('*[_type == "splash-n-shine-post"][0..2]{ _id, title, slug }');
    console.log('Sanity connection test result:', result);
    
    return result;
  } catch (error) {
    console.error('Sanity connection error:', error);
    return [];
  }
}

// Run the test
testSanityConnection();

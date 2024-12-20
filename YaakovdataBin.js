const apiUrl = 'https://api.jsonbin.io/v3/b/672a607cad19ca34f8c4bd6d';
const secretKey = '$2a$10$Xcs5LFmTkteCjm/Hk25SWu6FsaBlUs7rbyUhWQQP5dOBt0D61blKW';

// Function to get JSON data from the server
async function getJsonFromServer() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Access-Key': secretKey
      }
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Function to update JSON data on the server
async function updateJsonToServer(data) {
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': secretKey,
        'versioning': 'false' // Prevents creating a new version on update
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

// Event listener for the save button
document.getElementById('saveButton').addEventListener('click', async () => {
  const inputData = document.getElementById('dataInput').value;
  if (inputData) {
    const dataToSave = { content: inputData };

    try {
      // Save the data
      await updateJsonToServer(dataToSave);
      alert('Data saved successfully!');

      // Fetch and display the updated data
      const updatedData = await getJsonFromServer();
      document.getElementById('output').textContent = JSON.stringify(updatedData, null, 2);
    } catch (error) {
      alert('Error saving data. Check the console for details.');
      console.error('Error:', error);
    }
  } else {
    alert('Please enter some data to save.');
  }
});

// Initial data fetch on page load
(async function fetchDataOnLoad() {
  try {
    const data = await getJsonFromServer();
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error fetching initial data:', error);
  }
})();

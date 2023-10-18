// Handle the file upload and data visualization
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const fileInput = document.getElementById('csvFile');
    const chartContainer = document.querySelector('.chart-container');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = e.target.result;
            const parsedData = Papa.parse(data, { header: true }).data;

            // Prepare data for visualization
            const labels = parsedData.map(row => row.Label);
            const values = parsedData.map(row => parseFloat(row.Value));

            // Create a bar chart
            const ctx = document.getElementById('barChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Data Visualization',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartContainer.style.display = 'block';
        };

        reader.readAsText(file);
    }
});
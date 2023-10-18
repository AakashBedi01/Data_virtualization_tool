<!DOCTYPE html>
<html>
<head>
    <title>Data Visualization Tool</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <h1>Data Visualization Tool</h1>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
        <label for="csvFile">Upload a CSV file:</label>
        <input type="file" name="csvFile" id="csvFile" accept=".csv" required>
        <button type="submit">Upload and Visualize</button>
    </form>
    <div class="chart-container">
        <canvas id="barChart" width="400" height="200"></canvas>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
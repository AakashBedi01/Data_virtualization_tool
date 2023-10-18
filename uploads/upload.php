<?php
if (isset($_FILES['csvFile'])) {
    $uploadDir = 'uploads/';
    $uploadedFile = $uploadDir . basename($_FILES['csvFile']['name']);

    if (move_uploaded_file($_FILES['csvFile']['tmp_name'], $uploadedFile)) {
        header('Location: index.php');
    } else {
        echo 'File upload failed.';
    }
} else {
    echo 'No file uploaded.';
}

<?php
  $fields = [];
  $fields['name'] = $_POST['name'] ?? NULL;
  $fields['sex'] = $_POST['sex'] ?? NULL;
  $fields['q1'] = $_POST['q1'] ?? NULL;
  $fields['q2'] = $_POST['q2'] ?? NULL;
  $fields['q3'] = $_POST['q3'] ?? NULL;
  // validation
  $errors = [];
  foreach($fields as $k => $v) {
    if(is_null($v) || $v == "") $errors[] = "The {$k} field is required!";
  }
  if(empty($errors)) {
    echo '<h1 style="color: green;">Thanks you very plenty!</h1>';
    print_r($fields);
  } else {
    echo '<h1 style="color: red;">Errors man! Errors...</h1>';
    print_r($errors);
  }
<?php

class Github {
  public function message()
  {
    return "GitHub is for everyone";
  }
}

$github = new Github();
echo $github->message();
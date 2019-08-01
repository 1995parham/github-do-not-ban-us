<?php
	
class GithubIsForEveryone {
  public function support()
  {
    return "GitHub is for everyone";
  }
}

$github = new GithubIsForEveryone();
echo $github->support();


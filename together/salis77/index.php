<?php
class GithubIsForEveryOne
{
    public $message = "<h1 style='text-align: center'> Github is for Everyone! </h1>";

    public function __construct()
    {
        echo $this->message;
    }
}

$message = new GithubIsForEveryOne();
return $message;

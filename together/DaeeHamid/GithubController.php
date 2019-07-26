<?php

namespace App\Http\Everyone;


class GithubIsForController extends Everyone
{
    public $msg = "Github Is For Everyone";

    /**
     * @return string
     */
    public function index()
    {
		// Github is for everyone
		// Do not ban Iranian developers
		// Hamid Eghbali From Iran Kashan·
        return $this->msg; 
    }
}

<?php

namespace App\Http\Everyone;


class GithubIsForController extends Everyone
{
    public $msg = "GitHub Is For Everyone";

    /**
     * @return string
     */
    public function index()
    {
		// GitHub is for everyone
		// Do not ban Iranian developers
		// Hamid Eghbali From Iran Kashan·
        return $this->msg; 
    }
}

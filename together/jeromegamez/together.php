<?php

final class GitHubIsFor
{
    /** @var string */
    private $who;

    public static function everyone(): self
    {
        $gitHubIsFor = new self();
        $gitHubIsFor->who = 'everyone';

        return $gitHubIsFor;
    }

    public function __toString()
    {
        return 'GitHub is for '.$this->who;
    }
}

echo GitHubIsFor::everyone();

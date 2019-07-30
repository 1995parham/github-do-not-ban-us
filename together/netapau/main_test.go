/*
 * @author netapau.
 * @version 1.0.
 * @description GitHub is for everyone
 * @createDate 2019-07-29.
 * @from planet earth, milki way
 */
package main

import (
    "testing"
)

func TestGithubIsForEveryone(t *testing.T) {
    got := "Ban !"
    want := "Code"

    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}


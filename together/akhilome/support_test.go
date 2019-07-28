package main

import "testing"

func TestSupport(t *testing.T) {
	t.Run("should show support", func(t *testing.T) {
		got := ShowSupport()
		want := "GitHub na for everybody!"

		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	})
}

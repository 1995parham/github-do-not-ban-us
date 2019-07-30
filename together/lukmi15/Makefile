run: github_is_for_everyone.out Makefile
	@./$<

clean: Makefile
	@sh -c 'rm -v *.out 2>/dev/null'; exit 0

github_is_for_everyone.out: github_is_for_everyone.cpp Makefile
	@g++ -Wall $< -o $@

.PHONY: run

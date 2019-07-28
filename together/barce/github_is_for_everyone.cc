#include <iostream>
#include <unistd.h>
#include <cstdlib>
#include <exception>
using namespace std;

void usage(void);
void github_is_for_everyone(void);


int main(int argc, char** argv)
{
  extern char *optarg;
  extern int optind;
  int ch, fd;
  char *cvalue;

  while ((ch = getopt(argc, argv, "h")) != -1)
  {
    switch (ch) {
      case 'h':
        usage();
        return 0;
      case '?':
        default:
          throw std::exception();
    }
    argc -= optind;
    argv += optind;
	}

 github_is_for_everyone();

  return 0;
}

void usage(void)
{
	cout << "Usage: github_is_for_everyone\n";
}

void github_is_for_everyone(void) { cout << "Github is for everyone.\n"; }

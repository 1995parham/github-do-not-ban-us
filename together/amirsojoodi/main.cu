#define GRID_DIM 80000000 // Iran's Population
#define BLOCK_DIM 1024 // Most available threads of a GPU block

__global__ void protest_kernel(){
	printf("Thread %d: GitHub do not ban us!\n", blockIdx.x * blockDim.x + threadIdx.x);
}

int main(){
	printf("GitHub is for everyone.\n");
	protest_kernel<<<GRID_DIM, BLOCK_DIM>>>();
	return 0;
}

#include <mpi.h>
#include <stdio.h>

//--    TO COMPILE      mpicc main.c -o free-github.out
//--    TO RUN          mpirun -n pp ./free-github.out
//--    pp (integer)    No.of Processors

int main(int argc, char** argv) {
    int procs, myid, init_res, name_len;
    char processor_name[MPI_MAX_PROCESSOR_NAME];
    
    // Initialize the MPI environment
    init_res = MPI_Init(&argc, &argv);
    if (init_res != MPI_SUCCESS){
        printf("\nError initializing MPI.\n");
        MPI_Abort(MPI_COMM_WORLD, init_res);
        return 0;
    } // end if

    // Get number of processors.
    MPI_Comm_size(MPI_COMM_WORLD, &procs);

    // Get processor id.
    MPI_Comm_rank(MPI_COMM_WORLD, &myid);
    
    // Get the name of the processor.
    MPI_Get_processor_name(processor_name, &name_len);

    // print the message
    printf("Processor %s, rank %d out of %d prints: GitHub is for everyone.\n", processor_name, myid, procs);

    // Finalize the MPI environment.
    MPI_Finalize();
    return 0;
}
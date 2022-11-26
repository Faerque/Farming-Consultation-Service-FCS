// Title: This Program Removing left recursion from the following grammars:
// E->E+t|f
// A->Abc|de
// B->bBc|ef

// Objective:
// Short description: This program Checks the grammar contains left recursion, if present then separates the production and start working on it.
// algorithm/pseudo code:
// 1.input n number
// 2.for i=0 to i=n
// 3.  input omaring
// 4.  If(omaring[0]==omaring[3] print(“yes left recursion”)
// 5.      For i=4 to i=omaring.length
// 6.                 If(omaring[i]=”|”) print(omaring[i))
// 7. Else print(“no left recusion”)

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int n,c=0;
    printf("Enter the number of productions: ");
    scanf("%d", &n);
    char omaring[100];
    for (int i = 0; i < n; i++)
    {
       
        gets(omaring);
        if (omaring[0] == omaring[3])
        {
            printf("Yes left recursion\n");
            printf(omaring[0], "%s ->");
            int len = strlen(omaring);
            for (int i = 4; i < len; i++)
            {
                if (omaring[i] == '|')
                {
                    c=i;
                    for (int j = c+1; j < len; j++)
                    {
                        printf(omaring[j]);
                    }
                }
            }
            printf(omaring[0], "`\n");
            printf(omaring[0], "`->");
            for(int i=4;i<c;i++)
            {
                printf(omaring[i]);
            }
            printf(omaring[0], "`|$\n");
        }
    else
    {
        printf("No left recursion");
    }
    }
    return 0;
}
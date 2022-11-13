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



#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int main(){
    int n;
    char omaring[100];
    printf("Enter the number of omaring: ");
    scanf("%d",&n);
    int a=0;
    for(int i=0;i<n;i++){
        printf("Enter the omaring: ");
        scanf("%s",omaring);
        int len = strlen(omaring);
        if(omaring[0]==omaring[3]){
            printf("Yes left recursion\n");
            printf("%c->",omaring[0]);
            for(int i=4;i<len;j++){
                if(omaring[i]=='|'){
                a=i;
                for(int j=i+1;j<len;j++){
                    printf("%c",omaring[j]);

                    }
                }
            }
            printf("%c'\n",omaring[0]);
            printf("%c'->",omaring[0]);
            for(int i=4;i<a;i++){
                printf("%c",omaring[i]);
            }
            printf("e\n");
        }
        else{
            printf("No left recursion\n");
        }
    }
    return 0;
    }
// Write a program to name the following punctuations:
// , . : ; ' " ? ! ( ) { } [ ] \ /

#include <stdio.h>

int main(void)
{
// need to write a program that will take input as this punctuations and print the name of the punctuations
    printf("Enter the punctuations: ");
    char ch;
    scanf("%c", &ch);
    switch(ch)
    {
        case ',':
            printf("Comma");
            break;
        case '.':
            printf("Full stop");
            break;
        case ':':
            printf("Colon");
            break;
        case ';':
            printf("Semicolon");
            break;
        case '\'':
            printf("Single quote");
            break;
        case '"':
            printf("Double quote");
            break;
        case '?':
            printf("Question mark");
            break;
        case '!':
            printf("Exclamation mark");
            break;
        case '(':
            printf("Opening parenthesis");
            break;
        case ')':
            printf("Closing parenthesis");
            break;
        case '{':
            printf("Opening curly bracket");
            break;
        case '}':
            printf("Closing curly bracket");
            break;
        case '[':
            printf("Opening square bracket");
            break;
        case ']':
            printf("Closing square bracket");
            break;
        case '\\':
            printf("Backslash");
            break;
        case '/':
            printf("Forward slash");
            break;
        default:
            printf("Invalid input");
    }
    return 0;

    }
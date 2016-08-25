using System;

class IndexOfLletters
{
    static void Main()
    {
        //We have to create and populate the array with upper and lower case letters
        char[] arr = new char[52];

        for (int idx = 0; idx < 26; idx++)
            arr[idx] = (char)(idx + 65);

        for (int idx = 26; idx < 52; idx++)
            arr[idx] = (char)(idx + 97 - 26);

        Console.Write("Enter word: ");   //asking for word
        string input = Console.ReadLine();

        for (int idx = 0; idx < input.Length; idx++)  //checking the indexes
        {
            for (int idxArr = 0; idxArr < arr.Length; idxArr++)
            {
                if (input[idx] == arr[idxArr])
                {
                    Console.Write("(" + idxArr + ")"); //outputting the index of each letter
                }
            }
        }
    }
}

/* Write a program that creates an array containing all letters from the alphabet (A-Z).
Read a word from the console and print the index of each of its letters in the array. */
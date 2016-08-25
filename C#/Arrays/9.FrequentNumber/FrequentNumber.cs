using System;

class FrequentNumber
{
    static void Main()
    {
        int currentCounter = 1;
        int counter = 0;
        int mostFrequentNumber = 0;
        int[] numbers = new int[13] { 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3 };
        for (int i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] != mostFrequentNumber)
            {
                for (int j = i + 1; j < numbers.Length - i; j++)
                {
                    if (numbers[j] == numbers[i])
                    {
                        currentCounter++;
                    }
                }
                if (currentCounter > counter)
                {
                    counter = currentCounter;
                    mostFrequentNumber = numbers[i];
                }
                currentCounter = 1;
            }
        }
        Console.WriteLine("The most frequest number in the given array is {0} and can be found {1} times", mostFrequentNumber, counter);
    }
}

/* Write a program that finds the most frequent number in an array. */
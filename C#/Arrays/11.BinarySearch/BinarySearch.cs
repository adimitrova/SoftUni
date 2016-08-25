using System;

class BinarySearch
{
    static void Main()
    {
        int[] numbers = new int[19] { 0, 13, 2, 69, 49, 59, 45, 77, 58, 104, 10, 18, 58, 35, -8, -38, 7, 4, 5 };
        int findNum = 77;
        int index = 0;
        Array.Sort(numbers);
        int center = numbers.Length / 2;
        int currentNum = numbers[center];
        while (findNum != currentNum)
        {
            while (findNum > currentNum)
            {
                center = (numbers.Length + center) / 2;
                currentNum = numbers[center];
            }
            while (findNum < currentNum)
            {
                center = (center) / 2;
                currentNum = numbers[center];
            }
            index = center;
        }
        Console.WriteLine("{0} is under index {1}", findNum, index);
    }
}


/* Write a program that finds the index of given element in a sorted array of integers by using the Binary search algorithm. */

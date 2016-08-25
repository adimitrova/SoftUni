using System;

class SelectionSort
{
    static void Main()
    {
        //first we enter the array from the console and convert the input to array of integers
        Console.Write("Enter array (members SEPARATED with a space): ");
        string[] arrStr = Console.ReadLine().Split(' ');
        int[] arr = new int[arrStr.Length];
        for (int i = 0; i < arrStr.Length; i++)
        {
            arr[i] = int.Parse(arrStr[i]);
        }

        //next we have the sorting algo, we start from the first looking for smaller and then exchange the member values
        for (int indx = 0; indx < arr.Length - 1; indx++)   //we begin with the first member and finish at before the last
        {
            for (int sortIndx = indx + 1; sortIndx < arr.Length; sortIndx++)    //we start the comaprison with the next member from the current and finish with the last
            {
                if (arr[indx] > arr[sortIndx])  //if the next element is smaller than the one we began with, we exchange their values
                {
                    arr[indx] += arr[sortIndx];
                    arr[sortIndx] = arr[indx] - arr[sortIndx];
                    arr[indx] -= arr[sortIndx];
                }
            }
        }

        foreach (var item in arr)   //print the sorted array arr[]
        {
            Console.WriteLine(item + " ");
        }
    }
}


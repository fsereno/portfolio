using System;
using Microsoft.Data.DataView;
using Microsoft.ML;
using Microsoft.ML.Data;

using Entities;
using Services;

// CS0649 compiler warning is disabled because some fields are only 
// assigned to dynamically by ML.NET at runtime
#pragma warning disable CS0649

namespace app_mlDotnet_Program
{
    class Program
    {
        static void Main(string[] args)
        {
            MLContext mlContext = new MLContext();
            var mlService = new MLService(mlContext);
            var result = mlService.Predict();

            Console.WriteLine($"Predicted flower type is: {result}");
            Console.WriteLine("Press any key to exit....");
            Console.ReadLine();
        }
    }
}
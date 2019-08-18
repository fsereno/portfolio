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
            var inputColumnName = "Label";
            var outputColumnName = "Features";
            var columnNames = new []{"SepalLength", "SepalWidth", "PetalLength", "PetalWidth"};
            var predictionColumnName = "PredictedLabel";

            var data = mlService.Get("../Data/iris-data.txt");
            var pipeline = mlService.Transform(inputColumnName, outputColumnName, columnNames, predictionColumnName);
            var model = mlService.Train(pipeline, data);
            var irisData = new IrisData()
                {
                    SepalLength = 3.3f,
                    SepalWidth = 1.6f,
                    PetalLength = 0.2f,
                    PetalWidth = 5.1f,
                };
                
            var prediction = mlService.Predict(irisData, model);
            var result = prediction.PredictedLabels;

            Console.WriteLine($"Predicted flower type is: {result}");
            Console.WriteLine("Press any key to exit....");
            Console.ReadLine();
        }
    }
}
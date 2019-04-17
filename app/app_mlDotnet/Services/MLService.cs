using System;
using Microsoft.Data.DataView;
using Microsoft.ML;
using Microsoft.ML.Data;

using Entities;
using Interfaces;

namespace Services
{
    public class MLService : IMLService 
    {
        private MLContext MlContext;
        
        public MLService(MLContext mlContext){
            
            MlContext = mlContext;
        
        }
        public IDataView Get(string path){
            
            IDataView trainingDataView = MlContext.Data.LoadFromTextFile<IrisData>(path: path, hasHeader: false, separatorChar: ',');

            return trainingDataView;
        }
        public Microsoft.ML.Data.EstimatorChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> Transform(){
            
            var outputColumnName = "Features";
            var pipeline = MlContext.Transforms.Conversion.MapValueToKey("Label")
                .Append(MlContext.Transforms.Concatenate(outputColumnName, "SepalLength", "SepalWidth", "PetalLength", "PetalWidth"))
                .AppendCacheCheckpoint(MlContext)
                .Append(MlContext.MulticlassClassification.Trainers.StochasticDualCoordinateAscent(labelColumnName: "Label", featureColumnName: outputColumnName))
                .Append(MlContext.Transforms.Conversion.MapKeyToValue("PredictedLabel"));
            
            return pipeline;
        }
        public Microsoft.ML.Data.TransformerChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> Train(Microsoft.ML.Data.EstimatorChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> pipeline, IDataView trainingDataView){
            
            var model = pipeline.Fit(trainingDataView);
            
            return model;
        }
        public Entities.IrisPrediction Predict(IrisData irisData, Microsoft.ML.Data.TransformerChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> model){

            var prediction = model.CreatePredictionEngine<IrisData, IrisPrediction>(MlContext)
                .Predict(irisData);

            return prediction;
        }
    }
}

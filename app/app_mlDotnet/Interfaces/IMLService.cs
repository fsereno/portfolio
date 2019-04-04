using System;
using Microsoft.Data.DataView;
using Microsoft.ML;
using Microsoft.ML.Data;

using Entities;

namespace Interfaces
{
    public interface IMLService
    {
        IDataView Get(string path);
        Microsoft.ML.Data.EstimatorChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> Transform();
        Microsoft.ML.Data.TransformerChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> Train(Microsoft.ML.Data.EstimatorChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> pipeline, IDataView trainingDataView); 
        Entities.IrisPrediction Predict(IrisData irisData, Microsoft.ML.Data.TransformerChain<Microsoft.ML.Transforms.KeyToValueMappingTransformer> model);
    }
}

using System;
using Microsoft.Data.DataView;
using Microsoft.ML.Data;

namespace Entities
{
    public class IrisPrediction
    {
        [ColumnName("PredictedLabel")]
        public string PredictedLabels;
    }
}
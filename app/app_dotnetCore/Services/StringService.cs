
namespace Services
{
    public class StringService : IStringService
    {
        public string ConcatStringArray(string[] stringArray)
        {
            var result = string.Empty;

            foreach(var stringInput in stringArray)
            {
                result += stringInput + " ";
            }
            return result.Trim();
        }
    }
}

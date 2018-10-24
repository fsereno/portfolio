namespace Services
{
    public class StringService : IStringService
    {
        public string ConcatStringArray(string[] stringArray)
        {
            if (stringArray == null)
            {
                throw new System.ArgumentNullException(nameof(stringArray));
            }

            var result = string.Empty;

            foreach(var stringInput in stringArray)
            {
                result += stringInput + " ";
            }
            return result.Trim();
        }
    }
}

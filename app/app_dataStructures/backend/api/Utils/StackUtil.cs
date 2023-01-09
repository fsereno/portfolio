using System.Collections;
using Portfolio.DataStructures.Interfaces;

namespace Portfolio.DataStructures.Utils
{
    public class StackUtil : ICollectionUtil<Stack<string>>
    {
        /// </inheritdoc>
        public void Add(Stack<string> collection, string value)
        {
            collection?.Push(value);
        }

        /// </inheritdoc>
        public void Remove(Stack<string> collection)
        {
            collection?.Pop();
        }

        /// </inheritdoc>
        public Stack<string> Create(string[] array = null)
        {
            var collection = new Stack<string>();

            if (array != null)
            {
                for (var i = array.Length - 1; i >= 0; i--)
                {
                    Add(collection, array[i]);
                }
            }

            return collection;
        }
    }
}
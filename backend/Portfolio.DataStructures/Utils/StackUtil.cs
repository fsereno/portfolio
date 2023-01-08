using System.Collections;
using Portfolio.DataStructures.Interfaces;

namespace Portfolio.DataStructures.Utils
{
    public class StackUtil : ICollectionUtil<Stack>
    {
        /// </inheritdoc>
        public void Add(Stack collection, string value)
        {
            collection?.Push(value);
        }

        /// </inheritdoc>
        public void Remove(Stack collection)
        {
            collection?.Pop();
        }

        /// </inheritdoc>
        public Stack Create(string[] array = null)
        {
            var collection = new Stack();

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
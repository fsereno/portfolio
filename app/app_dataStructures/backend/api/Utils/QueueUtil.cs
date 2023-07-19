using System.Collections;
using Portfolio.DataStructures.Interfaces;

namespace Portfolio.DataStructures.Utils
{
    public class QueueUtil : ICollectionUtil<Queue<string>>
    {
        /// </inheritdoc>
        public void Add(Queue<string> collection, string value)
        {
            collection?.Enqueue(value);
        }

        /// </inheritdoc>
        public void Remove(Queue<string> collection)
        {
            collection?.Dequeue();
        }

        /// </inheritdoc>
        public Queue<string> Create(string[] array = null)
        {
            var collection = array != null ? new Queue<string>(array) : new Queue<string>();

            return collection;
        }
    }
}
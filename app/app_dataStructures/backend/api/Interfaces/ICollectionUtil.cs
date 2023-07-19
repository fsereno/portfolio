namespace Portfolio.DataStructures.Interfaces
{
    public interface ICollectionUtil<T>
    {
        /// <summary>
        /// Adds an item to the collection
        /// </summary>
        /// <param name="collection"></param>
        /// <param name="value">Takes a collection of type T</param>
        void Add(T collection, string value);

        /// <summary>
        /// Removes an item to the collection
        /// </summary>
        /// <param name="collection">Takes a collection of type T</param>
        void Remove(T collection);

        /// <summary>
        /// Creates a collection of type T
        /// </summary>
        /// <param name="array">The primitive array to create the collection from if not null</param>
        /// <returns>Returns the collection of type T</returns>
        T Create(string[] array = null);
    }
}
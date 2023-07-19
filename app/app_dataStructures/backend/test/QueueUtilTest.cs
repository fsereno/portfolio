using System.Collections;
using Portfolio.DataStructures.Interfaces;
using Portfolio.DataStructures.Utils;
using Xunit;

namespace Portfolio.DataStructures.Test
{
    public class QueueUtilTest
    {
        private readonly Queue<string> _queue;
        private readonly ICollectionUtil<Queue<string>> _queueUtil;

        public QueueUtilTest()
        {
            _queueUtil = new QueueUtil();
            _queue = _queueUtil.Create();
        }

        [Fact]
        public void Add_ShouldAddItemToQueue()
        {
            _queueUtil.Add(_queue, "Item 1");

            var result = _queue.Count;
            Assert.Equal(1, result);
        }

        [Fact]
        public void Add_ShouldNotErrorWhenNullIsPassedForQueue()
        {
            _queueUtil.Add(null, "Item 1");

            var result = _queue.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldRemoveItemFromQueue()
        {
            _queueUtil.Add(_queue, "Item 1");
            _queueUtil.Remove(_queue);

            var result = _queue.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldNotRemoveIfQueueIsNull()
        {
            _queueUtil.Remove(null);

            var result = _queue.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Create_ShouldCreateQueueWhenCollectionPassedIsNull()
        {
            Assert.IsType<Queue<string>>(_queue);
        }

        [Fact]
        public void Create_ShouldCreateAQueueAndRemoveInTheCorrectOrder_FIFO()
        {
            var array = new string[] { "1", "2" };
            var queue = _queueUtil.Create(array);

            _queueUtil.Add(queue, "3");
            _queueUtil.Remove(queue);

            var result = queue.Peek();
            Assert.Equal("2", result);
        }
    }
}
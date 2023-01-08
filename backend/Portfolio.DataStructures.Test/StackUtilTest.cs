using System.Collections;
using Portfolio.DataStructures.Interfaces;
using Portfolio.DataStructures.Utils;
using Xunit;

namespace Portfolio.DataStructures.Test
{
    public class StackUtilTest
    {
        private readonly Stack _stack;
        private readonly ICollectionUtil<Stack> _queueUtil;

        public StackUtilTest()
        {
            _queueUtil = new StackUtil();
            _stack = _queueUtil.Create();
        }

        [Fact]
        public void Add_ShouldAddItemToStack()
        {
            _queueUtil.Add(_stack, "Item 1");

            var result = _stack.Count;
            Assert.Equal(1, result);
        }

        [Fact]
        public void Add_ShouldNotErrorWhenNullIsPassedForStack()
        {
            _queueUtil.Add(null, "Item 1");

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Add_ShouldAddItemToStackInCorrectOrder()
        {
            var stack = new Stack(new string[] { "1", "2" });

            _queueUtil.Add(stack, "3"); // this results in 321

            var result = stack.Peek();
            Assert.Equal("3", result);
        }

        [Fact]
        public void Add_ShouldAddItemToStackInCorrectOrderWhenOrderIsReversedAlready()
        {
            var stack = new Stack(new string[] { "2", "1" });

            _queueUtil.Add(stack, "3");

            var result = stack.Peek();
            Assert.Equal("3", result);
        }

        [Fact]
        public void Remove_ShouldRemoveItemFromStack()
        {
            _queueUtil.Add(_stack, "Item 1");
            _queueUtil.Remove(_stack);

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldNotRemoveIfStackIsNull()
        {
            _queueUtil.Remove(null);

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldRemoveItemFromStackInCorrectOrder()
        {
            var stack = new Stack(new string[] { "1", "2", "3" });
            _queueUtil.Remove(stack);

            var result = stack.Peek();
            Assert.Equal("2", result);
        }

        [Fact]
        public void Create_ShouldCreateStackWhenCollectionPassedIsNull()
        {
            Assert.IsType<Stack>(_stack);
        }

        [Fact]
        public void Create_ShouldCreateAStackAndRemoveInCorrectOrderIfInitialOrderIsReversed_LIFO()
        {
            var array = new string[] { "2", "1" };
            var stack = _queueUtil.Create(array);

            _queueUtil.Add(stack, "3");
            _queueUtil.Remove(stack);

            var result = stack.Peek();
            Assert.Equal("2", result);
        }
    }
}
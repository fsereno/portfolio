using System.Collections;
using Portfolio.DataStructures.Interfaces;
using Portfolio.DataStructures.Utils;
using Xunit;

namespace Portfolio.DataStructures.Test
{
    public class StackUtilTest
    {
        private readonly Stack<string> _stack;
        private readonly ICollectionUtil<Stack<string>> _stackUtil;

        public StackUtilTest()
        {
            _stackUtil = new StackUtil();
            _stack = _stackUtil.Create();
        }

        [Fact]
        public void Add_ShouldAddItemToStack()
        {
            _stackUtil.Add(_stack, "Item 1");

            var result = _stack.Count;
            Assert.Equal(1, result);
        }

        [Fact]
        public void Add_ShouldNotErrorWhenNullIsPassedForStack()
        {
            _stackUtil.Add(null, "Item 1");

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Add_ShouldAddItemToStackInCorrectOrder()
        {
            var stack = new Stack<string>(new string[] { "1", "2" });

            _stackUtil.Add(stack, "3"); // this results in 321

            var result = stack.Peek();
            Assert.Equal("3", result);
        }

        [Fact]
        public void Add_ShouldAddItemToStackInCorrectOrderWhenOrderIsReversedAlready()
        {
            var stack = new Stack<string>(new string[] { "2", "1" });

            _stackUtil.Add(stack, "3");

            var result = stack.Peek();
            Assert.Equal("3", result);
        }

        [Fact]
        public void Remove_ShouldRemoveItemFromStack()
        {
            _stackUtil.Add(_stack, "Item 1");
            _stackUtil.Remove(_stack);

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldNotRemoveIfStackIsNull()
        {
            _stackUtil.Remove(null);

            var result = _stack.Count;
            Assert.Equal(0, result);
        }

        [Fact]
        public void Remove_ShouldRemoveItemFromStackInCorrectOrder()
        {
            var stack = new Stack<string>(new string[] { "1", "2", "3" });
            _stackUtil.Remove(stack);

            var result = stack.Peek();
            Assert.Equal("2", result);
        }

        [Fact]
        public void Create_ShouldCreateStackWhenCollectionPassedIsNull()
        {
            Assert.IsType<Stack<string>>(_stack);
        }

        [Fact]
        public void Create_ShouldCreateAStackAndRemoveInCorrectOrderIfInitialOrderIsReversed_LIFO()
        {
            var array = new string[] { "2", "1" };
            var stack = _stackUtil.Create(array);

            _stackUtil.Add(stack, "3");
            _stackUtil.Remove(stack);

            var result = stack.Peek();
            Assert.Equal("2", result);
        }
    }
}
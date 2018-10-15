
using NUnit.Framework;

namespace Services.Tests
{

    [TestFixture]
    public class StringServiceTests
    {
        IStringService _stringService;

        [SetUp]
        public void BeforeEachTest()
        {

            _stringService = new StringService();

        }

        [TestCase("String 1", "String 2", "String 1 String 2")]
        [TestCase("My Name is :", "James Brown", "My Name is : James Brown")]
        public void ShouldReturnAConcatString_WhenInputIsAStringArray(
            string inputA, string inputB, string outcome)
        {

            // Arrange
            var input = new string[] { inputA, inputB};

            // Act
            var result = _stringService.ConcatStringArray(input);

            // Assert
            Assert.That(result, Is.TypeOf<string>());
            Assert.That(result, Is.EqualTo(outcome));

        }

    }
}

using NUnit.Framework;
using Prime.Services;

namespace Prime.UnitTests.Services
{
    [TestFixture]
    public class PrimeService_IsPrimeShould
    {
        private PrimeService _primeService;

        [SetUp]
        public void BeforeEachTest()
        {
            _primeService = new PrimeService();
        }

        [TestCase(1, true)]
        public void ReturnFalseGivenValueOf1(int input, bool outcome)
        {
            // Arrange
            // Act
            var result = _primeService.IsPrime(input);
            
            // Assert
            Assert.IsFalse(result);

        }
    }
}
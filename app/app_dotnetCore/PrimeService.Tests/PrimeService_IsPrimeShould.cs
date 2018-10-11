using NUnit.Framework;
using Prime.Services;

namespace Prime.UnitTests.Services
{
    [TestFixture]
    public class PrimeService_IsPrimeShould
    {
        private readonly PrimeService _primeService;

        public PrimeService_IsPrimeShould()
        {
            _primeService = new PrimeService();
        }

        [Test]
        public void ReturnFalseGivenValueOf1()
        {
            // Arrange
            var testCase1 = 1;
            var testCase2 = 2;

            // Act
            var testCase1Result = _primeService.IsPrime(testCase1);
            var testCase2Result = _primeService.IsPrime(testCase2);

            // Assert
            Assert.IsFalse(testCase1Result, "1 should not be prime");
            Assert.IsTrue(testCase2Result, "2 Should be a prime number");
        }
    }
}
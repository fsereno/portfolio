using System;
using System.Collections.Generic;
using Xunit;
using Interfaces;
using Utils;

namespace aws.Tests
{
    public class StringSortUtilTests
    {
        private IStringSortUtil _sut { get; set; }
        public StringSortUtilTests()
        {
            this._sut = new StringSortUtil();
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_Alpha_String()
        {
            var commaSeperatedString = "B,A,C";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_Numeric_String()
        {
            var commaSeperatedString = "2,3,1,4,10";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1,2,3,4,10", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_AlphaNumeric_String()
        {
            var commaSeperatedString = "a2,c3,1,4,b10";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1,4,a2,b10,c3", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_AlphaNumeric_String_Big_Numbers()
        {
            var commaSeperatedString = "1000099882,c1000099881,1000081882a,a1,1000089881b";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1000081882a,1000089881b,1000099882,a1,c1000099881", result);
        }
    }
}
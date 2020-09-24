using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using aws;
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
        public void Test_SortNumeric_Should_Return_A_Type_Of_String()
        {
            var commaSeperatedString = "1,2,3";
            var result = this._sut.SortNumeric(commaSeperatedString);
            Assert.IsType<string>(result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_The_Same_If_In_The_Correct_Order()
        {
            var commaSeperatedString = "1,2,3";
            var result = this._sut.SortNumeric(commaSeperatedString);
            Assert.Equal("1,2,3", result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_A_Sorted_String()
        {
            var commaSeperatedString = "10,3,1,2";
            var result = this._sut.SortNumeric(commaSeperatedString);
            Assert.Equal("1,2,3,10", result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_An_Empty_String()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.SortNumeric(commaSeperatedString);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_A_Type_Of_String()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.SortNumeric(commaSeperatedString);
            Assert.IsType<string>(result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_The_Same_If_In_The_Correct_Order()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.SortAlpha(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_A_Sorted_String()
        {
            var commaSeperatedString = "C,B,A";
            var result = this._sut.SortAlpha(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_An_Empty_String()
        {
            var commaSeperatedString = "1,2,3";
            var result = this._sut.SortAlpha(commaSeperatedString);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_Sort_Should_Return_Sorted_String()
        {
            var commaSeperatedString = "r,e,h,a,b,4,k,8,3,v,c,4,c,k,8";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("3,4,4,8,8,a,b,c,c,e,h,k,k,r,v", result);
        }
    }
}
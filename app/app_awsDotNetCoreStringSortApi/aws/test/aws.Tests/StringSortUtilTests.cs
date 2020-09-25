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
using Models;
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
            var result = this._sut.Sort(commaSeperatedString);
            Assert.IsType<string>(result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_The_Same_If_In_The_Correct_Order()
        {
            var commaSeperatedString = "1,2,3";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1,2,3", result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_A_Sorted_String()
        {
            var commaSeperatedString = "10,3,1,2";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1,2,3,10", result);
        }

        [Fact]
        public void Test_SortNumeric_Should_Return_An_Empty_String()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_A_Type_Of_String()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.IsType<string>(result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_The_Same_If_In_The_Correct_Order()
        {
            var commaSeperatedString = "A,B,C";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_A_Sorted_String()
        {
            var commaSeperatedString = "C,B,A";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_SortAlpha_Should_Return_An_Empty_String()
        {
            var commaSeperatedString = "1,2,3";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("1,2,3", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_Sorted_String()
        {
            var commaSeperatedString = "r,e,h,a,b,4,k,8,3,v,c,4,c,k,8";
            var result = this._sut.Sort(commaSeperatedString);
            Assert.Equal("3,4,4,8,8,a,b,c,c,e,h,k,k,r,v", result);
        }

        [Fact]
        public void Test_Join_Should_Return_Empty_String()
        {
            var values = new string[0];
            var result = this._sut.Join(values);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_Join_Should_Return_String_With_No_Comma_Seperator()
        {
            var values = new string[]{ "1,2,3" };
            var result = this._sut.Join(values);
            Assert.Equal("1,2,3", result);
        }

        [Fact]
        public void Test_Join_Should_Return_String_With_Comma_Seperator()
        {
            var values = new string[]{ "1,2,3", "4,5,6" };
            var result = this._sut.Join(values);
            Assert.Equal("1,2,3,4,5,6", result);
        }

        [Fact]
        public void Test_Join_Should_Return_String_With_Multiple_Comma_Seperators()
        {
            var values = new string[]{ "1,2,3", "4,5,6", "7,8,9" };
            var result = this._sut.Join(values);
            Assert.Equal("1,2,3,4,5,6,7,8,9", result);
        }

        [Fact]
        public void Test_Split_At_Alpha_No_Numeric()
        {
            var value = "a";
            var result = Regex.Split(value, "[a-zA-Z]");
            Assert.Equal(string.Empty, result[0]);
        }

        [Fact]
        public void Test_Split_At_Alpha_With_Numeric_Last()
        {
            var value = "a1";
            var result = Regex.Split(value, "[a-zA-Z]");
            Assert.Equal("1", result[1]);
        }

        [Fact]
        public void Test_Split_At_Alpha_With_Numeric_First()
        {
            var value = "1a";
            var result = Regex.Split(value, "[a-zA-Z]");
            Assert.Equal("1", result[0]);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Xunit;
using Interfaces;
using Utils;
using Models;

namespace aws.Tests
{
    public class StringSortUtilTests
    {
        private IStringSortUtil _sut { get; set; }
        public StringSortUtilTests()
        {
            _sut = new StringSortUtil();
        }

        [Fact]
        public void Test_Sort_Should_Not_Error_On_Empty_String()
        {
            var commaSeperatedString = string.Empty;
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_Sort_Should_Not_Error_With_Null_Value()
        {
            var result = _sut.Sort(null);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_Sort_Should_Return_Same_String_If_In_Order()
        {
            var commaSeperatedString = "A,B,C";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_Alpha_String()
        {
            var commaSeperatedString = "B,A,C";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_String_Ignoring_Spaces()
        {
            var commaSeperatedString = "B , A,C, 1 ";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("1,A,B,C", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_Numeric_String()
        {
            var commaSeperatedString = "2,3,1,4,10";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("1,2,3,4,10", result);
        }

        [Fact]
        public void Test_Sort_Should_Return_A_Sorted_AlphaNumeric_String()
        {
            var commaSeperatedString = "a2,c3,1,4,b10";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("1,4,a2,b10,c3", result);
        }

        [Fact]
        public void Test_Sort_Should_Sort_Complex_Names()
        {
            var commaSeperatedString = "ToDoList10,ToDoList1,ToDoListB,ToDoListA,ToDoList5";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("ToDoList1,ToDoList5,ToDoList10,ToDoListA,ToDoListB", result);
        }

        [Fact]
        public void Test_Sort_Should_Sort_File_Names_With_Extensions()
        {
            var commaSeperatedString = "ToDoList10.txt,ToDoList1.txt,ToDoListB.txt,ToDoListA.txt,ToDoList5.txt";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("ToDoList1.txt,ToDoList5.txt,ToDoList10.txt,ToDoListA.txt,ToDoListB.txt", result);
        }

        [Fact]
        public void Test_Sort_Should_Sort_File_Names_With_Alpha_Numeric_Alpaha_Characters()
        {
            var commaSeperatedString = "ToDo_List-10.txt,ToDo_List-1.txt,ToDo_List-B.txt,ToDo_List-A.txt,ToDo_List-5.txt,ToDo_List-1A.txt";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("ToDo_List-1.txt,ToDo_List-1A.txt,ToDo_List-5.txt,ToDo_List-10.txt,ToDo_List-A.txt,ToDo_List-B.txt", result);
        }

        [Fact]
        public void Test_Sort_Should_Sort_On_Numerics_First_When_They_Exist()
        {
            var commaSeperatedString = "C,5A,B2,10A,A5,1A,A1,A,1,10,4,20A,B10";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("1,1A,4,5A,10,10A,20A,A,A1,A5,B2,B10,C", result);
        }

        [Fact]
        public void Test_Sort_Should_Manage_With_Mixed_Formats()
        {
            var commaSeperatedString = "C,A,10,ToDo_List-11,1A,B,ToDo_List-1,2,Basket-2,3,1,0,B1,0-Version-Documents,ToDo_List-10";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("0,0-Version-Documents,1,1A,2,3,10,A,B,B1,Basket-2,C,ToDo_List-1,ToDo_List-10,ToDo_List-11", result);
        }

        [Fact]
        public void Test_Sort_Should_Manage_With_Multi_Numerical_Values()
        {
            var commaSeperatedString = "document_1A1.txt,document_1A2.txt,document_1B1.txt,document_A.txt,document_1A.txt";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("document_1A.txt,document_1A1.txt,document_1A2.txt,document_1B1.txt,document_A.txt", result);
        }

        [Fact]
        public void Test_Sort_Should_Manage_With_Multi_Alpha_Numeric_Values()
        {
            var commaSeperatedString = "document_A2A.txt,document_A1.txt,document_A1B.txt,document_A10A.txt,document_A1A.txt";
            var result = _sut.Sort(commaSeperatedString);
            Assert.Equal("document_A1.txt,document_A1A.txt,document_A1B.txt,document_A2A.txt,document_A10A.txt", result);
        }

        [Fact]
        public void Test_Join_Should_Return_String_Of_Single_Item()
        {
            var sortedCharacters = new List<SortItem>(){ new SortItem("A") };
            var result = _sut.Join(sortedCharacters);
            Assert.Equal("A", result);
        }

        [Fact]
        public void Test_Join_Should_Return_String_Of_Multiple_Items_Comma_Seperated()
        {
            var sortedCharacters = new List<SortItem>()
            {
                new SortItem("A"),
                new SortItem("B"),
                new SortItem("C")
            };
            var result = _sut.Join(sortedCharacters);
            Assert.Equal("A,B,C", result);
        }

        [Fact]
        public void Test_Join_Should_Return_Empty_String_When_Collection_Is_Empty()
        {
            var sortedCharacters = new List<SortItem>();
            var result = _sut.Join(sortedCharacters);
            Assert.Equal(string.Empty, result);
        }

        [Fact]
        public void Test_Join_Should_Return_Empty_String_When_Collection_Is_Null()
        {
            var result = _sut.Join(null);
            Assert.Equal(string.Empty, result);
        }
    }
}
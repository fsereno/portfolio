using System;
using System.Collections.Generic;
using Domains;
using NUnit.Framework;

namespace Services.Tests
{
    [TestFixture]
    public class QueueServiceTests
    {
        private List<QItem> _collection;

        [SetUp]
        public void BeforeEach()
        {
            var collection = new List<QItem>();

            collection.Add(new QItem(1, DateTime.Now){
                PreviousNumberOfItems = new Queue<int>(new List<int>{
                    1,
                    1,
                    2
                })
            });

            collection.Add(new QItem(1, DateTime.Now){
                PreviousNumberOfItems = new Queue<int>(new List<int>{
                    2,
                    4,
                    6
                })
            });

            _collection = collection;
        }

        private int checkCount(List<QItem> collection){
            var result = 0;
            foreach(var account in collection)
            {
                result += account.PreviousNumberOfItems.Count;
            }
            return result;
        }

        [Test]
        public void Get()
        {
            var listToReturn = new List<QItem>();

            while(checkCount(_collection) > 0) {

                var i = 0;
                var item = new QItem(){
                    NumberOfItems = 0
                };

                foreach(var account in _collection){
                        item.NumberOfItems += account.PreviousNumberOfItems.Dequeue();
                    i++;
                }

                listToReturn.Add(item);
            }

             // Assert
            Assert.That(listToReturn[0].NumberOfItems, Is.EqualTo(3));
            Assert.That(listToReturn[1].NumberOfItems, Is.EqualTo(5));
            Assert.That(listToReturn[2].NumberOfItems, Is.EqualTo(8));
        }
    }
}

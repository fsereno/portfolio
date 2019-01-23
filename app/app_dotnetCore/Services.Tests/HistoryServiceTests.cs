using System;
using System.Collections.Generic;
using System.Linq;
using Repositories;
using Domains;
using NUnit.Framework;

namespace Services.Tests
{
    [TestFixture]
    public class HistoryServiceTests
    {
        private List<History> _collection;

        [SetUp]
        public void BeforeEach()
        {
            var collection = new List<History>();
            
            collection.Add(new History(45555, 1, DateTime.Now){
                PreviousDates = new Queue<DateTime>(new List<DateTime>{
                    DateTime.Now.AddMonths(1),
                    DateTime.Now.AddMonths(2),
                    DateTime.Now.AddMonths(3)
                    }
                ),
                PreviousNumberOfInvestments = new Queue<int>(new List<int>{
                    1,
                    1,
                    2
                })
            });

            collection.Add(new History(666666, 1, DateTime.Now){
                PreviousDates = new Queue<DateTime>(new List<DateTime>{
                    DateTime.Now.AddMonths(1),
                    DateTime.Now.AddMonths(2),
                    DateTime.Now.AddMonths(3)
                    }
                ),
                PreviousNumberOfInvestments = new Queue<int>(new List<int>{
                    2,
                    4,
                    6
                })
            });

            _collection = collection;
        }

        private int checkCount(List<History> collection){
            var result = 0;
            foreach(var account in collection)
            {
                result += account.PreviousDates.Count;
            }
            return result;
        }

        [Test]
        public void Get()
        {
            var listToReturn = new List<History>();
            
            while(checkCount(_collection) > 0) {

                var i = 0;
                var item = new History(){
                    NumberOfInvestments = 0,
                    NumberOfAccounts = 0
                };

                foreach(var account in _collection){
                        item.Date = account.PreviousDates.Dequeue();
                        item.NumberOfAccounts ++;
                        item.NumberOfInvestments += account.PreviousNumberOfInvestments.Dequeue();                    
                    i++;
                }

                listToReturn.Add(item);
            }

             // Assert
            Assert.That(listToReturn[0].NumberOfAccounts, Is.EqualTo(2));
            Assert.That(listToReturn[0].NumberOfInvestments, Is.EqualTo(3));
            Assert.That(listToReturn[1].NumberOfInvestments, Is.EqualTo(5)); 
            Assert.That(listToReturn[2].NumberOfInvestments, Is.EqualTo(8)); 
        
        }
    }
}

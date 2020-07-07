using System.Collections.Generic;
using System.Linq;
using Repositories;
using Domains;
using NUnit.Framework;

namespace Services.Tests
{
    [TestFixture]
    public class PersonServiceTests
    {
        IPersonService<Person> _personService;
        IRepository<Person> _repository;
        List<Person> _collection;

        [SetUp]
        public void BeforeEach()
        {
            var persons = new List<Person>();
            persons.Add(new Person() { Id = 2, Age = 1 });
            persons.Add(new Person() { Id = 1, Age = 2 });

            _collection = persons;
            _repository = new Repository<Person>(persons);
            _personService = new PersonService<Person>(_repository);
        }

        [Test]
        public void Get()
        {
            //Arrange
            var person = new Person() { Id = 1 };

            //Act
            var result = _personService.Get(person);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.TypeOf<Person>());
        }

        [Test]
        public void GetAll(){

            //Arrange
            //Act
            var persons = _personService.GetAll();

            //Assert
            Assert.That(persons, Is.TypeOf<List<Person>>());
        }

        [Test]
        public void Add()
        {
            //Arrange
            var newPerson = new Person() { Id = 3 };

            //Act
            _personService.Add(newPerson);
            var result = _personService.Get(newPerson);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.TypeOf<Person>());
            Assert.That(result.Id, Is.EqualTo(3));
        }

        [Test]
        public void Add_Two_Identical_Records()
        {
            //Arrange
            var newPerson1 = new Person() { Id = 1 };

            //Act
            _personService.Add(newPerson1);
            var result = _personService.Get(newPerson1);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.TypeOf<Person>());
            Assert.That(result.Id, Is.EqualTo(1));
        }

        [Test]
        public void SortById()
        {
            //Arrange
            //Act
            var result = _personService.SortById(_collection);
            var id = result.First().Id;
            //Assert
            Assert.That(id, Is.EqualTo(1));
        }
    }
}

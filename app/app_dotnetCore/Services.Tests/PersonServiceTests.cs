using System.Collections.Generic;
using Repositories;
using Domains;
using NUnit.Framework;

namespace Services.Tests
{
    [TestFixture]
    public class PersonServiceTests
    {
        IPersonService _personService;
        IRepository<Entity> _repository;

        [SetUp]
        public void BeforeEach()
        {
            var persons = new List<Entity>();
            persons.Add(new Person() { Id = 1 });
            persons.Add(new Person() { Id = 2 });

            _repository = new Repository(persons);

            _personService = new PersonService(_repository);
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
    }
}

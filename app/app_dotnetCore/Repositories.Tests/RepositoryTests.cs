using System;
using System.Collections.Generic;
using Domains;
using NUnit.Framework;

namespace Repositories.Tests
{
    [TestFixture]
    public class RepositoryTests
    {
        IRepository<Person> _repository;

        [SetUp]
        public void BeforeEach()
        {

            var persons = new List<Person>();
            persons.Add(new Person() { Id = 1 });
            persons.Add(new Person() { Id = 2 });

            _repository = new Repository<Person>(persons);
        }

        [Test]
        public void Get()
        {
            //Arrange
            var person = new Person() { Id = 1 };

            //Act
            var result = _repository.Get(person);

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
            _repository.Add(newPerson);
            var result = _repository.Get(newPerson);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.TypeOf<Person>());
            Assert.That(result.Id, Is.EqualTo(3));

        }

        [Test]
        public void Add_ShouldThrowException_WhenNullIsPassed_UnHappyPath()
        {
            //Arrange
            //Act
            //Assert
            var result = Assert.Throws<ArgumentNullException>(() => _repository.Add(null));
            Assert.That(result.Message, Is.EqualTo("Value cannot be null.\nParameter name: entity"));

        }
    }
}

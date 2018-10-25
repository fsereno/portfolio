using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVC.Models;
using Services;
using Domains;

namespace MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPersonService<Person> _personService;

        public HomeController
        (
            IPersonService<Person> personService
        )
        {
            _personService = personService;
        }
       
        public IActionResult Index()
        {

            var persons = _personService.GetAll();

            var homeViewModel = new HomeViewModel(persons);

            return View(homeViewModel);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Template.Controllers
{
    public class HomeController : Controller
    {
        public Task<IActionResult> Index()
        {
            return Task.Run(() =>
            {
                return (IActionResult)View();
            });
        }

        public Task<IActionResult> Error()
        {
            return Task.Run(() =>
            {
                return (IActionResult)View();
            });
        }
    }
}